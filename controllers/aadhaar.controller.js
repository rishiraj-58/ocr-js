import Tesseract from "tesseract.js";
import { join } from 'path';
import { cwd } from "process";
import sharp from "sharp";

const tessDataPath = join(cwd(), 'data');

const DESIRED_WIDTH = 735;
const DESIRED_HEIGHT = 481;

// const MAX_WIDTH = 1080;
// const MAX_HEIGHT = 720;

const TESSERACT_CONFIG = {
    tessedit_char_whitelist: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    tessdata: tessDataPath,
    psm: Tesseract.PSM.SINGLE_LINE
};

const NAME_RGX = /\b[A-Z][a-z]*([A-Z][a-z]*)*\b/g;

const AADHAAR_NUMBER_RGX = /\b(\d{4}\s?\d{4}\s?\d{4})\b/;

const DOB_RGX = /DOB\s*:\s*(\d{2})\/(\d{2})\/(\d{4})/;

const YEAR_OF_BIRTH_RGX = /Year of Birth\s*:? ?(\d{4})/i;

const GENDER_RGX = /(\b(Male|Female|Transgender)\b)/i;

function extractAadhaarNumber(line) {
  const match = line.match(AADHAAR_NUMBER_RGX);
  if (match) {
    return match[1].replace(/\s/g, '');
  }
  return null;
}  

function extractDOB(line) {
  const match = line.match(DOB_RGX);
  if (match) {
    const day = match[1];
    const month = match[2];
    const year = match[3];
    return `${day}/${month}/${year}`;
  }
  return null;
}  

function extractYOB(line) {
  const match = line.match(YEAR_OF_BIRTH_RGX);
  if (match) {
    return match[1];
  }
  return null;
}

function extractGender(line) {
  const regex = GENDER_RGX;
  const match = line.match(regex);
  if (match) {
    return match[1].toLowerCase();
  }
  return null;
}

async function preprocessImage(buffer) {
  let image = sharp(buffer);
  const metadata = await image.metadata();
  
  if (metadata.width < DESIRED_WIDTH || metadata.height < DESIRED_HEIGHT) {
    const scaleFactor = Math.max(DESIRED_WIDTH / metadata.width, DESIRED_HEIGHT / metadata.height);

    image = image.resize(Math.round(metadata.width * scaleFactor));
  }

  let outputBuffer = await image
    .linear(1.0, -25)
    .toBuffer();

  return outputBuffer;
}

async function extractAadhaarInfo(buffer) {
  const image = await preprocessImage(buffer);

  const result = await Tesseract.recognize(image, 'eng', TESSERACT_CONFIG);
  
  const lines = result.data.text
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line);
  
  // console.log(lines);

  const aadhaarInfo = {};

  let dobIdx = -1;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (AADHAAR_NUMBER_RGX.test(line)) {
      aadhaarInfo.aadhaarNumber = extractAadhaarNumber(line);
    } else if (GENDER_RGX.test(line)) {
      aadhaarInfo.gender = extractGender(line);
    } else if (DOB_RGX.test(line)) {
      aadhaarInfo.yearOfBirth = extractDOB(line);
      dobIdx = i;
    } else if (YEAR_OF_BIRTH_RGX.test(line)) {
      aadhaarInfo.yearOfBirth = extractYOB(line);
      dobIdx = i;
    }
    
    // Exit the loop if all required information has been extracted
    if (aadhaarInfo.aadhaarNumber && aadhaarInfo.gender && aadhaarInfo.yearOfBirth) {
      break;
    }
  }  

  if(dobIdx > -1) {
    const words = lines[dobIdx - 1].match(NAME_RGX);
    if(words) {
      aadhaarInfo.name = words.join(' ');
    }
  }
  
  return aadhaarInfo;
}  
  
export default async function aadhaarExtractor(req, res) {
  try {
    if (!req.file) {
      return res
        .status(400)
        .send({ status: 'failure', message: 'No Image Provided' });
    }

    const data = await extractAadhaarInfo(req.file.buffer);

    return res.status(200).send({ status: 'success', data });
  } catch (e) {
    console.error(e);

    return res
      .status(500)
      .send({ status: 'failure', message: 'Something went wrong.' });
  }
}

import Tesseract from "tesseract.js";
import { join } from 'path';
import { cwd } from "process";
import sharp from "sharp";

const tessDataPath = join(cwd(), 'data');

const TESSERACT_CONFIG = {
    tessedit_char_whitelist: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    tessdata: tessDataPath,
    psm: Tesseract.PSM.SINGLE_LINE
};

const PAN_PATTERN = /\b[A-Z]{5}[0-9]{4}[A-Z]{1}\b/;

const DOB_PATTERN = /\b\d{2}\/\d{2}\/\d{4}\b/;

const NAME_RGX = /\bName\b/i;

const NAME_EXT_RGX = /([A-Z]{2,})(?:\s+[A-Z]{1,}){0,2}/;

const FATHER_NAME_RGX = /\bFather's Name\b/i;

function extractPanDetails(lines) {
  let extractedInfo = {
    name: "",
    fatherName: "",
    dob: "",
    pan: ""
  };
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    const dobMatch = line.match(DOB_PATTERN);
    if (FATHER_NAME_RGX.test(line)) {
        extractedInfo.fatherName = lines[i + 1].match(NAME_EXT_RGX)[0];
    } else if (NAME_RGX.test(line)) {
        extractedInfo.name = lines[i + 1].match(NAME_EXT_RGX)[0];
    } else if (dobMatch) {
        extractedInfo.dob = dobMatch[0];
    } else {
      const panMatch = line.match(PAN_PATTERN);
      if (panMatch) {
        extractedInfo.pan = panMatch[0];
      }
    }
  }
  
  return extractedInfo;
}

export default async function extractPanInfo(req, res) {
    try {
        const image = sharp(req.file.buffer);

        let outputBuffer = await image
            .greyscale()
            .linear(1.0, -25)
            .toBuffer();

        const result = await Tesseract.recognize(outputBuffer, 'eng', TESSERACT_CONFIG);
        
        const lines = result.data.text
            .split('\n')
            .map((line) => line.trim())
            .filter((line) => line);

        const data = extractPanDetails(lines);

        return res.status(200).send({ status: 'success', data });
    } catch(e) {
        console.error(e);
        res.status(500).send({
            status: 'failure',
            message: 'Something went wrong',
        });
    }
}
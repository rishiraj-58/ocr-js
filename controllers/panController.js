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

function processResult(result, panDetails) {
  const dateRegex = /^(\d{2})(?:[\/1])(\d{2})(?:[\/1])(\d{4})/;
  const panRegex = /\b[a-zA-Z]{5}[0-9]{4}[a-zA-Z]\b/;
  const nameRegex = /name\b/i;
  const lines = result.data.text
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line);

  let flag = 0;

  for (const line of lines) {
    if (line.trim()) {
      if (line.replace(/\s/g, '').length < 4) {
        continue;
      }
      const nline = line.replace(/[^a-zA-Z0-9/ ]/g, '').trim();
      console.log(nline)
      const match = nline.match(panRegex);
      if (match) {
        panDetails["pan"] = match[0].replace(/\s.*$/, '');
      }
      const dateMatch = nline.match(dateRegex);
      if (dateMatch) {
        const formattedDate = dateMatch[0].replace(/\s.*$/, '');
        const modifiedDate = formattedDate.slice(0, 2) + '/' + formattedDate.slice(3, 5) + '/' + formattedDate.slice(6);
        panDetails["dob"] = modifiedDate;
      }
      if (nameRegex.test(nline) && flag === 0) {
        flag = 1;
        continue;
      }
      if (flag === 1 && /^[a-zA-Z ]+$/.test(nline) && nline.length > 3) {
        panDetails["name"] = nline;
        flag = 2;
        continue;
      }
      if (nameRegex.test(nline) && flag === 2) {
        flag = 3;
        continue;
      }
      if (flag === 3 && nline.length > 3) {
        panDetails["fatherName"] = nline;
        flag = 0;
      }
    }
  }

  if (panDetails["name"].length === 0) {
    for (const line of lines) {
      if (line.trim()) {
        const nline = line.replace(/[^a-zA-Z0-9/ ]/g, '').trim();
        if (/INDIA\b/i.test(nline)) {
          flag = 1;
          continue;
        }
        if (flag === 1 && /^[a-zA-Z ]+$/.test(nline) && nline.length > 3) {
          const modifiedLine = nline.replace(/[a-z]/g, "").trim();
          if (modifiedLine.replace(/\s/g, '').length < 4) {
            continue;
          }
          panDetails["name"] = modifiedLine;
          flag = 2;
          continue;
        }
        if (flag === 2) {
          if (/^[a-zA-Z ]+$/.test(nline) && nline.length > 3) {
            const modifiedLine = nline.replace(/[a-z]/g, "").trim();
            if (modifiedLine.replace(/\s/g, '').length < 4) {
              continue;
            }
            panDetails["fatherName"] = modifiedLine;
            break;
          }
        }
      }
    }
  }

  return panDetails;
}

export default async function extractPanInfo(req, res) {
    try {
        // Load the image using image-js
  const img = sharp(req.file.buffer);

        let outputBuffer = await img
            .greyscale()
            .linear(1.0, -25)
            .toBuffer();
            
        let result = await Tesseract.recognize(outputBuffer, 'eng+hin', TESSERACT_CONFIG);
        


  let panDetails = {
    "name": "",
    "fatherName": "",
    "dob": "",
    "pan": ""
  };

  panDetails = processResult(result, panDetails)
  console.log("-----------------")

  if(panDetails["name"]=="" || panDetails["fatherName"]=="" || panDetails["dob"]=="" || panDetails["pan"]=="")
  {
    img.modulate({ brightness: 2.5, saturation: 1, hue: 0, contrast: 2.5 });
    outputBuffer = await img
    .greyscale()
    .linear(1.0, -25)
    .toBuffer();
    
    result = await Tesseract.recognize(outputBuffer, 'eng+hin', TESSERACT_CONFIG);
    panDetails = processResult(result, panDetails)
  }
   res.status(200).json({
      status: 'success',
      data: panDetails
    });
    }
    catch(e) {
        console.error(e);
        res.status(500).send({
            status: 'failure',
            message: 'Something went wrong',
        });
    }
  
}

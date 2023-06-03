import { fromBuffer } from "pdf2pic";
import sharp from "sharp";
import { createWorker } from "tesseract.js";
import { cwd } from 'process';
import { join } from "path";

const langPath = join(cwd(), 'data');

const base64ToBuffer = str => Buffer.from(str, 'base64');

const SLICES = [
    { top: 97, left: 77, bottom: 246, right: 568 },
    { top: 251, left: 77, bottom: 405, right: 568 },
    { top: 408, left: 77, bottom: 560, right: 568 },
    { top: 94, left: 574, bottom: 142, right: 805 },
    { top: 94, left: 812, bottom: 142, right: 1048 },
    { top: 357, left: 812, bottom: 406, right: 1048 },
    { top: 568, left: 75, bottom: 1650, right: 1275 },
];

function convertAmountToNumber(amountWords) {
  const words = amountWords.replace(/INR|Only/gi, '').trim().toLowerCase().split(' ');
  let amount = 0;
  let currentGroup = 0;
  let decimalPart = 0;
  let decimalFlag = false; // flag to check if decimal part is being parsed

  const groups = {
    'hundred': 100,
    'thousand': 1000,
    'lakh': 100000,
    'crore': 10000000
  };

  const numberWords = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'ten': 10,
    'eleven': 11,
    'twelve': 12,
    'thirteen': 13,
    'fourteen': 14,
    'fifteen': 15,
    'sixteen': 16,
    'seventeen': 17,
    'eighteen': 18,
    'nineteen': 19,
    'twenty': 20,
    'thirty': 30,
    'forty': 40,
    'fifty': 50,
    'sixty': 60,
    'seventy': 70,
    'eighty': 80,
    'ninety': 90
  };

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const nextWord = words[i + 1];
    if (numberWords[word] !== undefined) {
      if (decimalFlag) {
        decimalPart += numberWords[word];
        decimalPart /= 100;
      } else {
        currentGroup += numberWords[word];
      }
    } else if (word === 'and') {
      // check if the substring after "and" is a decimal part
      const remainingWords = words.slice(i + 1).join(' ');
      if (remainingWords.endsWith('paisa') || remainingWords.endsWith('paise')) {
        decimalFlag = true;
      }
    } else if (groups[word] !== undefined) {
      amount += (currentGroup * groups[word]);
      currentGroup = 0;
    } else if (word === 'paisa' || word === 'paise') {
      decimalFlag = true;
    } else if (nextWord && groups[nextWord] !== undefined) {
      amount += (currentGroup * groups[nextWord]);
      currentGroup = 0;
    } else {
      throw new Error(`Unrecognized word: ${word}`);
    }
  }

  if (decimalFlag) {
    amount += currentGroup + decimalPart;
  } else {
    amount += currentGroup;
  }

  return parseFloat(amount.toFixed(2));
}

const GSTIN_RGX = /GSTIN\/UIN\s*:\s*(\w{15})/;

const BIZNAME_RGX = /^M\/s\s*([\w\s.&]+)(?:(?:\s*-\s*)|(?:\s*\(\s*FY\s*\d{4}-\d{2}\s*\)\s*))?/i;

const CGST_RGX = /^CGST\|\s*([\d,]+(\.\d{1,2})?)$|^Output CGST\|\s*([\d,]+(\.\d{1,2})?)$/i;

const SGST_RGX = /^SGST\|\s*([\d,]+(\.\d{1,2})?)$|^Output CGST\|\s*([\d,]+(\.\d{1,2})?)$/i;

const IGST_RGX = /^IGST\|\s*([\d,]+(\.\d{1,2})?)$|^Output IGST\|\s*([\d,]+(\.\d{1,2})?)$/i;

const DATE_RGX = /\b\d{1,2}-[a-zA-Z]{3}-\d{4}\b/;

const INVOICE_NO_RGX = /^Invoice No\.\s*(GST\/\d{2}-\d{2}\/\d+|\d+)/i;

const DESTINATION_RGX = /^Destination\s*([A-Za-z]+)/;

const STATE_RGX = /State Name\s*:\s*(?<stateName>[a-zA-Z\s]+),\s*Code\s*:\s*(?<stateCode>\d+)/;

const EMAIL_RGX = /E-Mail\s*:\s*(?<email>[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/;

const AMOUNT_RGX = /INR\s+(\w+\s*)+Only/i;

function extractAmount(line) {
  const regex = AMOUNT_RGX;
  const match = line.match(regex);
  if (match) {
    return match[0];
  } else {
    return null;
  }
}

function extractStateNameAndCode(inputString) {
  const match = inputString.match(STATE_RGX);
  if (match) {
    return {
      stateName: match.groups.stateName.trim(),
      stateCode: match.groups.stateCode,
    };
  } else {
    return null;
  }
}

function extractBusinessName(inputString) {
  const match = inputString.match(BIZNAME_RGX);
  if (match) {
    return match[1].trim();
  } else {
    return null;
  }
}

function extractInvoiceNumber(line) {
  const match = line.match(INVOICE_NO_RGX);
  if (match && match[1]) {
    return match[1];
  } else {
    return null;
  }
}

function extractDate(line) {
  const match = line.match(DATE_RGX);
  if (match) {
    return match[0];
  } else {
    return null;
  }
}

function extractEmailId(inputString) {
  const match = inputString.match(EMAIL_RGX);
  if (match) {
    return match.groups.email;
  } else {
    return null;
  }
}

function extractDestination(line) {
  const match = line.match(DESTINATION_RGX);
  if (match && match[1]) {
    return match[1];
  } else {
    return null;
  }
}

const extractPartyDetails = text => {
    const data = {};

    const lines = text.split(/\n+/);

    let gstinIdx, bizNameIdx;

    lines.forEach((line, i) => {
        if(BIZNAME_RGX.test(line)) {
            data.businessName = extractBusinessName(line);
            bizNameIdx = i;
        } else if(GSTIN_RGX.test(line)) {
            data.gstin = line.match(GSTIN_RGX)[1];
            gstinIdx = i;
        } else if(STATE_RGX.test(line)) {
            data.state = extractStateNameAndCode(line);
        } else if(EMAIL_RGX.test(line)) {
            data.email = extractEmailId(line);
        }
    });

    if(gstinIdx) {
        data.address = lines.slice(bizNameIdx + 1, gstinIdx).join(/\n/);
    }

    return data;
};

function extractCGST(line) {
  const regex = CGST_RGX;
  const match = line.match(regex);
  if (match) {
    return parseFloat((match[1] || match[3]).replace(/,/g, ''));
  } else {
    return null;
  }
}

function extractSGST(line) {
  const regex = SGST_RGX;
  const match = line.match(regex);
  if (match) {
    return parseFloat((match[1] || match[3] || match[5]).replace(/,/g, ''));
  } else {
    return null;
  }
}

function extractIGST(line) {
  const regex = IGST_RGX;
  const match = line.match(regex);
  if (match) {
    return parseFloat((match[1] || match[3] || match[5]).replace(/,/g, ''));
  } else {
    return null;
  }
}

export const invoiceExtractor = async (req, res) => {
    try {
        if(!req.file) {
            return res.status(400).send({ status: 'failure', message: 'No file provided' });
        }

        if(req.file.mimetype !== 'application/pdf') {
            return res.status(400).send({ status: 'failure', message: 'Input file must be a PDF' });
        }

        const convert = fromBuffer(req.file.buffer, {
            width: 1275,
            height: 1650,
            format: 'png',
            quality: 100,
            density: 180
        });

        const { base64 } = await convert(1, true);

        const imageBuffer = base64ToBuffer(base64);

        const blocks = await Promise.all(SLICES.map(async ({ top, left, bottom, right }) => {
            const width = right - left;
            const height = bottom - top;

            const worker = await createWorker({
                cacheMethod: 'none',
                langPath,
            });
    
            await worker.loadLanguage('eng');
            await worker.initialize('eng');

            const buffer = await sharp(imageBuffer).extract({ top, left, width, height }).toBuffer();

            const { data: { text } } = await worker.recognize(buffer);

            await worker.terminate();

            return text;
        }));

        const data = {
            buyer: null,
            supplier: null,
            consignee: null,
            invoiceNo: null,
            date: null,
            destination: null,
            chargeableAmount: null,
            taxAmount: null,
            chargeableAmountInWords: null,
            taxAmountInWords: null,
        };

        const [supplierDetails, ...otherBlocks] = blocks.slice(0, 3);

        data.supplier = extractPartyDetails(supplierDetails);

        otherBlocks.forEach(text => {
            if(text.startsWith('Buyer')) {
                data.buyer = extractPartyDetails(text);
            } else if(text.startsWith('Consignee')) {
                data.consignee = extractPartyDetails(text);
            }
        });

        blocks.forEach(text => {
          if(INVOICE_NO_RGX.test(text)) {
            data.invoiceNo = extractInvoiceNumber(text);
          } else if(DATE_RGX.test(text)) {
            data.date = extractDate(text);
          } else if(DESTINATION_RGX.test(text)) {
            data.destination = extractDestination(text);
          }
        });

        const bottomBlock = blocks.pop().split(/\n+/);

        let totalAmountFound = false;

        bottomBlock.forEach(line => {
            if(AMOUNT_RGX.test(line)) {
                const amount = extractAmount(line);

                if(!totalAmountFound) {
                    totalAmountFound = true;
                    
                    data.chargeableAmount = convertAmountToNumber(amount);
                    data.chargeableAmountInWords = amount;
                } else {
                    data.taxAmount = convertAmountToNumber(amount);
                    data.taxAmountInWords = amount;
                }
            } else if(CGST_RGX.test(line)) {
                data.cgst = extractCGST(line);
            } else if(SGST_RGX.test(line)) {
                data.sgst = extractSGST(line);
            } else if(IGST_RGX.test(line)) {
                data.igst = extractIGST(line);
            }
        });

        return res.status(200).send({ status: 'success', data });
    } catch(e) {
        console.error(e);
        return res.status(500).send({ status: 'failure', message: 'Something went wrong.' });
    }
};
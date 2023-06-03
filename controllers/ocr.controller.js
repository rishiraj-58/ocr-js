import { createWorker } from 'tesseract.js';

import sharp from 'sharp';

import { fromBuffer } from 'pdf2pic';

import { join } from 'path';
import { cwd } from 'process';
import { readFileSync } from 'fs';

const langPath = join(cwd(), 'data');

const b64ToBuffer = b64 => Buffer.from(b64, 'base64');

const b64ToString = b64 => Buffer.from(b64, 'base64').toString('utf-8');

const loadModel = () => {
    const b64 = readFileSync(join(langPath, '/ocr-model.txt')).toString('utf8');
    const string = b64ToString(b64);
    const model = JSON.parse(string);

    return model;
};

const pageSlices = loadModel();

const sliceImage = async (image, top, left, right, bottom) => {
    const imageBuffer = await sharp(image).extract({
        top,
        left,
        width: right - left,
        height: bottom - top,
    }).toBuffer();

    return imageBuffer;
};

const flatterData = a => a.reduce((o, v) => Object.assign(o, v), {});

export const extractForm16 = async (req, res) => {
    try {
        const convertToImage = fromBuffer(req.file.buffer, {
            width: 892,
            format: 'png',
            height: 1263,
            quality: 100,
            density: 180,
        });

        let b64Strings = await convertToImage.bulk(-1, true);

        const images = await Promise.all(b64Strings.map(({ base64 }) => b64ToBuffer(base64)));

        b64Strings = null;
        
        const pageData = await Promise.all(images.map(async (image, i) => {
            const worker = await createWorker({
                logger: m => console.log(m),
                cacheMethod: 'none',
                langPath,
            });
    
            await worker.loadLanguage('eng');
            await worker.initialize('eng');

            const slices = pageSlices[i];

            if(!slices) {
                return;
            }

            const data = {};

            for(let i = 0; i < slices.length; i++) {
                const { top, left, right, bottom, label } = slices[i];

                const slicedImage = await sliceImage(image, top, left, right, bottom);

                const { data: { text } } = await worker.recognize(slicedImage);

                data[label] = text.trim();
            }

            await worker.terminate();

            return data;
        }));

        return res.status(200).send({
            data: flatterData(pageData)
        });
    } catch(e) {
        console.error(e);
        res.status(504).send({ message: 'something went wrong' });
    }
};
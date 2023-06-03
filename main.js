import express from 'express';
import bodyParser from 'body-parser';
import { upload } from './config/multer.js';
import { extractForm16 } from './controllers/ocr.controller.js';

import cors from 'cors';
import aadhaarExtractor from './controllers/aadhaar.controller.js';
// import extractPanInfo from './controllers/pan.controller.js';
import extractPanInfo from './controllers/panController.js';
import { invoiceExtractor } from './controllers/invoice-controller.js';

const port = 8080;

const app = express();

app.use(cors({ origin: '*' }));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.status(200).send({ message: 'up and running' });
});

app.post('/ocr', upload.single('file'), extractForm16);

app.post('/aadhaar', upload.single('file'), aadhaarExtractor);

app.post('/pan', upload.single('file'), extractPanInfo);

app.post('/invoice', upload.single('file'), invoiceExtractor);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
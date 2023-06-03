import { randomBytes } from "crypto";
import multer from "multer";

// Multer setup
const storage = multer.memoryStorage({ 
    fileFilter: function(req, file, callback) {
        if (file.mimetype !== 'application/pdf') {
          return callback(new Error('Only PDF files are allowed'));
        }
        
        callback(null, true);
    }    
});

export const upload = multer({ storage });
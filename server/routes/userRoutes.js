import { uploadImageController, getImagesController } from "../controller/userController.js";
import express from "express";
import multer from "multer";
import path from "path";

const router = express.Router();

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/Images');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Routes
router.post('/upload', upload.single('file'), uploadImageController);
router.get('/getImage', getImagesController);

export { router as UserRouter };

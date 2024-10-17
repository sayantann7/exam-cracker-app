import express from 'express';
import multer from 'multer';
import { uploadDocument, getDocuments } from '../controllers/uploadController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.post('/', protect, upload.single('file'), uploadDocument);
router.get('/', protect, getDocuments);

export default router;
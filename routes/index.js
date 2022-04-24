import express from 'express';

import { uploadResume, getResumeByName, getResumeById } from '../controllers/candidateResume.js';

const router = express.Router();

router.post('/upload', uploadResume)
router.get('/getById/:id', getResumeById);
router.get('/getByName/:candidateName', getResumeByName);

export default router;
import express from 'express';
import {
    createJob,
    getJobs,
    getJobById,
    updateJob,
    deleteJob
} from '../Controllers/JobController.js';


// CREATE job
router.post('/jobs', createJob);

// READ all jobs
router.get('/jobs', getJobs);

// READ single job by ID
router.get('/jobs/:id', getJobById);

// UPDATE job
router.put('/jobs/:id', updateJob);

// DELETE job
router.delete('/jobs/:id', deleteJob);

export default router;

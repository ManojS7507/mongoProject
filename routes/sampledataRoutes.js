import express from 'express'
const router = express.Router()

import {
    getSampleData,
    getSampleDataById,
    updateSampleData,
    deleteSampledata,
    createSampleData
} from '../controllers/sampledataController.js'

router.route('/').get(getSampleData).post(createSampleData)
router.route('/:id').get(getSampleDataById).put(updateSampleData).delete(deleteSampledata)

export default router
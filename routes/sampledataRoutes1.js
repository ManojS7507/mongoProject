import express from 'express'
const router = express.Router()

import {
    getSampleData1,
} from '../controllers/sampledataController1.js'

router.route('/').get(getSampleData1)
export default router
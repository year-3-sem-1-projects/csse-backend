import express from 'express'

import { addEmployee } from '../controllers/employee'

const router = express.Router()

router.use('/add', addEmployee)

export default router

import express from 'express'
import employeeRouter from './employee'
import purchaseOrderRouter from './purchaseOrder'
import siteRouter from './site'
import authRouter from './auth'

const router = express.Router()

router.use('/purchase-order', purchaseOrderRouter)
router.use('/site', siteRouter)
router.use('/employee', employeeRouter)
router.use('/auth', authRouter)

export default router

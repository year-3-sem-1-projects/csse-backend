import express from 'express'
import employeeRouter from './employee'
import purchaseOrderRouter from './purchaseOrder'
import siteRouter from './site'
import authRouter from './auth'
import deliveryRouter from './delivery'
import itemRouter from './item'

const router = express.Router()

router.use('/purchase-order', purchaseOrderRouter)
router.use('/delivery', deliveryRouter)
router.use('/site', siteRouter)
router.use('/employee', employeeRouter)
router.use('/auth', authRouter)
router.use('/item', itemRouter)

export default router

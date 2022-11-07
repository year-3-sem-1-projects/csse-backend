import express from 'express'
import userRouter from './user'
import purchaseOrderRouter from './purchaseOrder'
import siteRouter from './site'

const router = express.Router()

router.use('/users', userRouter)
router.use('/purchase-order', purchaseOrderRouter)
router.use('/site', siteRouter)

export default router

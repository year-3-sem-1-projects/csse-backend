import express from 'express'
import userRouter from './user'
import purchaseOrderRouter from './purchaseOrder'

const router = express.Router()

router.use('/users', userRouter)
router.use('/purchase-order', purchaseOrderRouter)

export default router

import { Router } from 'express'
import { addPurchaseOrder } from '../controllers/purchaseOrder'

const router = Router()

router.post('/add', addPurchaseOrder)

export default router

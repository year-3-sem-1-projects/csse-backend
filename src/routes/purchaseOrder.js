import { Router } from 'express'
import { addPurchaseOrder, getAllPurchaseOrders } from '../controllers/purchaseOrder'

const router = Router()

router.get('/', getAllPurchaseOrders)
router.post('/add', addPurchaseOrder)

export default router

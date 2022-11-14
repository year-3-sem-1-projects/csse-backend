import { Router } from 'express'
import {
  getAllPurchaseOrders,
  getPurchaseOrderById,
  addPurchaseOrder,
  updatePurchaseOrder,
  deletePurchaseOrder,
} from '../controllers/purchaseOrder'

const router = Router()

router.post('/add', addPurchaseOrder)
router.put('/update/:purchaseOrderId', updatePurchaseOrder)
router.delete('/delete/:purchaseOrderId', deletePurchaseOrder)
router.get('/', getAllPurchaseOrders)
router.get('/:id', getPurchaseOrderById)

export default router


import { Router } from 'express'
import {
  addDelivery,
  updateDelivery,
  deleteDelivery,
  getAllDeliveries,
  getDeliveryById,
  getDeliveryByPurchseOrder,
} from '../controllers/delivery'

const router = Router()

router.post('/add', addDelivery)
router.put('/update/:deliveryId', updateDelivery)
router.delete('/delete/:deliveryId', deleteDelivery)
router.get('/get', getAllDeliveries)
router.get('/get/:deliveryId', getDeliveryById)
router.get('/get-by-order/:purchaseOrderId', getDeliveryByPurchseOrder)

export default router

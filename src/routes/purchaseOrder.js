import { Router } from 'express'
import { addPurchaseOrder } from '../controllers/purchaseOrder'

const router = Router()

router.post('add/:sitemanagerId', addPurchaseOrder)

export default router

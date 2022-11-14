import { Router } from 'express'

const router = Router()

router.get('/', getAllDeliveries)
router.post('/add', addDelivery)

export default router
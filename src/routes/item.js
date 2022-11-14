import { Router } from 'express'
import {
  getAllItems,
  getAllItemsBySupplierId,
  addItemBySupplierId,
  updateItem,
  deleteItem,
} from '../controllers/item'

const router = Router()

router.post('/add', addItemBySupplierId)
router.put('/update', updateItem)
router.delete('/delete/:itemId', deleteItem)
router.get('/get', getAllItems)
router.get('/get-by-supplier/:supplier_id', getAllItemsBySupplierId)

export default router
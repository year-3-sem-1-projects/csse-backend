import { Router } from 'express'
import {
  getAllItems,
  getAllItemsBySupplierId,
  addItemBySupplierId,
  updateItem,
  deleteItem,
} from '../controllers/item'

const router = Router()

router.get('/', getAllItems)
router.get('/:supplier_id', getAllItemsBySupplierId)
router.post('/add', addItemBySupplierId)
router.put('/update', updateItem)
router.delete('/delete/:item_id', deleteItem)

export default router
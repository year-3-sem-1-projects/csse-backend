import { Router } from express
import {getAllSuppliersByCompany, getSupplierById, createSupplier, updateSupplier, deleteSupplier} from '../controllers/supplier.js'

const router = Router()

router.get('/:company_id', getAllSuppliersByCompany)
router.get('/:supplier_id', getSupplierById)
import Company from '../models/company'
import Supplier from '../models/supplier'

export const getAllSuppliersByCompanyRepository = async (company_id) => {
  try {
    const { suppliers } = await Company.find({ company_id }).populate('suppliers')s
    return suppliers
  } catch (error) {
    console.error(error.code, error.message)
  }
}

export const getSupplierByIdRepository = async (supplier_id) => {
  try {
    const supplier = await Supplier.findOne({ supplier_id })
    return supplier
  } catch (error) {
    console.error(error.code, error.message)
  }
}
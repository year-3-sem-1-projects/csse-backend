import {
  getAllSuppliersByCompanyRepository,
  getSupplierByIdRepository,
} from '../repository/supplier.js'

export const getAllSuppliersByCompanyService = async (company_id) => {
  try {
    return await getAllSuppliersByCompanyRepository(company_id)
  } catch (error) {
    console.error(error.code, error.message)
  }
}

export const getSupplierByIdService = async (supplier_id) => {
  try {
    return await getSupplierByIdRepository(supplier_id)
  } catch (error) {
    console.error(error.code, error.message)
  }
}

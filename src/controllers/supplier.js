import asyncHandler from '../middleware/asyncHandler'
import { makeResponse } from '../utils/response'
import { getAllSuppliersByCompanyService, getSupplierByIdService } from '../services/supplier'

export const getAllSuppliersByCompany = asyncHandler(async (req, res, next) => {
  const { company_id } = req.params
  const response = await getAllSuppliersByCompanyService(company_id)
  if (!response) return makeResponse({ res, status: 500, message: 'Suppliers Retrieval Failed' })
  if (response.status) return makeResponse({ res, ...response })
  return makeResponse({ res, message: 'Suppliers Retrieval Successful.' })
})

export const getSupplierById = asyncHandler(async (req, res, next) => {
  const { supplier_id } = req.params
  const response = await getSupplierByIdService(supplier_id)
  if (!response) return makeResponse({ res, status: 500, message: 'Supplier Retrieval Failed' })
  if (response.status) return makeResponse({ res, ...response })
  return makeResponse({ res, message: 'Supplier Retrieval Successful.' })
})

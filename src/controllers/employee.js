import asyncHandler from '../middleware/asyncHandler'
import { makeResponse } from '../utils/response'
import { addEmployeeService } from '../services/purchaseOrder'

export const addEmployee = asyncHandler(async (req, res, next) => {
  const { employee } = req.body
  const response = await addEmployeeService(employee)
  if (!response) return makeResponse({ res, status: 500, message: 'Employee Creation failed' })
  if (response.status) return makeResponse({ res, ...response })
  return makeResponse({ res, message: 'Employee Creation Successful.' })
})

import asyncHandler from '../middleware/asyncHandler'
import { makeResponse } from '../utils/response'
import { addPurchaseOrderService, getAllPurchaseOrdersService } from '../services/purchaseOrder'

export const addPurchaseOrder = asyncHandler(async (req, res, next) => {
  const response = await addPurchaseOrderService(req.body)
  if (!response)
    return makeResponse({ res, status: 500, message: 'Purchase Order Creation failed' })
  if (response.status) return makeResponse({ res, ...response })
  return makeResponse({ res, message: 'Purchase Order Creation Successful.' })
})

export const getAllPurchaseOrders = asyncHandler(async (req, res, next) => {
  const response = await getAllPurchaseOrdersService()
  if (!response)
    return makeResponse({ res, status: 500, message: 'Purchase Order Retrieval failed' })
  if (response.status) return makeResponse({ res, ...response })
  return makeResponse({ res, data: response, message: 'Purchase Order Retrieval Successful.' })
})

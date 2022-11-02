import asyncHandler from '../middleware/asyncHandler'
import { makeResponse } from '../utils/response'
import { addPurchaseOrderService } from '../services/purchaseOrder'

export const addPurchaseOrder = asyncHandler(async (req, res, next) => {
  const { purchaseOrder } = req.body
  const response = await addPurchaseOrderService(purchaseOrder)
  if (!response)
    return makeResponse({ res, status: 500, message: 'Purchase Order Creation failed' })
  if (response.status) return makeResponse({ res, ...response })
  return makeResponse({ res, data: response, message: 'Purchase Order Creation Successful.' })
})

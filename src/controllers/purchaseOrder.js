import asyncHandler from '../middleware/asyncHandler'
import { makeResponse } from '../utils/response'
import { addPurchaseOrderService } from '../services/purchaseOrder'

export const addPurchaseOrder = asyncHandler(async (req, res, next) => {
  const { purchase_order } = req.body
  const response = await addPurchaseOrderService(purchase_order)
  if (!response)
    return makeResponse({ res, status: 500, message: 'Purchase Order Creation failed' })
  if (response.status) return makeResponse({ res, ...response })
  return makeResponse({ res, message: 'Purchase Order Creation Successful.' })
})

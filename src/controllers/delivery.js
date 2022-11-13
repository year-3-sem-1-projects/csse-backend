import asyncHandler from '../middleware/asyncHandler'
import { makeResponse } from '../utils/response'
import { addDeliveryService, getAllDeliveriesService } from '../services/delivery'

export const addDelivery = asyncHandler(async (req, res, next) => {
  const response = await addDeliveryService(req.body)
  if (!response) return makeResponse({ res, status: 500, message: 'Delivery Creation failed' })
  if (response.status) return makeResponse({ res, ...response })
  return makeResponse({ res, message: 'Delivery Creation Successful.' })
})

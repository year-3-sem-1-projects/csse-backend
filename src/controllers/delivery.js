import asyncHandler from '../middleware/asyncHandler'
import { makeResponse } from '../utils/response'
import {
  addDeliveryService,
  updateDeliveryService,
  deleteDeliveryService,
  getAllDeliveriesService,
  getDeliveryByIdService,
  getDeliveryByPurchseOrderService,
} from '../services/delivery'

export const addDelivery = asyncHandler(async (req, res, next) => {
  const response = await addDeliveryService(req.body)
  if (!response) return makeResponse({ res, status: 500, message: 'Delivery Creation failed' })
  if (response.status) return makeResponse({ res, ...response })
  return makeResponse({ res, message: 'Delivery Creation Successful.' })
})

export const updateDelivery = asyncHandler(async (req, res, next) => {
  const response = await updateDeliveryService(req.params.deliveryId, req.body)
  if (!response) return makeResponse({ res, status: 500, message: 'Delivery Update failed' })
  if (response.status) return makeResponse({ res, ...response })
  return makeResponse({ res, message: 'Delivery Update Successful.' })
})

export const deleteDelivery = asyncHandler(async (req, res, next) => {
  const response = await deleteDeliveryService(req.params.deliveryId)
  if (!response) return makeResponse({ res, status: 500, message: 'Delivery Deletion failed' })
  if (response.status) return makeResponse({ res, ...response })
  return makeResponse({ res, message: 'Delivery Deletion Successful.' })
})

export const getAllDeliveries = asyncHandler(async (req, res, next) => {
  const response = await getAllDeliveriesService()
  if (!response) return makeResponse({ res, status: 500, message: 'Delivery Retrieval failed' })
  if (response.status) return makeResponse({ res, ...response })
  return makeResponse({ res, data: response, message: 'Delivery Retrieval Successful.' })
})

export const getDeliveryById = asyncHandler(async (req, res, next) => {
  const response = await getDeliveryByIdService(req.params.deliveryId)
  if (!response) return makeResponse({ res, status: 500, message: 'Delivery Retrieval failed' })
  if (response.status) return makeResponse({ res, ...response })
  return makeResponse({ res, data: response, message: 'Delivery Retrieval Successful.' })
})

export const getDeliveryByPurchseOrder = asyncHandler(async (req, res, next) => {
  const response = await getDeliveryByPurchseOrderService(req.params.purchaseOrderId)
  if (!response) return makeResponse({ res, status: 500, message: 'Delivery Retrieval failed' })
  if (response.status) return makeResponse({ res, ...response })
  return makeResponse({ res, data: response, message: 'Delivery Retrieval Successful.' })
})

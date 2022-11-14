import asyncHandler from '../middleware/asyncHandler'
import { makeResponse } from '../utils/response'
import {
  addPurchaseOrderService,
  updatePurchaseOrderService,
  deletePurchaseOrderService,
  getAllPurchaseOrdersService,
  getPurchaseOrderByIdService,
} from '../services/purchaseOrder'

export const addPurchaseOrder = asyncHandler(async (req, res, next) => {
  const response = await addPurchaseOrderService(req.body)
  if (!response)
    return makeResponse({ res, status: 500, message: 'Purchase Order Creation failed' })
  if (response.status) return makeResponse({ res, ...response })
  return makeResponse({ res, message: 'Purchase Order Creation Successful.' })
})

export const updatePurchaseOrder = asyncHandler(async (req, res, next) => {
  const response = await updatePurchaseOrderService(req.params.purchaseOrderId, req.body)
  if (!response) return makeResponse({ res, status: 500, message: 'Purchase Order Update failed' })
  if (response.status) return makeResponse({ res, ...response })
  return makeResponse({ res, message: 'Purchase Order Update Successful.' })
})

export const deletePurchaseOrder = asyncHandler(async (req, res, next) => {
  const response = await deletePurchaseOrderService(req.params.purchaseOrderId)
  if (!response)
    return makeResponse({ res, status: 500, message: 'Purchase Order Deletion failed' })
  if (response.status) return makeResponse({ res, ...response })
  return makeResponse({ res, message: 'Purchase Order Deletion Successful.' })
})

export const getAllPurchaseOrders = asyncHandler(async (req, res, next) => {
  const response = await getAllPurchaseOrdersService()
  if (!response)
    return makeResponse({ res, status: 500, message: 'Purchase Order Retrieval failed' })
  if (response.status) return makeResponse({ res, ...response })
  return makeResponse({ res, data: response, message: 'Purchase Order Retrieval Successful.' })
})

export const getPurchaseOrderById = asyncHandler(async (req, res, next) => {
  const response = await getPurchaseOrderByIdService(req.params.id)
  if (!response)
    return makeResponse({ res, status: 500, message: 'Purchase Order Retrieval failed' })
  if (response.status) return makeResponse({ res, ...response })
  return makeResponse({ res, data: response, message: 'Purchase Order Retrieval Successful.' })
})

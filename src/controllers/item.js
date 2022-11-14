import asyncHandler from '../middleware/asyncHandler'
import { makeResponse } from '../utils/response'
import {
  addItemBySupplierIdService,
  updateItemService,
  deleteItemService,
  getAllItemsService,
  getAllItemsBySupplierIdService,
} from '../services/item'


export const addItemBySupplierId = asyncHandler(async (req, res, next) => {
  const response = await addItemBySupplierIdService(req.body)
  if (!response) return makeResponse({ res, status: 500, message: 'Item addition failed' })
  if (response.status) return makeResponse({ res, ...response })
  return makeResponse({ res, message: 'Item addition Successful.' })
})

export const updateItem = asyncHandler(async (req, res, next) => {
  const response = await updateItemService(req.body)
  if (!response) return makeResponse({ res, status: 500, message: 'Item update failed' })
  if (response.status) return makeResponse({ res, ...response })
  return makeResponse({ res, message: 'Item update Successful.' })
})

export const deleteItem = asyncHandler(async (req, res, next) => {
  const response = await deleteItemService(req.params)
  if (!response) return makeResponse({ res, status: 500, message: 'Item deletion failed' })
  if (response.status) return makeResponse({ res, ...response })
  return makeResponse({ res, data: response, message: 'Item deletion Successful.' })
})

export const getAllItems = asyncHandler(async (req, res, next) => {
  const response = await getAllItemsService()
  if (!response) return makeResponse({ res, status: 500, message: 'Items retrieval failed' })
  if (response.status) return makeResponse({ res, ...response })
  return makeResponse({ res, data: response, message: 'Items retrieval Successful.' })
})

export const getAllItemsBySupplierId = asyncHandler(async (req, res, next) => {
  const response = await getAllItemsBySupplierIdService(req.params)
  if (!response) return makeResponse({ res, status: 500, message: 'Items retrieval failed' })
  if (response.status) return makeResponse({ res, ...response })
  return makeResponse({ res, data: response, message: 'Items retrieval Successful.' })
})
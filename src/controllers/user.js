import asyncHandler from '../middleware/asyncHandler'
import { makeResponse } from '../utils/response'
import { getUsersService } from '../services/user'

export const getUsers = asyncHandler(async (req, res) => {
  const result = await getUsersService()
  if (!result) return makeResponse({ res, status: 500, message: 'User Retrieval failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, data: result, message: 'User Retrieval Successful.' })
})

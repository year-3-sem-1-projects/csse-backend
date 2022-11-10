import asyncHandler from '../middleware/asyncHandler'
import { makeResponse } from '../utils/response'
import { addSite, deleteSite, updateSiteService, getAllSitesService } from '../services/site'

export const postSite = asyncHandler(async (req, res) => {
  const result = await addSite(req.body)
  if (!result)
    return makeResponse({
      res,
      status: 400,
      message: 'Cannot add your site, please try again.',
    })
  if (result.status) return makeResponse({ res, ...result })
  console.log('controller', result)
  return makeResponse({ res, message: 'Site Added Successfully!' })
})

export const removeSite = asyncHandler(async (req, res) => {
  const result = await deleteSite(req.params)
  if (!result)
    return makeResponse({
      res,
      status: 400,
      message: 'Cannot delete your site, please try again.',
    })
  if (result.status) return makeResponse({ res, ...result })
  console.log('controller', result)
  return makeResponse({ res, message: 'Site Deleted Successfully!' })
})

export const updateSite = asyncHandler(async (req, res) => {
  const result = await updateSiteService(req.body)
  if (!result)
    return makeResponse({
      res,
      status: 400,
      message: 'Cannot edit your site, please try again.',
    })
  if (result.status) return makeResponse({ res, ...result })
  console.log('controller', result)
  return makeResponse({ res, message: 'Site Edited Successfully!' })
})

export const getAllSites = asyncHandler(async (req, res) => {
  const result = await getAllSitesService()
  if (!result)
    return makeResponse({
      res,
      status: 400,
      message: 'Cannot get your sites, please try again.',
    })
  if (result.status) return makeResponse({ res, ...result })
  console.log('controller', result)
  return makeResponse({ res, data: result, message: 'Sites Retrieved Successfully!' })
})

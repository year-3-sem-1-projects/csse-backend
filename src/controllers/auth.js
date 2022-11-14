import asyncHandler from '../middleware/asyncHandler'
import { makeResponse } from '../utils/response'
import { createUser, signOutUser, signIn } from '../database/firebase'
import {
  signUpCompanyService,
  signUpEmployeeService,
  loginService,
  siteManagerLoginService,
} from '../services/auth'

export const signUpCompany = asyncHandler(async (req, res, next) => {
  const { company_email, password } = req.body
  delete req.body.password
  const { uid } = await createUser(company_email, password)
  const response = await signUpCompanyService({ ...req.body, company_id: uid })
  if (!response) return makeResponse({ res, status: 500, message: 'Sign Up failed' })
  if (response.status) return makeResponse({ res, ...response })
  return makeResponse({ res, message: 'Sign Up Successful.' })
})
export const signUpEmployee = asyncHandler(async (req, res, next) => {
  const { email, password, site } = req.body
  const user = req.body
  delete user.site
  delete user.password
  try {
    const { uid } = await createUser(email, password)
    const response = await signUpEmployeeService(user, site, uid)
    if (!response) return makeResponse({ res, status: 500, message: 'Sign Up failed' })
    if (response.status) return makeResponse({ res, ...response })
    return makeResponse({ res, message: 'Sign Up Successful.' })
  } catch (error) {
    console.error(error.code, error.message)
  }
})

export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body
  const { uid } = await signIn(email, password)
  const response = await loginService(uid)
  if (!response) return makeResponse({ res, status: 500, message: 'Sign In failed' })
  if (response.status) return makeResponse({ res, ...response })
  return makeResponse({ res, message: 'Sign In Successful.', data: response })
})

export const siteManagerLogin = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body
  const { uid } = await signIn(email, password)
  const response = await siteManagerLoginService(uid)
  if (!response) return makeResponse({ res, status: 500, message: 'Sign In failed' })
  if (response.status) return makeResponse({ res, ...response })
  return makeResponse({ res, message: 'Sign In Successful.', data: response })
})

export const signOut = asyncHandler(async (req, res, next) => {
  await signOutUser()
  return makeResponse({ res, message: 'Sign Out Successful.' })
})

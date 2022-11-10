import asyncHandler from '../middleware/asyncHandler'
import { makeResponse } from '../utils/response'
import { createUser, signOutUser, signIn } from '../database/firebase'
import { signUpCompanyService, signUpEmployeeService } from '../services/auth'

export const signUpCompany = asyncHandler(async (req, res, next) => {
  const { company_email, password, company_name } = req.body
  const { uid } = await createUser(company_email, password)
  const response = await signUpCompanyService({ company_name, company_email, company_id: uid })
  if (!response) return makeResponse({ res, status: 500, message: 'Sign Up failed' })
  if (response.status) return makeResponse({ res, ...response })
  return makeResponse({ res, message: 'Sign Up Successful.' })
})
export const signUpEmployee = asyncHandler(async (req, res, next) => {
  const { user } = req.body
  const { email, password } = user
  delete user.password
  try {
    const { uid } = await createUser(email, password)
    const response = await signUpEmployeeService(user, siteId, uid)
    if (!response) return makeResponse({ res, status: 500, message: 'Sign Up failed' })
    if (response.status) return makeResponse({ res, ...response })
    return makeResponse({ res, message: 'Sign Up Successful.' })
  } catch (error) {
    console.error(error.code, error.message)
  }
})

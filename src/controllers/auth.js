import asyncHandler from '../middleware/asyncHandler'
import { makeResponse } from '../utils/response'
import { createUser, signOutUser, signIn } from '../database/firebase'
import { signUpUserService } from '../services/employee'

export const signUpCompany = asyncHandler(async (req, res, next) => {
  const { email, password, name } = req.body
  const { uid } = await createUser(email, password)
  const company = await signUpUserService({ name, uid })
})
export const signUpEmployee = asyncHandler(async (req, res, next) => {
  const { user, siteId } = req.body
  const { email, password } = user
  delete user.password
  try {
    const { uid } = await createUser(email, password)
    const response = await signUpUserService(user, siteId, uid)
    if (!response) return makeResponse({ res, status: 500, message: 'Sign Up failed' })
    if (response.status) return makeResponse({ res, ...response })
    return makeResponse({ res, message: 'Sign Up Successful.' })
  } catch (error) {
    console.error(error.code, error.message)
  }
})

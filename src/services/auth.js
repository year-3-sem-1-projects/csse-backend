import { signUpUserRepository } from '../repository/auth.js'

export const signUpUserService = async (user, type, siteId, uid) => {
  return await signUpUserRepository(user, type, siteId, uid)
}

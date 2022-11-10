import { signUpCompanyRepository } from '../repository/auth.js'

export const signUpCompanyService = async (company) => {
  return await signUpCompanyRepository(company)
}
export const signUpUserService = async (user, type, siteId, uid) => {
  return await signUpUserRepository(user, type, siteId, uid)
}

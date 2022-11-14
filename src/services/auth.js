import {
  signUpCompanyRepository,
  signUpEmployeeRepository,
  loginRepository,
  siteManagerLoginRepository,
} from '../repository/auth'

export const signUpCompanyService = async (company) => {
  return await signUpCompanyRepository(company)
}

export const signUpEmployeeService = async (user, site, uid) => {
  return await signUpEmployeeRepository(user, site, uid)
}

export const loginService = async (uid) => {
  return await loginRepository(uid)
}

export const siteManagerLoginService = async (uid) => {
  return await siteManagerLoginRepository(uid)
}

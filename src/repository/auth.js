import SiteManager from '../models/siteManager'
import Manager from '../models/manager'
import Employee from '../models/employee'
import Company from '../models/company'

export const signUpUserRepository = async (user, type, siteId, uid) => {
  if (type === 'company') {
    return await new Company(user).save()
  } else if (type === 'employee') {
    try {
      const { _id } = await new Employee(user).save()
      switch (user.role) { 
        case 'site-manager':
          
          const siteManager = await SiteManager().save()
          break
        case 'manager':
          const manager = await Manager().save()

      }
      const
      const { role } = user
      switch (role) {
        case 'site_manager': {
          const { _id } = await Employee({ ...employee, site_manager: _id }).save()
        }
      }
      return employee
    } catch (error) {
      return { status: error.code, message: error.message }
    }
  }
}

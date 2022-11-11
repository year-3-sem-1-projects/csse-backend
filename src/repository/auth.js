import SiteManager from '../models/siteManager'
import Manager from '../models/manager'
import AccountingStaff from '../models/accounting_staff'
import ProcurementStaff from '../models/procurement_staff'
import Employee from '../models/employee'
import Company from '../models/company'
import { signOutUser } from '../database/firebase'

export const signUpCompanyRepository = async (company) => {
  try {
    return await new Company(company).save()
  } catch (error) {
    return { status: error.code, message: error.message }
  }
}

export const signUpEmployeeRepository = async (user, site, uid) => {
  console.log(user, site, uid)
  const employee = { ...user, employee_id: uid }
  try {
    const { _id } = await new Employee(employee).save()
    switch (user.role) {
      case 'site-manager':
        await Company.findOneAndUpdate(
          { company_id: user.company_id },
          { $push: { site_managers: _id } },
        )
        return await SiteManager({ site_manager_id: uid, site: site }).save()
      case 'manager':
        await Company.findOneAndUpdate(
          { company_id: user.company_id },
          { $push: { managers: _id } },
        )
        return await Manager({ manager_id: uid }).save()
      case 'accounting-staff':
        await Company.findOneAndUpdate(
          { company_id: user.company_id },
          { $push: { accounting_staffs: _id } },
        )
        return await AccountingStaff({ accounting_staff_id: uid }).save()
      case 'procurement-staff':
        await Company.findOneAndUpdate(
          { company_id: user.company_id },
          { $push: { procurement_staffs: _id } },
        )
        return await ProcurementStaff({ procurement_staff_id: uid }).save()
      default:
        return { status: 500, message: 'Invalid role' }
    }
  } catch (error) {
    return { status: error.code, message: error.message }
  }
}

export const loginRepository = async (uid) => {
  try {
    await Employee.findOne({ employee_id: uid })
  } catch (error) {
    return { status: error.code, message: error.message }
  }
}

export const siteManagerLoginRepository = async (uid) => {
  try {
    const siteManager = await SiteManager.findOne({ site_manager_id: uid })
    if (siteManager) {
      return siteManager
    } else {
      signOutUser()
      return { status: 401, message: 'Unauthorized' }
    }
  } catch (error) {
    return { status: error.code, message: error.message }
  }
}

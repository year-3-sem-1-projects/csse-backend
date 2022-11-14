import { Router } from 'express'
import {
  signUpCompany,
  signUpEmployee,
  login,
  siteManagerLogin,
  signOut,
} from '../controllers/auth'

const router = Router()

router.post('/sign-up/company', signUpCompany)
router.post('/sign-up/employee', signUpEmployee)
router.post('/sign-in', login)
router.post('/sign-in/site-manager', siteManagerLogin)
router.post('/sign-out', signOut)

export default router

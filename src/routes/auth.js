import { Router } from 'express'
import { signUpCompany, signUpEmployee } from '../controllers/auth'

const router = Router()

router.post('/sign-up/company', signUpCompany)
router.post('/sign-up/employee', signUpEmployee)

export default router

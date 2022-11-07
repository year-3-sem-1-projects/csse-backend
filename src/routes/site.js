import { Router } from 'express'

import { postSite, removeSite, updateSite, getAllSites } from '../controllers/site'

const router = Router()

router.post('/add', postSite)
router.delete('/delete/:siteId', removeSite)
router.put('/edit', updateSite)
router.get('/get/all-sites', getAllSites)

export default router

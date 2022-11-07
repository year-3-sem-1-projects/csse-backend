import {
  addOneSite,
  deleteOneSite,
  updateSiteRepository,
  getAllSitesRepository,
} from '../repository/site'

export const addSite = async (siteContent) => {
  const site = await addOneSite(siteContent)
  if (!site) return false
  console.log('service', site)
  return site
}

export const deleteSite = async (siteId) => {
  const site = await deleteOneSite(siteId)
  if (!site) return false
  console.log('service', site)
  return site
}

export const updateSiteService = async (siteContent) => {
  const site = await updateSiteRepository({ _id: siteContent._id }, siteContent)
  if (!site) return false
  console.log('service', site)
  return site
}

export const getAllSitesService = async () => {
  const sites = await getAllSitesRepository()
  if (!sites) return false
  console.log('service', sites)
  return sites
}

import Site from '../models/site'

export const addOneSite = async (siteContent) => {
  const site = await new Site(siteContent).save()
  if (!site) return null
  console.log('repository', site)
  return site
}

export const deleteOneSite = async (siteId) => {
  console.log('repository', siteId.siteId)
  const site = await Site.deleteOne({ _id: siteId.siteId })
  if (!site) return null
  console.log('repository', site)
  return site
}

export const updateSiteRepository = async (filters, data) => {
  const site = await Site.updateOne(filters, data)
  if (!site) return null
  console.log('repository', site)
  return site
}

export const getAllSitesRepository = async () => {
  const sites = await Site.find().sort({ created_at: -1 })
  if (!sites) return null
  console.log('repository', sites)
  return sites
}

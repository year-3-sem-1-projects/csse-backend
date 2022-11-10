import PurchaseOrder from '../models/purchaseOrder'
import SiteManager from '../models/siteManager'

export const addPurchaseOrderRepository = async (purchaseOrder) => {
  try {
    const { site_manager_id } = purchaseOrder
    const { _id } = await new PurchaseOrder(purchaseOrder).save()
    await SiteManager.findOneAndUpdate(
      { site_manager_id },
      {
        $push: { purchase_order: _id },
      },
    )
    return purchaseOrder
  } catch (error) {
    return { status: 400, message: error.message }
  }
}

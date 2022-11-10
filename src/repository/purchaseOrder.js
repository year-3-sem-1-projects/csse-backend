import PurchaseOrder from '../models/purchaseOrder'
import SiteManager from '../models/siteManager'

export const addPurchaseOrderRepository = async (purchaseOrder) => {
  try {
    // const { site_manager_id } = purchaseOrder
    const newPurchaseOrder = await new PurchaseOrder(purchaseOrder).save()
    return newPurchaseOrder
  } catch (error) {
    return { status: 400, message: error.message }
  }
}

export const getAllPurchaseOrdersRepository = async () => {
  try {
    const purchaseOrders = await PurchaseOrder.find()
    return purchaseOrders
  } catch (error) {
    return { status: 400, message: error.message }
  }
}

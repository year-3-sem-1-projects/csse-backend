import PurchaseOrder from '../models/purchaseOrder'

export const addPurchaseOrderRepository = async (purchaseOrder) => {
  try {
    return await new PurchaseOrder(purchaseOrder).save()
  } catch (error) {
    return { status: 400, message: error.message }
  }
}

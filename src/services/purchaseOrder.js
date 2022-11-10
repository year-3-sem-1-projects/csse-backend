import { addPurchaseOrderRepository } from '../repository/purchaseOrder.js'

export const addPurchaseOrderService = async (purchase_order) => {
  return await addPurchaseOrderRepository(purchaseOrder)
}

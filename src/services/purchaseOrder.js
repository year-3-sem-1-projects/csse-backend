import { addPurchaseOrderRepository } from '../repository/purchaseOrder.js'

export const addPurchaseOrderService = async (purchaseOrder) => {
  return await addPurchaseOrderRepository(purchaseOrder)
}

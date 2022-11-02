import { addPurchaseOrderRepository } from '../repositories/purchaseOrder.js'

export const addPurchaseOrderService = async (purchaseOrder) => {
  return await addPurchaseOrderRepository(purchaseOrder)
}

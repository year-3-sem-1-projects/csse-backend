import {
  addPurchaseOrderRepository,
  getAllPurchaseOrdersRepository,
} from '../repository/purchaseOrder.js'

export const addPurchaseOrderService = async (purchase_order) => {
  return await addPurchaseOrderRepository(purchase_order)
}

export const getAllPurchaseOrdersService = async () => {
  return await getAllPurchaseOrdersRepository()
}

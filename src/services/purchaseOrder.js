import {
  addPurchaseOrderRepository,
  updatePurchaseOrderRepository,
  deletePurchaseOrderRepository,
  getAllPurchaseOrdersRepository,
  getPurchaseOrderByIdRepository,
} from '../repository/purchaseOrder'

export const addPurchaseOrderService = async (purchaseOrder) => {
  return await addPurchaseOrderRepository(purchaseOrder)
}

export const updatePurchaseOrderService = async (purchaseOrderId, purchaseOrder) => {
  return await updatePurchaseOrderRepository(purchaseOrderId, purchaseOrder)
}

export const deletePurchaseOrderService = async (purchaseOrderId) => {
  return await deletePurchaseOrderRepository(purchaseOrderId)
}

export const getAllPurchaseOrdersService = async () => {
  return await getAllPurchaseOrdersRepository()
}

export const getPurchaseOrderByIdService = async (purchaseOrderId) => {
  return await getPurchaseOrderByIdRepository(purchaseOrderId)
}


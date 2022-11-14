import PurchaseOrder from '../models/purchaseOrder'

export const addPurchaseOrderRepository = async (purchaseOrder) => {
  try {
    const newPurchaseOrder = await new PurchaseOrder(purchaseOrder).save()
    return newPurchaseOrder
  } catch (error) {
    return { status: 400, message: error.message }
  }
}

export const updatePurchaseOrderRepository = async (purchaseOrderId, purchaseOrder) => {
  try {
    const updatedPurchaseOrder = await PurchaseOrder.findByIdAndUpdate(
      purchaseOrderId,
      purchaseOrder,
      { new: true }
    )
    return updatedPurchaseOrder
  } catch (error) {
    return { status: 400, message: error.message }
  }
}

export const deletePurchaseOrderRepository = async (purchaseOrderId) => {
  try {
    const deletedPurchaseOrder = await PurchaseOrder.findByIdAndDelete(purchaseOrderId)
    return deletedPurchaseOrder
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

export const getPurchaseOrderByIdRepository = async (purchaseOrderId) => {
  try {
    const purchaseOrder = await PurchaseOrder.findById(purchaseOrderId)
    return purchaseOrder
  } catch (error) {
    return { status: 400, message: error.message }
  }
}

import {
    addDeliveryRepository,
    updateDeliveryRepository,
    deleteDeliveryRepository,
    getAllDeliveriesRepository,
    getDeliveryByIdRepository,
    getDeliveryByPurchseOrderRepository,
} from '../repository/delivery.js';

export const addDeliveryService = async (delivery) => {
  return await addDeliveryRepository(delivery)
}

export const updateDeliveryService = async (deliveryId, delivery) => {
  return await updateDeliveryRepository(deliveryId, delivery)
}

export const deleteDeliveryService = async (deliveryId) => {
  return await deleteDeliveryRepository(deliveryId)
}

export const getAllDeliveriesService = async () => {
  return await getAllDeliveriesRepository()
}

export const getDeliveryByIdService = async (deliveryId) => {
  return await getDeliveryByIdRepository(deliveryId)
}

export const getDeliveryByPurchseOrderService = async (purchaseOrderId) => {
  return await getDeliveryByPurchseOrderRepository(purchaseOrderId)
}

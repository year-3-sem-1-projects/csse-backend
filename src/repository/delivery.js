import Delivery from '../models/delivery'

export const addDeliveryRepository = async (delivery) => {
  try {
    const newDelivery = await new Delivery(delivery).save()
    return newDelivery
  } catch (error) {
    return { status: 400, message: error.message }
  }
}

export const updateDeliveryRepository = async (deliveryId, delivery) => {
  try {
    const updatedDelivery = await Delivery.findByIdAndUpdate
      (deliveryId, delivery, { new: true })
    return updatedDelivery
  } catch (error) {
    return { status: 400, message: error.message }
  }
}

export const deleteDeliveryRepository = async (deliveryId) => {
  try {
    const deletedDelivery = await Delivery.findByIdAndDelete(deliveryId)
    return deletedDelivery
  } catch (error) {
    return { status: 400, message: error.message }
  }
}

export const getAllDeliveriesRepository = async () => {
  try {
    const deliveries = await Delivery.find()
    return deliveries
  } catch (error) {
    return { status: 400, message: error.message }
  }
}

export const getDeliveryByIdRepository = async (deliveryId) => {
  try {
    const delivery = await Delivery.findById(deliveryId)
    return delivery
  } catch (error) {
    return { status: 400, message: error.message }
  }
}

export const getDeliveryByPurchseOrderRepository = async (purchaseOrderId) => {
  try {
    const delivery = await Delivery.find({ purchase_order_id: purchaseOrderId })
    return delivery
  } catch (error) {
    return { status: 400, message: error.message }
  }
}

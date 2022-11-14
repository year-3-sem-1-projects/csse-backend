import Delivery from '../models/delivery'

export const addDeliveryRepository = async (delivery) => {
  try {
    const newDelivery = await new Delivery(delivery).save()
    return newDelivery
  } catch (error) {
    return { status: 400, message: error.message }
  }
}

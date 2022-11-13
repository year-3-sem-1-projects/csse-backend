import { addDeliveryRepository } from '../repositories/delivery.js'

export const addDeliveryService = async (delivery) => {
    return await addDeliveryRepository(delivery)
    }

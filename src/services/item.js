import {
  getAllItemsRepository,
  getAllItemsBySupplierIdRepository,
  addItemBySupplierIdRepository,
  updateItemRepository,
  deleteItemRepository,
} from '../repository/item'

export const getAllItemsService = async () => {
  return await getAllItemsRepository()
}

export const getAllItemsBySupplierIdService = async (supplier) => {
  return await getAllItemsBySupplierIdRepository(supplier)
}

export const addItemBySupplierIdService = async (item) => {
  return await addItemBySupplierIdRepository(item)
}

export const updateItemService = async (data) => {
  const { _id, ...item } = data
  return await updateItemRepository(_id, item)
}

export const deleteItemService = async ({ item_id }) => {
  return await deleteItemRepository(item_id)
}

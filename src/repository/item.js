import Item from '../models/item'
import ProcurementStaff from '../models/procurement_staff'
import Supplier from '../models/supplier'

export const getAllItemsRepository = async () => {
  try {
    return await Item.find()
  } catch (error) {
    return { status: error.code, message: error.message }
  }
}

export const getAllItemsBySupplierIdRepository = async ({ supplier_id }) => {
  try {
    return await Item.find({ supplier_id })
  } catch (error) {
    return { status: error.code, message: error.message }
  }
}

export const addItemBySupplierIdRepository = async (item) => {
  try {
    const { _id } = await Item(item).save()
    await Supplier.findOneAndUpdate({ _id: item.supplier_id }, { $push: { supplier_items: _id } })
    await ProcurementStaff.findOneAndUpdate(
      { procurement_staff_id: item.procurement_staff },
      { $push: { added_items: _id } },
    )
  } catch (error) {
    return { status: error.code, message: error.message }
  }
}

export const updateItemRepository = async (_id, item) => {
  try {
    return await Item.findOneAndUpdate({ _id }, item)
  } catch (error) {
    return { status: error.code, message: error.message }
  }
}

export const deleteItemRepository = async (item_id) => {
  try {
    const { supplier_id, procurement_staff } = await Item.findOneAndDelete({ _id: item_id })
    await Supplier.findOneAndUpdate({ _id: supplier_id }, { $pull: { supplier_items: item_id } })
    await ProcurementStaff.findOneAndUpdate(
      { procurement_staff_id: procurement_staff },
      { $pull: { added_items: item_id } },
    )
  } catch (error) {
    return { status: error.code, message: error.message }
  }
}

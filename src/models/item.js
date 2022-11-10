import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
  item_name: {
    type: String,
    required: true,
  },
  item_description: {
    type: String,
    required: true,
  },
  item_category: {
    type: String,
    required: true,
  },
  item_unit_price: {
    type: Number,
    required: true,
  },
  item_supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'supplier',
  },
})

const Item = mongoose.model('item', itemSchema)

export default Item

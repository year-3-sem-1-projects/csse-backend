import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema(
  {
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
    supplier_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'supplier',
    },
    procurement_staff: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'procurement_staff',
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
)

const Item = mongoose.model('item', itemSchema)

export default Item

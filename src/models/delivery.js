import mongoose from 'mongoose'

const deliverySchema = new mongoose.Schema(
  {
    delivery_status: {
      type: String,
      required: true,
    },
    delivery_advice_note_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'delivery_advice_note',
    },
    supplier_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'supplier',
    },
    site_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'site',
    },
    purchase_order_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'purchase_order',
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
)

const Delivery = mongoose.model('delivery', deliverySchema)

export default Delivery

// delivery status - pending, in transit, delivered, returned to supplier

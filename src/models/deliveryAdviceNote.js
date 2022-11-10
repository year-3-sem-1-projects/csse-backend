import mongoose from 'mongoose'

const deliveryAdviceNoteSchema = new mongoose.Schema(
  {
    deliveryDate: {
      type: Date,
      required: true,
    },
    deliveryItems: [
      {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'item',
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    supplierId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'supplier',
    },
    siteId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'site',
    },
    purchaseOrderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'purchase_order',
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
)

const DeliveryAdviceNote = mongoose.model('DeliveryAdviceNote', deliveryAdviceNoteSchema)

export default DeliveryAdviceNote

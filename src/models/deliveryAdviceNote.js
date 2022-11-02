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
          ref: 'DeliveryItem',
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    supplierId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Supplier',
    },
    siteId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Site',
    },
    purchaseOrderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'PurchaseOrder',
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
)

const DeliveryAdviceNote = mongoose.model('DeliveryAdviceNote', deliveryAdviceNoteSchema)

export default DeliveryAdviceNote

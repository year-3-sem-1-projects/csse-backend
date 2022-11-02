import mongoose from 'mongoose'

const purchaseOrderSchema = new mongoose.Schema(
  {
    orderDate: {
      type: Date,
      required: true,
    },
    orderStatus: {
      type: String,
      required: true,
    },
    orderItems: [
      {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'OrderItem',
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    sitemanagerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SiteManager',
    },
    supplierId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Supplier',
    },
    siteId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Site',
    },
    requiredDeliveryDate: {
      type: Date,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
)

const PurchaseOrder = mongoose.model('PurchaseOrder', purchaseOrderSchema)

export default PurchaseOrder

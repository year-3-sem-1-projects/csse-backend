import mongoose from 'mongoose'

const purchaseOrderSchema = new mongoose.Schema(
  {
    order_status: {
      type: String,
      required: true,
    },
    order_items: [
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
    comments: [
      {
        author: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'manager',
        },
        comment: {
          type: String,
          required: true,
        },
        date: {
          type: Date,
          required: true,
        },
      },
    ],
    assigned_manager: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'manager',
      },
    ],
    site_manager_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'site_manager',
    },
    supplier_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'supplier',
    },
    site_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'site',
    },
    required_delivery_date: {
      type: Date,
      required: false,
    },
    delivery: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'delivery',
      },
    ],
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
)

const PurchaseOrder = mongoose.model('purchase_order', purchaseOrderSchema)

export default PurchaseOrder


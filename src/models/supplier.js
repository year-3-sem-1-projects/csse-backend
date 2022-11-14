import mongoose from 'mongoose'

const supplierSchema = new mongoose.Schema(
  {
    supplier_id: {
      type: String,
      required: true,
    },
    supplier_name: {
      type: String,
      required: true,
    },
    supplier_address: {
      type: String,
      required: true,
    },
    supplier_contact: {
      type: String,
      required: true,
    },
    supplier_email: {
      type: String,
      required: true,
    },
    supplier_items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'item',
      },
    ],
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

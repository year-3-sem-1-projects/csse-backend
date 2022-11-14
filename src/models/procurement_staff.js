import mongoose from 'mongoose'

const procurementStaffSchema = new mongoose.Schema(
  {
    procurement_staff_id: {
      type: 'String',
      ref: 'employee',
    },
    added_suppliers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'supplier',
      },
    ],
    added_items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'item',
      },
    ],
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
)

const ProcurementStaff = mongoose.model('procurement_staff', procurementStaffSchema)

export default ProcurementStaff

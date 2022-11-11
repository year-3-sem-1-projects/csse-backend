import mongoose from 'mongoose'

const procurementStaffSchema = new mongoose.Schema(
  {
    procurement_staff_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'employee',
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
)

const ProcurementStaff = mongoose.model('procurement_staff', procurementStaffSchema)

export default ProcurementStaff

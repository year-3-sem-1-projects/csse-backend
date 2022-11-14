import mongoose from 'mongoose'

const accountingStaffSchema = new mongoose.Schema(
  {
    accounting_staff_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'employee',
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
)

const AccountingStaff = mongoose.model('accounting_staff', accountingStaffSchema)

export default AccountingStaff

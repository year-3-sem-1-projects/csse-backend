import mongoose from 'mongoose'

const accountingStaffSchema = new mongoose.Schema(
  {
    accounting_staff_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'employee',
    },
    company_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'company',
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
)

const AccountingStaff = mongoose.model('accounting_staff', accountingStaffSchema)

export default AccountingStaff

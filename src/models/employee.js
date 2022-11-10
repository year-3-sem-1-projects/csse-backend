import mongoose from 'mongoose'

const employeeSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    site_manager: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'site_manager',
      },
    ],
    manager: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'manager',
      },
    ],
    accounting_staff: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'accounting_staff',
      },
    ],
    procurement_staff: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'procurement_staff',
      },
    ],
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

const Employee = mongoose.model('employee', employeeSchema)

export default Employee

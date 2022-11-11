import mongoose from 'mongoose'

const employeeSchema = new mongoose.Schema(
  {
    employee_id: {
      type: 'String',
      ref: 'site_manager',
      required: true,
    },
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
    role: {
      type: String,
      required: true,
    },
    company_id: {
      type: 'String',
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

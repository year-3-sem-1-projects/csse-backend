import mongoose from 'mongoose'

const employeeSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: false,
    },
    last_name: {
      type: String,
      required: false,
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

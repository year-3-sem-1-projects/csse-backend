import mongoose from 'mongoose'

const managerSchema = new mongoose.Schema(
  {
    manager_id: {
      type: 'String',
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
)

const Manager = mongoose.model('manager', managerSchema)

export default Manager

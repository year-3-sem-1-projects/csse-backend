import mongoose from 'mongoose'

const siteSchema = new mongoose.Schema(
  {
    siteName: {
      type: String,
      required: true,
    },
    siteAddress: {
      type: String,
      required: true,
    },
    siteManagerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee',
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
)

const Site = mongoose.model('Site', siteSchema)

export default Site

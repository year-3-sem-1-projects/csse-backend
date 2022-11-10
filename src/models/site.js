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
      ref: 'site_manager',
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'company',
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
)

const Site = mongoose.model('site', siteSchema)

export default Site

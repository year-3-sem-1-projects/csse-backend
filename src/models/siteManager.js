import mongoose from 'mongoose'

const siteManagerSchema = new mongoose.Schema(
  {
    siteManagerName: {
      type: String,
      required: true,
    },
    siteManagerEmail: {
      type: String,
      required: true,
    },
    siteManagerPhone: {
      type: String,
      required: true,
    },
    siteManagerPassword: {
      type: String,
      required: true,
    },
    siteList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Site',
      },
    ],
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
)

const SiteManager = mongoose.model('SiteManager', siteManagerSchema)

export default SiteManager

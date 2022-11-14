import mongoose from 'mongoose'

const siteManagerSchema = new mongoose.Schema(
  {
    site_manager_id: {
      type: 'String',
      required: true,
    },
    purchase_order: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'purchase_order',
      },
    ],
    site: [
      {
        type: 'String',
        ref: 'site',
      },
    ],
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
)

const SiteManager = mongoose.model('site_manager', siteManagerSchema)

export default SiteManager

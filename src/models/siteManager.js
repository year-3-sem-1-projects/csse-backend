import mongoose from 'mongoose'

const siteManagerSchema = new mongoose.Schema(
  {
    site_manager_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'employee',
    },
    purchase_order: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'purchase_order',
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

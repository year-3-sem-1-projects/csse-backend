import mongoose from 'mongoose'

const companySchema = new mongoose.Schema(
  {
    company_name: {
      type: String,
      required: true,
    },
    company_address: {
      type: String,
      required: true,
    },
    company_email: {
      type: String,
      required: true,
    },
    company_phone: {
      type: String,
      required: true,
    },
    company_logo: {
      type: String,
      required: false,
    },
    company_website: {
      type: String,
      required: false,
    },
    company_description: {
      type: String,
      required: true,
    },
    company_size: {
      type: String,
      required: true,
    },
    company_country: {
      type: String,
      required: true,
    },
    company_city: {
      type: String,
      required: true,
    },
    company_state: {
      type: String,
      required: true,
    },
    company_zip: {
      type: String,
      required: true,
    },
    employees: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'employee',
      },
    ],
    sites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'site',
      },
    ],
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
)

const Company = mongoose.model('company', companySchema)

export default Company

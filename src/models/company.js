import mongoose from 'mongoose'

const companySchema = new mongoose.Schema(
  {
    company_id: {
      type: String,
      required: true,
    },
    company_name: {
      type: String,
      required: true,
    },
    company_address: {
      type: String,
      required: false,
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
      required: false,
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
    site_managers: [
      {
        type: 'String',
        ref: 'employee',
      },
    ],
    managers: [
      {
        type: 'String',
        ref: 'employee',
      },
    ],
    accounting_staffs: [
      {
        type: 'String',
        ref: 'employee',
      },
    ],
    procurement_staffs: [
      {
        type: 'String',
        ref: 'employee',
      },
    ],
    sites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'site',
      },
    ],
    suppliers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'supplier',
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

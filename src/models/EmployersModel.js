import mongoose from 'mongoose';

const employerSchema = mongoose.Schema(
  {
    empName: {
      type: String,
      required: [true, 'Please provide company name'],
    },
    natureContent: {
      type: String,
      required: [true, 'Please provide company nature'],
    },
    industry: {
      type: String,

      required: [true, 'Provide industry name '],

      required: [true, 'Please provide industry'],
    },
    website: {
      type: String,
      required: [true, 'Please provide company website'],
    },
    contact_email: {
      type: String,
      required: [true, 'Please provide contact email'],
    },
    contact_phone: {
      type: String,
      required: [true, 'Please provide contact phone number'],
    },
    logo: {
      type: String,
      required: [true, 'Please provide company logo'],
      default: 'default-company-logo.png',
    },
    description: {
      type: String,
      required: [true, 'Please provide company description'],
    },
  },
  { timestamps: true }
);

const Employer = mongoose.model('Employer', employerSchema);
export default Employer;

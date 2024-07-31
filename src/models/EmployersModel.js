

const employerSchema = new mongoose.Schema(
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
<<<<<<< HEAD
      required: [true, "Provide industry name "],
=======
      required: [true, 'Please provide industry'],
>>>>>>> 055e788b75f83b1efc51052acc0981e2255ec7cb
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
    // userId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
  },
  { timestamps: true }
);



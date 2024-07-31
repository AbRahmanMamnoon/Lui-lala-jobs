
const cvSchema = mongoose.Schema({
  summary: {
    type: String,
    required: true,
  },
  education: [
    {
      school: {
        type: String,
        required: true,
      },
      degree: {
        type: String,
        required: true,
      },
      graduationYear: {
        type: Number,
        required: true,
      },
    },
  ],
  experience: [
    {
      company: {
        type: String,
        required: true,
      },
      position: {
        type: String,
        required: true,
      },
      duration: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  ],
  project: [
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  ],
  skills: [
    {
      type: String,
      required: true,
    },
  ],

  languages: [
    {
      type: String,
      required: true,
    },
  ],
  certifications: [
    {
      type: String,
      required: true,
    },
  ],
});


import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: 'Please enter a valid email address.',
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      //match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    },
    isAdmin: {
      type: String,
      enum: ['admin', 'jobseeker'],
      default: 'jobseeker',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    image: {
      type: String,
      default: 'default-user-image.jpg',
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model('User', userSchema);

export default User;

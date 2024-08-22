import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    pincode: {
      type: String,
    },
    landmark: {
      type: String,
    },
    image: {
      type: String,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    blocked: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

export const UserModel = mongoose.model("user", UserSchema);
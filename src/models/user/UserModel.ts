import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "../../type/user/User";

const UserSchema: Schema = new Schema({
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  password: { type: String, required: true },
  address: { type: String },
  state: { type: String },
  city: { type: String },
  pincode: { type: Number },
  verified: { type: Boolean },
  image: { type: String },
  otp: {type: String},
  landmark: { type: String },
  createdAt: { type: Number, default: Date.now },
  updatedAt: { type: Number, default: Date.now },
});

const UserModel = mongoose.model<IUser & Document>('UserModel', UserSchema);

export default UserModel;
import mongoose, { Schema } from "mongoose";
import { IAdminDb } from "../../type/user/Admin";


const adminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});


export const AdminModel = mongoose.model<IAdminDb & Document>('AdminModel', adminSchema);

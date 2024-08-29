import { Document } from "mongoose";

export interface IUser {
    _id?: string;
    email: {
        type: string,
        unique: true
    };
    phone: Number;
    password: string;
    name?: string | null;
    address?: string | null;
    state?: string | null;
    city?: string | null;
    pincode?: Number | null;
    verified?: boolean | null;
    otp?: string;
    image?: string | null;
    landmark?: string | null;
    createdAt?: Date | null;
    updatedAt?: Date | null;
    __v?: number;
}


export interface IUserDb extends Document {
    _id?: string;
    email: {
        type: string,
        unique: true
    };
    phone: Number;
    password: string;
    name?: string | null;
    address?: string | null;
    state?: string | null;
    city?: string | null;
    pincode?: Number | null;
    verified?: boolean | null;
    otp?: string;
    image?: string | null;
    landmark?: string | null;
    createdAt?: Date | null;
    updatedAt?: Date | null;
    __v?: number;
}
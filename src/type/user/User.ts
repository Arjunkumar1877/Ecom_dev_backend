import { Document } from "mongoose";

export interface IUser  {
    _id?: string;
    email: string;
    phone: string;
    password: string;
    name?: string | null;
    address?: string | null;
    state?: string | null;
    city?: string | null;
    pincode?: number | null;
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
    email: string;
    phone: string;
    password: string;
    name?: string | null;
    address?: string | null;
    state?: string | null;
    city?: string | null;
    pincode?: number | null;
    verified?: boolean | null;
    otp?: string;
    image?: string | null;
    landmark?: string | null;
    createdAt?: Date | null;
    updatedAt?: Date | null;
    __v?: number;
}
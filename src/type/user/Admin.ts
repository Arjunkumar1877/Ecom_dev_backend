import { Document } from "mongoose";

export interface IAdmin {
    _id?: string;
    email: {
        type: string,
        unique: true
    };
    password: string;
    name?: string | null;
    __v?: number;
}


export interface IAdminDb extends Document {
    _id?: string;
    email: {
        type: string,
        unique: true
    };
    password: string | null;
    name?: string | null;
    __v?: number;
}
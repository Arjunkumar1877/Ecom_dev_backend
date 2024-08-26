export interface IUser {
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
    image?: string | null;
    landmark?: string | null;
    createdAt?: Date | null;
    updatedAt?: Date | null;
    __v?: number;
}
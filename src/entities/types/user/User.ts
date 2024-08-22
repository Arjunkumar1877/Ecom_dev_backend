export interface User {
  email: string;
  phone: number;
  password: string;
  address?: string | null;
  state?: string | null;
  city?: string | null;
  pincode?: number | null;
  verified?: boolean
  image?: string;
  landmark?: string;
  createdAt?: number;
  updatedAt?: number
}
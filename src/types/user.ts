export const roles = {
  ADMIN: "admin",
  USER: "user",
};

export type CurrentUser = {
  username: string;
  email: string;
  role: (typeof roles)[keyof typeof roles][];
};

export type CreateUser = {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  phone: string;
  fullName: string;
  address1: string;
  address2: string;
  city: string;
  postalCode: string;
  country: string;
};

export type Login = {
  email: string;
  password: string;
};

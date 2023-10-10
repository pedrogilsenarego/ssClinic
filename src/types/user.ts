export const roles = {
  ADMIN: "admin",
  USER: "user",
};

export type CurrentUser = {
  username: string;
  roles: (typeof roles)[keyof typeof roles][];
};

export type CreateUser = {
  username: string;
  password: string;
  email: string;
};

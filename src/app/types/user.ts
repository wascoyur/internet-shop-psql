export type User = {
  id?: number;
  login: string;
  name: string;
  lastName: string;
  firstName: string;
  email: string;
  password: string;
  phone: string;
  role: Roles;
};

export type Roles = {
  admin?: boolean | undefined;
  owner?: boolean | undefined;
  user: boolean | undefined;
  manager?: boolean | undefined;
};

export type User = {
  id?: number;
  name: string;
  lastName: string;
  firstName: string;
  email: string;
  password: string;
  phone: string;
  roles: Roles;
};

export type Roles = {
  admin?: boolean | undefined;
  owner?: boolean | undefined;
  user: boolean | undefined;
  manager?: boolean | undefined;
};

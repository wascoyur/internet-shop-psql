export type User = {
  id: number;
  name: string;
  lastName: string;
  email: string;
  password: string;
  role: Roles;
};

export type Roles = {
  admin?: boolean | undefined;
  owner?: boolean | undefined;
  user: boolean | undefined;
  manager?: boolean | undefined;
};

export type User = {
  id: number;
  name: string;
  lastName: string;
  email: string;
  password: string;
  role: Roles[];
};

export type Roles = {
  admin?: boolean;
  owner?: boolean;
  user: boolean;
  manager?: boolean;
};

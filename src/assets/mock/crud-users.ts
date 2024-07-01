import { User } from "../../app/types/user.ts";

export const users: User[] = [
  {
    id: 1,
    email: "mulo@mail.ru",
    role: {
      manager: true,
      user: true,
      admin: true,
    },

    password: "password",
    name: "FirsttNAme",
    lastName: "Fwasre",
  },
  {
    id: 2,
    email: "qwer@mail.ru",
    role: { user: true },
    password: "password",
    name: "Rukp",
    lastName: "sdergi",
  },
  {
    id: 3,
    email: "3qwer@maiwel.ru",
    role: { user: true, admin: true },
    password: "password",
    name: "Ferdinand",
    lastName: "Superjur",
  },
];

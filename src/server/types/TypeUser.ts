import { Basket, Rating } from "./types";
import { Request } from "express";


// user.model.ts
export type User = {
  id: number;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  role: string;
  basket?: Basket;
  ratings?: Rating[];
};
export interface UserRegister extends Request{
  body: {
    email:string,
    password:string,
    role:string}
}

export interface UserLogin extends Request {
  body: {
    email: string,
    password: string
  };
}
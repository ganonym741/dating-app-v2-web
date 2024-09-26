import type { GENDER } from "./enum";

export interface LoginReqDto {
    username: string;
    password: string;
}

export interface TokenDto {
    token: string;
    token_expired: Date;
  }

export interface LoginResDto {
  jwt: TokenDto;
  _id: string;
  name: string;
  email: string;
  birth_date: Date;
  gender: GENDER;
  address: string;
  photo: string;
  profile_desc: string;
  phone_number: string;
}
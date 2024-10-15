import type { TokenDto } from "@/types/auth";
import type { GENDER } from "@/types/enum";

export interface LoginReqDto {
    username: string;
    password: string;
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
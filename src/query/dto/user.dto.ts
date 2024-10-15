import type { GENDER } from '@/types/enum';

export interface RegisterUserDto {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface GetManyUserReqDto {
  gender?: GENDER;
  maxAge?: number;
  city?: string;
  province?: string;
};

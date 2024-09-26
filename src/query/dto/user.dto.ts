import type { GENDER } from '@/types/enum';

export type GetManyUserReqDto = {
  gender?: GENDER;
  maxAge?: number;
  city?: string;
  province?: string;
};

import type { GENDER, MEMBERSHIP } from "./enum";
import type { ChineseZodiac, ZodiacSign } from "./horoscope";

export interface UserProps {
  id: string;
  is_online: boolean;
  name: string;
  email: string;
  username: string;
  password: string;
  birth_date: Date;
  gender: GENDER;
  height: number;
  weight: number;
  address: string;
  city: string;
  province: string;
  photo: string;
  profile_desc: string;
  phone_number: string;
  interest: string[];
  zodiac_sign: ZodiacSign;
  chinese_zodiac: ChineseZodiac;
  membership: MEMBERSHIP;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

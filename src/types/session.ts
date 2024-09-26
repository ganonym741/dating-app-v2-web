import type { SessionOptions } from 'iron-session';

export interface SessionData {
  jwt: {
    token: string;
    exp: Date;
  };
  id: string;
}

export const sessionOptions: SessionOptions = {
  password: process.env.SECRET_KEY!,
  cookieName: 'user-session',
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  },
};

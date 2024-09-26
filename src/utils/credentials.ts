'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { getIronSession } from 'iron-session';

import type { LoginResDto, TokenDto } from '@/types/auth';
import type { SessionData} from '@/types/session';
import { sessionOptions } from '@/types/session';

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  return session;
};

export const getToken = async () => {
  const session = await getSession();

  return session.jwt?.token?.toString() || undefined;
};

export const setLogin = async (data: LoginResDto) => {
  const session = await getSession();
  
  session.id = data._id;
  session.jwt = {
    token: data.jwt.token,
    exp: data.jwt.token_expired,
  };

  await session.save();
  redirect('/');
};

export const setNewToken = async (token: TokenDto) => {
  const session = await getSession();

  session.jwt = {
    token: token.token,
    exp: token.token_expired,
  };

  await session.save();
}

export const logout = async () => {
  const session = await getSession();

  session.destroy();
  redirect('/login');
};

import { useMutation } from '@tanstack/react-query';

import Auth from '../service/auth';
import { logout, setLogin, setNewToken } from '@/utils/credentials';
import type { LoginReqDto } from '@/query/dto/auth.dto';

export const useAuthSignin = () => {
  return useMutation({
    mutationFn: async (payload: LoginReqDto) => await Auth.signIn(payload),
    async onSuccess(data) {
      await setLogin(data);
    },
  });
};

export const useRefreshToken = () => {
  return useMutation({
    mutationFn: async () => await Auth.tokenRefresh(),
    async onSuccess(data) {
      await setNewToken(data);
    },
  });
};

export const useAuthLogout = () => {
  return useMutation({
    mutationFn: async () => await Auth.logOut(),
    async onSuccess() {
      await logout();
    },
  });
};
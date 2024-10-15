import { redirect } from 'next/navigation';

import { useMutation, useQuery } from '@tanstack/react-query';

import User from '../service/user';
import type { UserProps } from '@/types/user';
import type { GetManyUserReqDto, RegisterUserDto } from '../dto/user.dto';
import { queryClient } from '@/components/provider/query-provider';
import { logout } from '@/utils/credentials';

export const useRegister = () => {
  return useMutation({
    mutationFn: async (payload: RegisterUserDto) => await User.register(payload),
    onSuccess() {
        redirect('/login');
    }
  });
};

export const useUpdateProfile = () => {
  return useMutation({
    mutationFn: async (payload: UserProps) => await User.updateProfile(payload),
    async onSuccess() {
        await queryClient.invalidateQueries({queryKey: ['my-profile']})
    }
  });
};

export const useRemoveAccount = () => {
  return useMutation({
    mutationFn: async () => await User.removeAccount(),
    async onSuccess() {
        await logout();
    }
  });
};

export const useGetProfile = () => {
  return useQuery({
    queryKey: ['my-profile'],
    queryFn: async () => await User.getProfile(),
    staleTime: Infinity,
  });
};

export const useGetManyUser = (params: GetManyUserReqDto) => {
  return useQuery({
    queryKey: ['my-profile'],
    queryFn: async () => await User.getManyUser(params),
    retry: false,
  });
};

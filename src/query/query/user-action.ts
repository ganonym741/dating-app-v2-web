import { useInfiniteQuery, useMutation } from '@tanstack/react-query';

import UserAction from '../service/user-action';

export const useLikeUser = () => {
  return useMutation({
    mutationFn: async (id: string) => await UserAction.likeUser(id),
    retry: false,
  });
};

export const useLikeAlbum = () => {
  return useMutation({
    mutationFn: async (id: string) => await UserAction.likeAlbum(id),
    retry: false,
  });
};

export const useViewUser = () => {
  return useMutation({
    mutationFn: async (id: string) => await UserAction.viewUser(id),
    retry: false,
  });
};

export const useGetMyFans = () => {
  return useInfiniteQuery({
    queryKey: ['my-fans'],
    queryFn: async ({ pageParam = 1 }) => await UserAction.getMyFans(pageParam),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.meta?.total_page !== lastPage.meta?.current_page
        ? allPages.length + 1
        : undefined,
    initialPageParam: 1,
    staleTime: 5 * 60 * 1000,
  });
};

export const useGetMyViewer = () => {
  return useInfiniteQuery({
    queryKey: ['my-viewer'],
    queryFn: async ({ pageParam = 1 }) =>
      await UserAction.getMyViewer(pageParam),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.meta?.total_page !== lastPage.meta?.current_page
        ? allPages.length + 1
        : undefined,
    initialPageParam: 1,
    staleTime: 5 * 60 * 1000,
  });
};

export const useAlbumLike = (id: string) => {
  return useInfiniteQuery({
    queryKey: ['album-like', id],
    queryFn: async ({ pageParam = 1 }) =>
      await UserAction.getAlbumLike(id, pageParam),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.meta?.total_page !== lastPage.meta?.current_page
        ? allPages.length + 1
        : undefined,
    initialPageParam: 1,
    staleTime: 5 * 60 * 1000,
  });
};

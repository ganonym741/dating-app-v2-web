import { useMutation, useQuery } from '@tanstack/react-query';

import Conversation from '../service/conversation';
import type { ConversationProps } from '@/types/conversation';

export const useCreateConversation = () => {
  return useMutation({
    mutationFn: async (payload: ConversationProps) =>
      await Conversation.create(payload),
  });
};

export const useGetAllConversation = () => {
  return useQuery({
    queryKey: ['my-conversation'],
    queryFn: async () => await Conversation.getAll(),
    staleTime: Infinity,
  });
};

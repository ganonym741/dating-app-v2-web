import type { ConversationProps } from "@/types/conversation";
import type { StatusDataMetaRes, SwaggerMetaResponse } from "@/types/global";
import request from "../base/axios";

const Conversation = {
    create: (payload: ConversationProps): Promise<SwaggerMetaResponse> => request.post('/conversation-room', payload).then(res => res),
    getAll: (): Promise<StatusDataMetaRes<ConversationProps[]>> => request.get('/conversation-room').then(res => res),
}

export default Conversation;
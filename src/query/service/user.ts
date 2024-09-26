import type { UserProps } from "@/types/user";
import request from "../base/axios";
import type { StatusDataMetaRes, SwaggerMetaResponse } from "@/types/global";
import type { GetManyUserReqDto } from "../dto/user.dto";
import { objectToQueryString } from "@/utils/helper";

const User = {
    register: (payload: UserProps): Promise<SwaggerMetaResponse> => request.post('/user/register', payload).then((res) => res),
    getProfile: (): Promise<UserProps> => request.get('/user/profile').then((res) => res.data),
    getManyUser: (params: GetManyUserReqDto): Promise<StatusDataMetaRes<UserProps[]>> => request.get(`/user${objectToQueryString(params)}`).then((res) => res),
    updateProfile: (payload: UserProps): Promise<SwaggerMetaResponse> => request.put('/user', payload).then((res) => res),
    removeAccount: (): Promise<SwaggerMetaResponse> => request.delete('/user').then((res) => res),
}

export default User;
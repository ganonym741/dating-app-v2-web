import type { StatusDataMetaRes, SwaggerMetaResponse } from "@/types/global";
import request from "../base/axios";
import type { AlbumLikeProps, UserLikeProps, UserViewProps } from "@/types/user-action";

const UserAction = {
    likeUser: (id: string): Promise<SwaggerMetaResponse> => request.put(`/action/user-like/${id}`, {}).then(res => res),
    viewUser: (id: string): Promise<SwaggerMetaResponse> => request.put(`/action/user-view/${id}`, {}).then(res => res),
    likeAlbum: (id: string): Promise<SwaggerMetaResponse> => request.put(`/action/album-like/${id}`, {}).then(res => res),
    getMyFans: (page: number): Promise<StatusDataMetaRes<UserLikeProps[]>> => request.get(`/action/my-fans?page=${page}`).then(res => res),
    getMyViewer: (page: number): Promise<StatusDataMetaRes<UserViewProps[]>> => request.get(`/action/my-viewer?page=${page}`).then(res => res),
    getAlbumLike: (id: string, page: number): Promise<StatusDataMetaRes<AlbumLikeProps[]>> => request.get(`/action/album-like/${id}?page=${page}`).then(res => res),
}

export default UserAction;
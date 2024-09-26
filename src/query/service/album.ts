import type { AlbumProps } from "@/types/album"
import request from "../base/axios"
import type { StatusDataMetaRes, SwaggerMetaResponse } from "@/types/global"

const Album = {
    create: (payload: AlbumProps): Promise<SwaggerMetaResponse> => request.post('/album', payload).then(res => res),
    getByUserId: (id: string): Promise<StatusDataMetaRes<AlbumProps[]>> => request.get(`/album?user_id=${id}`).then(res => res),
    getMine: (): Promise<StatusDataMetaRes<AlbumProps[]>> => request.get('/album/my-album').then(res => res),
    update: (id: string, payload: AlbumProps): Promise<SwaggerMetaResponse> => request.put(`/album/${id}`, payload).then(res => res),
    remove: (id: string): Promise<SwaggerMetaResponse> => request.delete(`/album/${id}`).then(res => res),
}

export default Album
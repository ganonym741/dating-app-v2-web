export interface AlbumLikeProps {
  _id: string;
  album_id: string;
  liked_by_id: string;
}

export interface UserLikeProps {
  _id: string;
  user_id: string;
  liked_by_id: string;
}

export interface UserViewProps {
  _id: string;
  user_id: string;
  viewed_by_id: string;
}

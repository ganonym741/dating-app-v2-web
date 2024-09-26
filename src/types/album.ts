export interface AlbumProps {
  _id: string;
  user_id: string;
  photo_1: string;
  photo_2: string;
  photo_3: string;
  photo_4: string;
  photo_5: string;
  descriptions: string;
  like: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

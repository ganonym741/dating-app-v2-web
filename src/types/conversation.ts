export interface ConversationProps {
  _id: string;
  participants: string[];
  name: string;
  created_by: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

export interface ChatProps {
    _id: string
    sender_id: string;
    conversation_id: string;
    message: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
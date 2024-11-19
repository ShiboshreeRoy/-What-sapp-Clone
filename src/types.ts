export interface Message {
  id: string;
  content: string;
  timestamp: Date;
  sender: 'user' | 'contact';
}

export interface Chat {
  id: string;
  contact: {
    name: string;
    avatar: string;
    status: 'online' | 'offline';
    lastSeen?: Date;
  };
  messages: Message[];
  unreadCount: number;
}
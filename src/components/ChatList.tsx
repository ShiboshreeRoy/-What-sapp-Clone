import React from 'react';
import { format } from 'date-fns';
import { Chat } from '../types';
import { MessageSquare } from 'lucide-react';

interface ChatListProps {
  chats: Chat[];
  selectedChatId: string | null;
  onChatSelect: (chatId: string) => void;
}

export function ChatList({ chats, selectedChatId, onChatSelect }: ChatListProps) {
  return (
    <div className="w-full md:w-96 bg-white border-r border-gray-200">
      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Chats</h2>
      </div>
      <div className="overflow-y-auto h-[calc(100vh-4rem)]">
        {chats.map((chat) => {
          const lastMessage = chat.messages[chat.messages.length - 1];
          
          return (
            <div
              key={chat.id}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                selectedChatId === chat.id ? 'bg-gray-100' : ''
              }`}
              onClick={() => onChatSelect(chat.id)}
            >
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={chat.contact.avatar}
                    alt={chat.contact.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {chat.contact.status === 'online' && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-sm font-semibold text-gray-900 truncate">
                      {chat.contact.name}
                    </h3>
                    {lastMessage && (
                      <span className="text-xs text-gray-500">
                        {format(lastMessage.timestamp, 'HH:mm')}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500 truncate">
                      {lastMessage?.content}
                    </p>
                    {chat.unreadCount > 0 && (
                      <span className="ml-2 bg-green-500 text-white text-xs rounded-full px-2 py-1">
                        {chat.unreadCount}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
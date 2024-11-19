import React, { useState } from 'react';
import { ChatList } from './components/ChatList';
import { ChatWindow } from './components/ChatWindow';
import { chats } from './data';

function App() {
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const selectedChat = chats.find((chat) => chat.id === selectedChatId);

  return (
    <div className="flex h-screen bg-gray-100">
      <ChatList
        chats={chats}
        selectedChatId={selectedChatId}
        onChatSelect={setSelectedChatId}
      />
      <ChatWindow chat={selectedChat} />
    </div>
  );
}

export default App;
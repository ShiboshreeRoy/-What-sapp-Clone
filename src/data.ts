import { Chat } from './types';

export const chats: Chat[] = [
  {
    id: '1',
    contact: {
      name: 'Sarah Wilson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      status: 'online'
    },
    messages: [
      {
        id: '1',
        content: 'Hey! How are you doing?',
        timestamp: new Date('2024-03-10T10:00:00'),
        sender: 'contact'
      },
      {
        id: '2',
        content: 'I\'m good, thanks! Just finished that project we talked about.',
        timestamp: new Date('2024-03-10T10:02:00'),
        sender: 'user'
      }
    ],
    unreadCount: 0
  },
  {
    id: '2',
    contact: {
      name: 'Alex Thompson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      status: 'offline',
      lastSeen: new Date('2024-03-10T09:30:00')
    },
    messages: [
      {
        id: '1',
        content: 'Are we still on for lunch tomorrow?',
        timestamp: new Date('2024-03-09T18:30:00'),
        sender: 'contact'
      }
    ],
    unreadCount: 1
  },
  {
    id: '3',
    contact: {
      name: 'Emma Davis',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      status: 'online'
    },
    messages: [
      {
        id: '1',
        content: 'Just sent you the files you requested!',
        timestamp: new Date('2024-03-10T09:45:00'),
        sender: 'contact'
      }
    ],
    unreadCount: 2
  }
];
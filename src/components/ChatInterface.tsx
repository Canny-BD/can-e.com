import React from 'react';
import { ChatMessage } from './ChatMessage';
import { MessageInput } from './MessageInput';
import { Message } from '../types';

interface ChatInterfaceProps {
  messages: Message[];
  onSendMessage: (message: string) => void;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ messages, onSendMessage }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>
      <MessageInput onSendMessage={onSendMessage} />
    </div>
  );
};
import React from 'react';
import { Message } from '../types';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isAssistant = message.sender === 'assistant';
  
  return (
    <div className={`flex ${isAssistant ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`max-w-3/4 p-4 rounded-lg ${
        isAssistant ? 'bg-blue-100' : 'bg-green-100'
      }`}>
        <p className="text-gray-800">{message.text}</p>
        <span className="text-xs text-gray-500">
          {message.timestamp.toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
};
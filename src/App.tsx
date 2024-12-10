import React, { useState } from 'react';
import { ClientForm } from './components/ClientForm';
import { ChatInterface } from './components/ChatInterface';
import { Header } from './components/Header';
import { Message, ClientInfo } from './types';
import { handleUserMessage, createConfirmationMessage } from './utils/messageHandlers';

const INITIAL_MESSAGE: Message = {
  id: '1',
  text: "Hello! Welcome to Can-e's Creative Studio. I'm here to help you explore our creative services and discuss your project needs. How may I assist you today?",
  sender: 'assistant',
  timestamp: new Date()
};

function App() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [showForm, setShowForm] = useState(false);

  const handleSendMessage = (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages((prev) => [...prev, userMessage]);
    
    setTimeout(() => {
      const response = handleUserMessage(text);
      setMessages((prev) => [...prev, response]);
      
      if (response.text.includes('form')) {
        setShowForm(true);
      }
    }, 1000);
  };

  const handleFormSubmit = (values: ClientInfo) => {
    const confirmationMessage = createConfirmationMessage(values);
    setMessages((prev) => [...prev, confirmationMessage]);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Header />
          <div className="h-[600px] flex flex-col">
            <div className="flex-1 overflow-hidden">
              {showForm ? (
                <div className="p-4">
                  <ClientForm onSubmit={handleFormSubmit} />
                </div>
              ) : (
                <ChatInterface
                  messages={messages}
                  onSendMessage={handleSendMessage}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
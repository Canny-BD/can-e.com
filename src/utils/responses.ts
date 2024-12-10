import { Message } from '../types';

export const generateResponse = (text: string): Message => ({
  id: Date.now().toString(),
  text,
  sender: 'assistant',
  timestamp: new Date()
});

export const getServiceResponse = (serviceType: string): string => {
  const responses: Record<string, string> = {
    'graphic design': 'For graphic design projects, we offer logo design, branding, print materials, and digital assets. Our process includes initial consultation, concept development, and multiple revision rounds.',
    'motion graphics': 'Our motion graphics services include animated logos, explainer videos, and social media content. We work with various styles and can adapt to your brand guidelines.',
    'video editing': 'We provide comprehensive video editing services including color correction, sound mixing, and special effects. We can work with raw footage in any format.',
    'journalism': 'Our journalism services cover feature articles, interviews, research pieces, and editorial content. We ensure thorough fact-checking and engaging storytelling.',
    'poetry': 'We create custom poetry for various occasions and purposes, from personal pieces to commercial use. Each piece is crafted to match your desired tone and style.'
  };

  return responses[serviceType] || 'Could you tell me more about what type of project you\'re interested in?';
};
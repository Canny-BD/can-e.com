export type ServiceType = 'graphic design' | 'motion graphics' | 'video editing' | 'journalism' | 'poetry';

export interface ClientInfo {
  fullName: string;
  email: string;
  companyName?: string;
  projectType: ServiceType;
  timeline: string;
  budgetRange: string;
  projectDescription: string;
}

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}
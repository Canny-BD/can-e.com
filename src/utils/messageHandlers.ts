import { Message, ClientInfo } from '../types';
import { generateResponse, getServiceResponse } from './responses';

export const handleUserMessage = (text: string): Message => {
  const lowerText = text.toLowerCase();
  
  if (lowerText.includes('pricing') || lowerText.includes('cost')) {
    return generateResponse('Our pricing varies based on project scope and requirements. Would you like to fill out our project form so we can provide a detailed quote?');
  }
  
  if (lowerText.includes('timeline') || lowerText.includes('how long')) {
    return generateResponse('Project timelines depend on complexity and requirements. Typically, we complete projects within 2-4 weeks. Would you like to discuss your specific needs?');
  }

  for (const service of ['graphic design', 'motion graphics', 'video editing', 'journalism', 'poetry']) {
    if (lowerText.includes(service)) {
      return generateResponse(getServiceResponse(service));
    }
  }

  return generateResponse('Would you like to fill out our project requirements form to get started?');
};

export const createConfirmationMessage = (values: ClientInfo): Message => {
  return generateResponse(
    `Thank you for providing your project details, ${values.fullName}! We'll review your requirements and get back to you at ${values.email} within 24 hours. We'll prepare a detailed proposal for your ${values.projectType} project.`
  );
};
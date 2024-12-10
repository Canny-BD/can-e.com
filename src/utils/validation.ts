import * as Yup from 'yup';

export const clientInfoSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  companyName: Yup.string(),
  projectType: Yup.string().required('Project type is required'),
  timeline: Yup.string().required('Timeline is required'),
  budgetRange: Yup.string().required('Budget range is required'),
  projectDescription: Yup.string().required('Project description is required')
});
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { clientInfoSchema } from '../utils/validation';
import { ClientInfo, ServiceType } from '../types';

interface ClientFormProps {
  onSubmit: (values: ClientInfo) => void;
}

const serviceTypes: ServiceType[] = [
  'graphic design',
  'motion graphics',
  'video editing',
  'journalism',
  'poetry'
];

export const ClientForm: React.FC<ClientFormProps> = ({ onSubmit }) => {
  const initialValues: ClientInfo = {
    fullName: '',
    email: '',
    companyName: '',
    projectType: 'graphic design',
    timeline: '',
    budgetRange: '',
    projectDescription: ''
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={clientInfoSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <Field
              name="fullName"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.fullName && touched.fullName && (
              <div className="text-red-500 text-sm">{errors.fullName}</div>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Field
              name="email"
              type="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.email && touched.email && (
              <div className="text-red-500 text-sm">{errors.email}</div>
            )}
          </div>

          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
              Company Name (Optional)
            </label>
            <Field
              name="companyName"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="projectType" className="block text-sm font-medium text-gray-700">
              Project Type
            </label>
            <Field
              as="select"
              name="projectType"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              {serviceTypes.map((type) => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </Field>
          </div>

          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-gray-700">
              Timeline
            </label>
            <Field
              name="timeline"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.timeline && touched.timeline && (
              <div className="text-red-500 text-sm">{errors.timeline}</div>
            )}
          </div>

          <div>
            <label htmlFor="budgetRange" className="block text-sm font-medium text-gray-700">
              Budget Range
            </label>
            <Field
              name="budgetRange"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.budgetRange && touched.budgetRange && (
              <div className="text-red-500 text-sm">{errors.budgetRange}</div>
            )}
          </div>

          <div>
            <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700">
              Project Description
            </label>
            <Field
              as="textarea"
              name="projectDescription"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.projectDescription && touched.projectDescription && (
              <div className="text-red-500 text-sm">{errors.projectDescription}</div>
            )}
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
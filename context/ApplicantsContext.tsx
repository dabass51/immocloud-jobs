'use client'

import React, { createContext, useState, useCallback, Dispatch, SetStateAction, ReactNode } from 'react';
import type { Applicant } from '@/types/types';

interface ApplicantsContextType {
  applicants: Applicant[];
  setApplicants: Dispatch<SetStateAction<Applicant[]>>;
  fetchApplicants: () => Promise<void>;
}

interface ApplicantsProviderProps {
  children: ReactNode;
}

export const ApplicantsContext = createContext<ApplicantsContextType>({
  applicants: [],
  setApplicants: () => {},
  fetchApplicants: async () => {},
});

export const ApplicantsProvider: React.FC<ApplicantsProviderProps> = ({ children }) => {
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  
  const fetchApplicants = useCallback(async () => {
    try {
      const response = await fetch('/api/applicants');
      if (!response.ok) {
        throw new Error('Failed to fetch applicants');
      }
      const data = await response.json();
      setApplicants(data.applicants || []);
    } catch (error) {
      console.error('Error fetching applicants:', error);
    }
  }, []);

  
  return (
    <ApplicantsContext.Provider value={{ applicants, setApplicants, fetchApplicants }}>
      {children}
    </ApplicantsContext.Provider>
  );
};
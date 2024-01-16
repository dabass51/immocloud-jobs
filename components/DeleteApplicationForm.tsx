'use client'

import React, { useContext, useState } from 'react';
import { Button } from "@/components/ui/button"

import { ApplicantsContext } from '@/context/ApplicantsContext';

interface ViewApplicantProps {
  id: string;
}

export const DeleteApplicationForm: React.FC<ViewApplicantProps> = ({ id }) => {

  const [isLoading, setIsLoading] = useState(false);
  const { fetchApplicants } = useContext(ApplicantsContext);

  const handleDelete = async () => {
    setIsLoading(true)
    const response = await fetch('/api/applicants', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    fetchApplicants();
    setIsLoading( false )
  };

  return (
    <Button onClick={() => handleDelete()} disabled={isLoading} variant="destructive">Delete</Button>
  )
}

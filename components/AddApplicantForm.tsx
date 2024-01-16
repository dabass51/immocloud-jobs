import React, { useState, FormEvent, useContext } from 'react';

import { ApplicantsContext } from '@/context/ApplicantsContext';

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export const AddApplicantForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const { fetchApplicants } = useContext(ApplicantsContext);
  
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/applicants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });

      if (response.ok) {
        setName('');
        fetchApplicants();
      } else {
      }
    } catch (error) {
    } 
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor="name">Applicant Name:</Label>
      <Input
        className="mb-2"
        type="text"
        id="name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button type="submit" disabled={isLoading}>Add Applicant</Button>
    </form>
  );
};
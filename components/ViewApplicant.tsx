'use client'

import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import type { Applicant, ApplicantResponse } from '@/types/types'

interface ViewApplicantProps {
  id: string;

}

export const ViewApplicant: React.FC<ViewApplicantProps> = ({ id }) => {

  const [applicant, setApplicant] = useState<Applicant>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const response = await fetch(`/api/applicants/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const data:ApplicantResponse = await response.json().then();
        
        if( data.applicant ) {
          setApplicant(data.applicant);
        }
        
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    };
    if (isDialogOpen) {
      fetchApplicants();
    }
  }, [isDialogOpen]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button onClick={() => setIsDialogOpen(true)} className="mr-2">view Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>view profile</DialogTitle>
        </DialogHeader>
        <div>
          <p>
            Id: {applicant && applicant.id}
          </p>
          <p>
            Name: {applicant && applicant.name}
          </p>
          <p>
            status: {applicant && applicant.status}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

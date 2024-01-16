'use client'

import React, { useEffect, useState, useContext } from 'react';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import type { Applicant, ApplicantResponse } from '@/types/types'

import { ApplicantsContext } from '@/context/ApplicantsContext';

interface ViewApplicantProps {
  id: string;
}

export const EditApplicationForm: React.FC<ViewApplicantProps> = ({ id }) => {

  const [applicant, setApplicant] = useState<Applicant>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { fetchApplicants } = useContext(ApplicantsContext);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApplicant((prev) => ({ ...prev, name: e.target.value }));
  };

  const handleSelectChange = (value:string) => {
    setApplicant((prev) => ({ ...prev, status: value as ApplicantStatus }));
  }; 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true)
      const response = await fetch(`/api/applicants/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(applicant),
      });
      setIsLoading(false)
      fetchApplicants();
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error updating applicant:', error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button onClick={() => setIsDialogOpen(true)} variant="outline" className="mr-2">Edit Profile</Button>
      </DialogTrigger>
      
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
                Make changes to the applicant here. Click save when youre done.
            </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <div>
                        <Label htmlFor="name" className="text-right">
                        Name
                        </Label>
                        <Input
                            id="name"
                            className="col-span-3"
                            value={applicant?.name || ''}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <Label htmlFor="username" className="text-right">
                        Username
                        </Label>
                        <Select value={applicant?.status || ''} onValueChange={handleSelectChange}>

                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder={applicant && applicant.status} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="OPEN">OPEN</SelectItem>
                                <SelectItem value="ACCEPTED">ACCEPTED</SelectItem>
                                <SelectItem value="DECLINED">DECLINED</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <Button type="submit" disabled={isLoading}>Save changes</Button>
            </form>
        </DialogContent>
    </Dialog>
  )
}

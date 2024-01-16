'use client'

import React, { useEffect, useContext } from 'react';

import { columns } from "./columns"
import { DataTable } from "./data-table"

import { useSearchParams } from 'next/navigation'

import {AddApplicantForm} from '@/components/AddApplicantForm'

import { ApplicantsContext } from '@/context/ApplicantsContext';

export default function DashboardPage() {
  
  const { applicants, fetchApplicants } = useContext(ApplicantsContext);

  const searchParams = useSearchParams()

  useEffect(() => {
    fetchApplicants();
  }, [fetchApplicants]);

  return (
    <>
      <div className="h-full flex-1 flex-col space-y-8 p-8 flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">All applicants</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of all your applicants!
            </p>
          </div>
        </div>

        <AddApplicantForm></AddApplicantForm>

        <DataTable data={applicants} columns={columns} />
      </div>
    </>
  )
}
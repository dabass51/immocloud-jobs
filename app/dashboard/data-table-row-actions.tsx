"use client"

import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"

import {Applicant} from '@prisma/client'

import {EditApplicationForm} from '@/components/EditApplicationForm'
import {ViewApplicant} from '@/components/ViewApplicant'
import {DeleteApplicationForm} from '@/components/DeleteApplicationForm'


interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {

  const applicant = row.original as Applicant

  return (
    
    <>
        <ViewApplicant id={applicant.id}></ViewApplicant>
        <EditApplicationForm id={applicant.id}></EditApplicationForm>
        <DeleteApplicationForm id={applicant.id}></DeleteApplicationForm>
    </>      
  )
}

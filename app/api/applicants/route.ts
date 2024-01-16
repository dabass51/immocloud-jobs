import { NextResponse } from 'next/server'
import type { Applicant, ApplicantResponse, ApplicantsResponse } from '@/types/types'
import prisma from '@/lib/prisma';

import applicantsData from '@/data/applicantsData';

export async function POST (request: Request): Promise<NextResponse<ApplicantResponse>> {
  const body = await request.json()
  const { name } = body

  const newApplicant:Applicant = await prisma.applicant.create({
    data: {
      name,
      status: 'OPEN',
    },
  });
  return NextResponse.json({ message: 'Applicant added', applicant: newApplicant })
}

export async function GET (request: Request): Promise<NextResponse<ApplicantsResponse>> {

  try {
    const applicants:Applicant[] = await prisma.applicant.findMany();
    return NextResponse.json({ message: 'Applicants retrieved', applicants: applicants })
  } catch (error) {
    return NextResponse.json({ message: 'Applicants could not be retrieved', error })
  }
}

export async function PUT (request: Request): Promise<NextResponse> {

  try {
    const { id, status } = await request.json()

    const updatedApplicant = await prisma.applicant.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json({ message: 'Applicant added', applicant: updatedApplicant })
  } catch (error) {
    return NextResponse.json({ message: 'Applicants could not be edited', error })
  }
}

export async function DELETE (request: Request): Promise<NextResponse> {
  try {
    const { id } = await request.json()
    await prisma.applicant.delete({
      where: { id: String(id) },
    });
    return NextResponse.json({ message: 'Applicant deleted', applicant: {} })
  } catch (error) {
    return NextResponse.json({ message: 'Applicants could not be deleted', error })
  }
} 
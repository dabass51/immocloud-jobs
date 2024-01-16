import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
const prisma = new PrismaClient()

export async function GET (request: Request, { params }: { params: { id: string } }): Promise<NextResponse> {
  
  const id = params.id;

  try {
    const applicant = await prisma.applicant.findUnique({
      where: { id: id }
    });

    if (!applicant) {
      return NextResponse.json({ error: 'applicant not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Applicant fetched', applicant })
  } catch (error) {
    return NextResponse.json({ error: 'error' }, { status: 500 });
  } 
}

export async function PUT (request: Request, { params }: { params: { id: string } }): Promise<NextResponse> {

  const id = params.id;
  const { name, status } = await request.json();
  
  try {
    const updatedApplicant = await prisma.applicant.update({
      where: { id: id.toString() },
      data: { name, status },
    });
    return NextResponse.json({updatedApplicant});
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}
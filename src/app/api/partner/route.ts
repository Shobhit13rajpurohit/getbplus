import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { name, company, type } = data;

    if (!name || !company || !type) {
      return NextResponse.json(
        { error: 'Name, company, and type are required fields.' },
        { status: 400 }
      );
    }

    // In a real application, this would save to a DB or send an email
    console.log('Partner application received:', data);

    return NextResponse.json(
      { message: 'Partnership application received successfully.' },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
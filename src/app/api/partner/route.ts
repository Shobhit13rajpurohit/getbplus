import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.formData();

    // In a real application, you would use an email service like Resend or Nodemailer here.
    // For this demonstration, we are simulating a successful submission.

    console.log('Partner form submission received:', {
      name: data.get('name'),
      company: data.get('company'),
      type: data.get('type'),
      volume: data.get('volume'),
      email: data.get('email'),
      message: data.get('message'),
    });

    return NextResponse.json({ success: true, message: 'Inquiry sent successfully' });
  } catch (error) {
    console.error('Error processing partner form:', error);
    return NextResponse.json({ success: false, message: 'Failed to send inquiry' }, { status: 500 });
  }
}
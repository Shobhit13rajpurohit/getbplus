import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.formData();

    // In a real application, you would use an email service like Resend or Nodemailer here.
    // For this demonstration, we are simulating a successful submission.

    console.log('Contact form submission received:', {
      name: data.get('name'),
      email: data.get('email'),
      subject: data.get('subject'),
      message: data.get('message'),
    });

    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ success: false, message: 'Failed to send message' }, { status: 500 });
  }
}
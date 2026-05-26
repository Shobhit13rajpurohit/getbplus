import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
    }

    // Simulate DB delay
    await new Promise(resolve => setTimeout(resolve, 800))

    // In a real app, save to DB here
    console.log(`Waitlist signup: ${email}`)

    return NextResponse.json({ success: true, message: 'Added to waitlist' })
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

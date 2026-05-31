import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, budget, message } = body;

    // Logging simulated data received securely server-side
    console.log('--- Webgreal Server Received Contact Submission ---');
    console.log('Client Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Company:', company);
    console.log('Selected Service:', service);
    console.log('Selected Budget:', budget);
    console.log('Project Brief:', message);
    console.log('Timestamp:', new Date().toISOString());
    console.log('----------------------------------------------------');

    return NextResponse.json({
      success: true,
      message: 'Your inquiry has been stored successfully on Webgreal server.',
      payload: { name, email, service }
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Verification failure' },
      { status: 400 }
    );
  }
}

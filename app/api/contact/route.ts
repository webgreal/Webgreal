import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email and message are required' },
        { status: 400 }
      );
    }

    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_ANON_KEY!
    );

    const { error } = await supabase.from('contact_submissions').insert({
      name,
      email,
      phone: phone || null,
      company: company || null,
      service: service || 'Web Design & Development',
      budget: budget || 'Not specified',
      message,
    });

    if (error) {
      console.error('Failed to store contact submission:', error.message);
      return NextResponse.json(
        { success: false, error: 'Failed to store your inquiry. Please try again.' },
        { status: 500 }
      );
    }

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

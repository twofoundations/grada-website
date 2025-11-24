import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send email notification to contact@grada.com.au
    const emailBody = `
      New contact form submission:
      
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}
      
      Date: ${new Date().toISOString()}
    `;

    try {
      const resendApiKey = process.env.RESEND_API_KEY;
      
      if (resendApiKey) {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'noreply@grada.com.au',
            to: 'contact@grada.com.au',
            subject: `Contact Form: ${subject}`,
            text: emailBody,
          }),
        });
      } else {
        // Log to console if no API key configured
        console.log('Contact form submission (no email service configured):', {
          name,
          email,
          subject,
          message
        });
      }
    } catch (emailError) {
      console.error('Error sending notification email:', emailError);
      // Continue even if email fails - still return success to user
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}


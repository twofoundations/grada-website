import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send email notification to contact@grada.com.au
    // Using a simple email service (you can replace with SendGrid, Resend, etc.)
    const emailBody = `
      New newsletter signup:
      Email: ${email}
      Date: ${new Date().toISOString()}
    `;

    // For now, we'll use the Resend API (you'll need to add RESEND_API_KEY to .env.local)
    // Alternatively, you can use nodemailer or any other email service
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
            subject: 'New Newsletter Signup',
            text: emailBody,
          }),
        });
      } else {
        // Log to console if no API key configured
        console.log('Newsletter signup (no email service configured):', email);
      }
    } catch (emailError) {
      console.error('Error sending notification email:', emailError);
      // Continue even if email fails - still return success to user
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Newsletter signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}


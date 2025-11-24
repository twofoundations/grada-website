'use client';

import { useEffect } from 'react';

export default function CalEmbed() {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Replace 'your-cal-username' with your actual Cal.com username */}
      <div
        data-cal-link="your-cal-username"
        data-cal-config='{"layout":"month_view"}'
        className="min-h-[600px] bg-white rounded-lg shadow-sm"
      >
        <a href="https://cal.com/your-cal-username" className="block text-center py-8">
          Click here to book a call
        </a>
      </div>
    </div>
  );
}


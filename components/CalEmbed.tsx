'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Cal: any;
  }
}

export default function CalEmbed() {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    
    script.onload = () => {
      if (window.Cal) {
        window.Cal('init', 'introduction-session', { origin: 'https://cal.com' });
        
        window.Cal('inline', {
          elementOrSelector: '#my-cal-inline',
          calLink: 'mattpoll/introduction-session',
          layout: 'month_view',
          config: {
            layout: 'month_view',
            theme: 'light'
          }
        });
        
        window.Cal('ui', {
          styles: {
            branding: {
              brandColor: '#000000'
            }
          },
          hideEventTypeDetails: false,
          layout: 'month_view'
        });
      }
    };
    
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div 
        id="my-cal-inline"
        style={{ 
          width: '100%', 
          height: '600px', 
          overflow: 'auto' 
        }}
      />
    </div>
  );
}

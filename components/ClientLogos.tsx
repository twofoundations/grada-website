'use client';

import { useEffect } from 'react';

export default function ClientLogos() {
  useEffect(() => {
    // Load Elfsight platform script
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="bg-black py-8">
      {/* Elfsight Logo Showcase | Grada client logos */}
      <div 
        className="elfsight-app-e70dadb1-9f0c-4fb4-ab13-75f015b3f1ac" 
        data-elfsight-app-lazy
      />
    </div>
  );
}


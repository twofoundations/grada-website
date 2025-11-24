'use client';

import { useEffect } from 'react';

export default function CalEmbed() {
  useEffect(() => {
    // Cal.com inline embed initialization
    const initCal = () => {
      if (typeof window !== 'undefined' && (window as any).Cal) {
        const Cal = (window as any).Cal;
        
        Cal("init", "introduction-session", { origin: "https://cal.com" });
        
        Cal.ns["introduction-session"]("inline", {
          elementOrSelector: "#my-cal-inline",
          config: { layout: "month_view" },
          calLink: "mattpoll/introduction-session",
        });
        
        Cal.ns["introduction-session"]("ui", {
          styles: { branding: { brandColor: "#000000" } },
          hideEventTypeDetails: false,
          layout: "month_view"
        });
      }
    };

    // Load Cal.com embed script
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    script.onload = () => {
      // Initialize Cal with the custom namespace function
      (function (C: any, A: string, L: string) {
        let p = function (a: any, ar: any) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments); };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");

      // Initialize after Cal is loaded
      setTimeout(initCal, 100);
    };
    
    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div 
        style={{ width: '100%', height: '600px', overflow: 'scroll' }} 
        id="my-cal-inline"
      ></div>
    </div>
  );
}

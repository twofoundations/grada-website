'use client';

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "introduction-session" });
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto" style={{ height: "600px" }}>
      <Cal 
        namespace="introduction-session"
        calLink="mattpoll/introduction-session"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view", theme: "light" }}
      />
    </div>
  );
}

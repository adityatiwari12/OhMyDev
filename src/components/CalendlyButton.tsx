"use client";

import { useEffect, type ReactNode } from "react";

const CALENDLY_URL =
  "https://calendly.com/tiwariaditya005/software-consulting-meet-ohhmydev";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

function loadCalendlyAssets() {
  if (!document.getElementById("calendly-css")) {
    const link = document.createElement("link");
    link.id = "calendly-css";
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);
  }
  if (!document.getElementById("calendly-js")) {
    const script = document.createElement("script");
    script.id = "calendly-js";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }
}

export function CalendlyButton({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  useEffect(() => {
    loadCalendlyAssets();
  }, []);

  function open() {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <button type="button" onClick={open} className={className}>
      {children ?? "Book discovery call"}
    </button>
  );
}

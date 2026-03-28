"use client";

import { useEffect, useState } from "react";

interface VideoBackgroundProps {
  src: string;
  overlayOpacity?: string;
  className?: string;
}

export default function VideoBackground({ src, overlayOpacity = "bg-black/60", className = "" }: VideoBackgroundProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={`absolute inset-0 z-0 bg-navy-dark ${className}`}></div>;
  }

  return (
    <div className={`absolute inset-0 z-0 ${className}`}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover"
        suppressHydrationWarning
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className={`absolute inset-0 ${overlayOpacity}`}></div>
    </div>
  );
}

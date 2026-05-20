"use client";
import { useState } from "react";

type Props = {
  className?: string;
  alt?: string;
  srcPrimary?: string;
  srcFallback?: string;
};

export default function Logo({ className = "", alt = "BrandHive", srcPrimary = "/logos/The_Brand_Hive_UK_Transparent.png", srcFallback = "/logos/brand-logo.png" }: Props){
  const [src, setSrc] = useState(srcPrimary);
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => { if (src !== srcFallback) setSrc(srcFallback); }}
    />
  );
}


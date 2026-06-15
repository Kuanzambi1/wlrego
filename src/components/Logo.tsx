import React from 'react';
import logoSrc from '../assets/wl_logo.png';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <img
      src={logoSrc}
      alt="W. REGO Logo"
      className={`object-contain  h-32 ${className}`}
    />
  );
}

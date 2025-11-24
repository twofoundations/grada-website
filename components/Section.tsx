'use client';

import { useEffect, useState } from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'dark';
  backgroundColor?: string;
  backgroundImage?: string;
  overlay?: boolean;
  parallax?: boolean;
}

export default function Section({ 
  children, 
  className = '', 
  id,
  background = 'white',
  backgroundColor,
  backgroundImage,
  overlay = false,
  parallax = false
}: SectionProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (!parallax) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [parallax]);

  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-black text-white'
  };

  const bgStyle = backgroundColor ? { backgroundColor } : {};

  return (
    <section 
      id={id}
      className={`py-16 md:py-24 relative ${!backgroundImage && !backgroundColor ? bgClasses[background] : ''} ${parallax ? 'overflow-hidden' : ''} ${className}`}
      style={bgStyle}
    >
      {/* Background Image */}
      {backgroundImage && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${backgroundImage})`,
              ...(parallax ? {
                transform: `translateY(${scrollY * 0.1}px)`,
                height: '110%'
              } : {})
            }}
          />
          {overlay && <div className="absolute inset-0 bg-black/50" />}
        </>
      )}
      
      {/* Content */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${backgroundImage ? 'relative z-10' : ''}`}>
        {children}
      </div>
    </section>
  );
}


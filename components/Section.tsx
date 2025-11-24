'use client';

import { useEffect, useState, useRef } from 'react';

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
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!parallax || !sectionRef.current) return;

    const handleScroll = () => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect) {
        // Calculate parallax based on section's position relative to viewport
        const scrollProgress = Math.max(0, window.innerHeight - rect.top);
        setOffset(scrollProgress * 0.1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
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
      ref={sectionRef}
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
                transform: `translateY(-${offset}px)`,
                height: '115%',
                top: '-10%'
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


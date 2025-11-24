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
        // Only move when section is visible, and limit movement to prevent black space
        const viewportHeight = window.innerHeight;
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        
        // Calculate how much of the section is visible
        const visibleTop = Math.max(0, viewportHeight - sectionTop);
        const visibleBottom = Math.max(0, viewportHeight - (sectionTop + sectionHeight));
        const visibleAmount = visibleTop - visibleBottom;
        
        // Only apply parallax when section is in viewport, and limit to prevent overflow
        // Use smaller multiplier on mobile (0.05) vs desktop (0.08)
        const isMobile = window.innerWidth < 768;
        const parallaxSpeed = isMobile ? 0.05 : 0.08;
        const maxOffset = sectionHeight * 0.15; // Limit max movement to 15% of section height
        
        const calculatedOffset = Math.min(visibleAmount * parallaxSpeed, maxOffset);
        setOffset(calculatedOffset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${backgroundImage})`,
              ...(parallax ? {
                transform: `translateY(-${offset}px)`,
                height: '120%',
                top: '-10%',
                minHeight: '100%' // Ensure it always covers the section
              } : {
                minHeight: '100%' // Ensure it always covers the section
              })
            }}
          />
          {overlay && <div className="absolute inset-0 bg-black/50 z-[1]" />}
        </>
      )}
      
      {/* Content */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${backgroundImage ? 'relative z-10' : ''}`}>
        {children}
      </div>
    </section>
  );
}


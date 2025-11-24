'use client';

import { useState } from 'react';
import Image from 'next/image';

interface IndustryCardProps {
  title: string;
  description: string;
  image: string;
}

export default function IndustryCard({ title, description, image }: IndustryCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  // Truncate description to approximately 3 lines (about 120 characters) for front
  const previewDescription = description.length > 120 
    ? description.substring(0, 120) + '...' 
    : description;

  return (
    <div 
      className="relative h-80 cursor-pointer perspective"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of Card */}
        <div className="absolute inset-0 backface-hidden">
          <div className="relative overflow-hidden rounded-lg group h-full">
            {/* Background Image */}
            <Image 
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p className="text-sm text-white/90">{previewDescription}</p>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="relative h-full rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-6 flex flex-col overflow-y-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
            <p className="text-white/90 text-base leading-relaxed flex-1">
              {description}
            </p>
            <p className="text-white/60 text-sm mt-4 italic">
              Tap to flip back
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

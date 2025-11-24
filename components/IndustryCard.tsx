'use client';

import { useState } from 'react';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface IndustryCardProps {
  title: string;
  description: string;
  image: string;
}

export default function IndustryCard({ title, description, image }: IndustryCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Truncate description to approximately 3 lines (about 120 characters)
  const previewDescription = description.length > 120 
    ? description.substring(0, 120) + '...' 
    : description;

  return (
    <>
      {/* Card */}
      <div 
        className="relative overflow-hidden rounded-lg group cursor-pointer h-80"
        onClick={() => setIsOpen(true)}
      >
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

      {/* Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="relative bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
              aria-label="Close"
            >
              <XMarkIcon className="w-6 h-6 text-gray-600" />
            </button>

            {/* Image */}
            <div className="relative h-64 w-full">
              <Image 
                src={image}
                alt={title}
                fill
                className="object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h2 className="absolute bottom-6 left-6 text-3xl font-bold text-white">
                {title}
              </h2>
            </div>

            {/* Content */}
            <div className="p-8">
              <p className="text-gray-700 text-lg leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

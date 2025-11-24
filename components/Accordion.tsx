'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface AccordionItemProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ title, description, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left hover:bg-gray-50 transition-colors px-4"
      >
        <span className="text-lg font-medium text-gray-900">{title}</span>
        <ChevronDownIcon 
          className={`w-5 h-5 text-gray-500 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-4 pb-5 text-gray-600">
          {description}
        </div>
      )}
    </div>
  );
}

interface AccordionProps {
  items: Array<{
    id: string;
    title: string;
    description: string;
  }>;
}

export default function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="border-t border-gray-200">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          description={item.description}
          isOpen={openId === item.id}
          onClick={() => setOpenId(openId === item.id ? null : item.id)}
        />
      ))}
    </div>
  );
}


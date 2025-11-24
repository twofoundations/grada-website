'use client';

import { useState } from 'react';
import Image from 'next/image';
import ContactModal from './ContactModal';
import PrivacyModal from './PrivacyModal';
import TermsModal from './TermsModal';

export default function Footer() {
  const [contactOpen, setContactOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <>
      <footer className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Side - Logo and Location */}
            <div className="space-y-4">
              <Image
                src="/images/logo.png"
                alt="GRADA customer insight and strategy"
                width={150}
                height={50}
                className="h-10 w-auto brightness-0 invert"
              />
              <p className="text-white/70 text-sm">
                Grada is based in Sydney, Australia
              </p>
            </div>

            {/* Right Side - Navigation Links */}
            <nav className="flex flex-col md:items-end items-start gap-4">
              <button 
                onClick={() => setContactOpen(true)}
                className="text-white/70 hover:text-white transition-colors"
              >
                Contact
              </button>
              <button 
                onClick={() => setTermsOpen(true)}
                className="text-white/70 hover:text-white transition-colors"
              >
                Terms & conditions
              </button>
              <button 
                onClick={() => setPrivacyOpen(true)}
                className="text-white/70 hover:text-white transition-colors"
              >
                Privacy policy
              </button>
            </nav>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-white/10 text-left text-sm text-white/50">
            © {new Date().getFullYear()} GRADA. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <TermsModal isOpen={termsOpen} onClose={() => setTermsOpen(false)} />
    </>
  );
}


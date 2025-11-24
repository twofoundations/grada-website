import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/logo.png"
            alt="GRADA customer insight and strategy"
            width={150}
            height={50}
            className="h-10 w-auto"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
          <Link 
            href="/contact" 
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Contact
          </Link>
          <Link 
            href="/terms" 
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Terms & conditions
          </Link>
          <Link 
            href="/privacy" 
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Privacy policy
          </Link>
        </nav>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-600">
          © {new Date().getFullYear()} GRADA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}


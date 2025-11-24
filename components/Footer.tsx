import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
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
          <nav className="flex flex-col sm:flex-row sm:justify-end items-start sm:items-center gap-4 sm:gap-8">
            <Link 
              href="/contact" 
              className="text-white/70 hover:text-white transition-colors"
            >
              Contact
            </Link>
            <Link 
              href="/terms" 
              className="text-white/70 hover:text-white transition-colors"
            >
              Terms & conditions
            </Link>
            <Link 
              href="/privacy" 
              className="text-white/70 hover:text-white transition-colors"
            >
              Privacy policy
            </Link>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-left text-sm text-white/50">
          © {new Date().getFullYear()} GRADA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}


import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end justify-center pt-20 pb-16 md:pb-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/hero/customers-on-bus.jpg)',
            backgroundPosition: '50.53% 34.4%'
          }}
        />
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          Customer insight & strategy
        </h1>
        <h3 className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-8 max-w-3xl mx-auto">
          Do your customers feel like they are getting more value than they pay?
        </h3>
        <Link
          href="/#book"
          className="inline-block px-8 py-3 bg-white text-black hover:bg-gray-100 transition-all rounded-full font-medium text-lg"
        >
          Book a call
        </Link>
      </div>
    </section>
  );
}


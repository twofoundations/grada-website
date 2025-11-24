'use client';

export default function ClientLogos() {
  // Placeholder for client logos
  // TODO: Add actual client logos when provided
  
  const logos = [
    'Client 1',
    'Client 2',
    'Client 3',
    'Client 4',
    'Client 5',
    'Client 6',
  ];

  return (
    <div className="overflow-hidden bg-white py-12">
      <div className="relative">
        <div className="flex animate-scroll">
          {logos.concat(logos).map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 text-gray-400 font-medium text-lg"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
}


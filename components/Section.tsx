interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'dark';
  backgroundImage?: string;
  overlay?: boolean;
}

export default function Section({ 
  children, 
  className = '', 
  id,
  background = 'white',
  backgroundImage,
  overlay = false
}: SectionProps) {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900 text-white'
  };

  return (
    <section 
      id={id}
      className={`py-16 md:py-24 relative ${!backgroundImage ? bgClasses[background] : ''} ${className}`}
    >
      {/* Background Image */}
      {backgroundImage && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
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


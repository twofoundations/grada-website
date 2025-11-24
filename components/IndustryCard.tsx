interface IndustryCardProps {
  title: string;
  description: string;
  image: string;
}

export default function IndustryCard({ title, description, image }: IndustryCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg group cursor-pointer h-80">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-white/90 line-clamp-3">{description}</p>
      </div>
    </div>
  );
}


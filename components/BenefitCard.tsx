import Image from 'next/image';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function BenefitCard({ title, description, icon }: BenefitCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-white/10 transition-colors">
      <div className="mb-4 w-16 h-16 relative bg-white rounded-full p-3">
        <Image 
          src={icon} 
          alt={title}
          width={64}
          height={64}
          className="object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white/90">{description}</p>
    </div>
  );
}


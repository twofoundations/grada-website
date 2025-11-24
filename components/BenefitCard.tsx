import Image from 'next/image';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function BenefitCard({ title, description, icon }: BenefitCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-white/10 transition-colors">
      <div className="mb-6 w-20 h-20 relative">
        <Image 
          src={icon} 
          alt={title}
          width={80}
          height={80}
          className="object-contain brightness-0 invert"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white/90">{description}</p>
    </div>
  );
}


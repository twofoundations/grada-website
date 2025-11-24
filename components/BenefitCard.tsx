import { 
  ClockIcon, 
  PlayIcon, 
  ChartBarIcon, 
  UserIcon, 
  BoltIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/outline';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: string;
}

const iconMap = {
  clock: ClockIcon,
  play: PlayIcon,
  chart: ChartBarIcon,
  user: UserIcon,
  bolt: BoltIcon,
  check: CheckCircleIcon,
};

export default function BenefitCard({ title, description, icon }: BenefitCardProps) {
  const IconComponent = iconMap[icon as keyof typeof iconMap] || CheckCircleIcon;

  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
      <div className="mb-4">
        <IconComponent className="w-12 h-12 text-gray-900" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}


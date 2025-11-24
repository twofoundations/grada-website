export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const benefits: Benefit[] = [
  {
    id: 'fast-engagement',
    title: 'Fast engagement',
    description: 'Agree on the brief and get on with the job.',
    icon: 'clock'
  },
  {
    id: 'on-demand',
    title: 'On demand, pause any time',
    description: 'Scale up or down as needed. Pause or cancel the engagement at anytime.',
    icon: 'play'
  },
  {
    id: 'cost-effective',
    title: '25% the cost of consulting',
    description: 'Designed to make day rates and timesheets a thing of the past.',
    icon: 'chart'
  },
  {
    id: 'experience',
    title: 'More experience',
    description: 'Get access to the most senior and experienced consulting and transformation talent available.',
    icon: 'user'
  },
  {
    id: 'delivery',
    title: 'Fast flexible focused delivery',
    description: 'Define a project or select an ongoing service from the services menu.',
    icon: 'target'
  },
  {
    id: 'support',
    title: 'Leadership support',
    description: 'Instantly lift the capability, direction and confidence of your team.',
    icon: 'users'
  }
];


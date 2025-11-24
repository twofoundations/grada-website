export interface Industry {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const industries: Industry[] = [
  {
    id: 'higher-education',
    title: 'Higher Education',
    description: 'The transition to university, establishing student experience centres of excellence, student engagement, enrolment and retention, online and hybrid learning models, international student experience, career pathways and industry engagement, family support information and services.',
    image: '/images/industries/education.jpg'
  },
  {
    id: 'food-supply',
    title: 'Food supply',
    description: 'Paddock to plate insights, engaging the next generation of farmers, product and category innovation, supply chain transparency and efficiency, supply program and incentive innovation, customer and supplier segmentation and relationship models, livestock rep engagement, digital experiences, pricing structures and competitiveness.',
    image: '/images/industries/food.jpg'
  },
  {
    id: 'retail',
    title: 'Retail',
    description: 'Beating the ecommerce giants, omni-channel experiences & the augmented physical experience, designing value add services, membership & loyalty programs, business customer relationship models, customer value segmentation, post sale service and support experiences.',
    image: '/images/industries/retail.jpg'
  },
  {
    id: 'hospitality',
    title: 'Hospitality',
    description: 'Designing luxury and premium experiences, delivering unique and personalised experiences, experiencing the brand at every touchpoint, designing sensory experiences, exceptional customer service principles and consistent team delivery, augmented digital experiences and services.',
    image: '/images/industries/hospitality.jpg'
  },
  {
    id: 'pharmaceutical',
    title: 'Pharmaceutical',
    description: 'Mapping the patient disease journey (acute, chronic and rare disease), mapping complex healthcare stakeholder eco-systems, education and information (right content, right customer, right channel, right time), understanding prescriber behaviour, patient support and advocacy, screen interactions and tele-health.',
    image: '/images/industries/pharma.jpg'
  },
  {
    id: 'financial-services',
    title: 'Financial services',
    description: 'Enhancing the digital experience, tailoring financial solutions and experiences to customer needs, fund member loyalty and retention, advisor and broker experience delivery, customer onboarding, education & financial literacy, high care customer experiences, Integrating customer risk into material risk governance.',
    image: '/images/industries/financial-services.jpg'
  },
  {
    id: 'utilities',
    title: 'Utilities',
    description: 'Responding to changing customer needs and the policy environment, developing the customer promise and measures, increasing trust and satisfaction, designing operating models that focus teams on complex work and digital on the simple high volume services, service provider engagement and accreditation programs.',
    image: '/images/industries/utilities.jpg'
  },
  {
    id: 'automotive',
    title: 'Automotive',
    description: 'Path to purchase mapping - triggers, research, consideration sets, evaluation and purchase, fleet buying needs and experiences, trade account models and channel development, dealer network engagement, pre and post sales service experience uplift, financial services customer experience.',
    image: '/images/industries/automotive.jpg'
  },
  {
    id: 'transport-tourism',
    title: 'Transport & tourism',
    description: 'Seamless travel experiences from planning to post-trip services, transport interchange experiences, wayfinding, signage and communication, customer segmentation, retention and advocacy, transport choice models, physical access and mobility experience, customer experience & service principles.',
    image: '/images/industries/transport.jpg'
  }
];


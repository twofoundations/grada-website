import Hero from '@/components/Hero';
import Section from '@/components/Section';
import BenefitCard from '@/components/BenefitCard';
import Accordion from '@/components/Accordion';
import TestimonialCard from '@/components/TestimonialCard';
import IndustryCard from '@/components/IndustryCard';
import CalEmbed from '@/components/CalEmbed';
import NewsletterForm from '@/components/NewsletterForm';
import { benefits } from '@/content/benefits';
import { services } from '@/content/services';
import { testimonials } from '@/content/testimonials';
import { industries } from '@/content/industries';

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* About Section 1 - Roger Martin Quote */}
      <Section background="white">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-light italic text-gray-800 leading-relaxed">
            "The fundamental purpose of any business — is to create more value for customers than it costs to do so"
          </blockquote>
          <p className="mt-4 text-gray-600">— Roger Martin</p>
        </div>
      </Section>

      {/* About Section 2 - Detailed Description */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Customer insight & strategy
          </h2>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Creating customer value demands empathy, creativity, and hard data. It's often easier and faster to add features or fiddle with pricing to grow revenue. But do your customers actually value these changes? Are they getting more value than they pay? Do they feel that you truly understand them?
            </p>
            <p>
              Most businesses don't have a clear view of what customers need and value most. This makes customer strategy little more than a guess. How can you develop a compelling strategy to deliver value when you don't even know what your customers value?
            </p>
            <p>
              Through a structured, evidence-based approach you can gain a complete picture of what customers actually value, what they'll pay for, where you can differentiate and outcompete. This transforms customer strategy from guesswork into systematic creation of customer value.
            </p>
          </div>
        </div>
      </Section>

      {/* Engagement Benefits */}
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Engagement benefits
          </h2>
          <p className="text-xl text-gray-600">
            A better way to engage transformation and strategy consulting talent
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.id} {...benefit} />
          ))}
        </div>
      </Section>

      {/* Services Menu */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Services menu
          </h2>
          <Accordion items={services} />
        </div>
      </Section>

      {/* Testimonials */}
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What people are saying
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </Section>

      {/* Industry Experience */}
      <Section background="gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Industry experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep expertise across multiple industries, with a focus on understanding unique customer needs and delivering tailored strategies that drive measurable results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <IndustryCard key={industry.id} {...industry} />
            ))}
          </div>
        </div>
      </Section>

      {/* Book a Call */}
      <Section background="white" id="book">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book a call
          </h2>
          <p className="text-xl text-gray-600">
            Let's discuss how we can help transform your customer strategy
          </p>
        </div>
        <CalEmbed />
      </Section>

      {/* Newsletter Signup */}
      <Section background="gray">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Keep me updated
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to receive insights and updates on customer strategy
          </p>
          <NewsletterForm />
        </div>
      </Section>
    </main>
  );
}

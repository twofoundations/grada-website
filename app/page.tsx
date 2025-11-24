import Hero from '@/components/Hero';
import Section from '@/components/Section';
import BenefitCard from '@/components/BenefitCard';
import Accordion from '@/components/Accordion';
import TestimonialCard from '@/components/TestimonialCard';
import IndustryCard from '@/components/IndustryCard';
import CalEmbed from '@/components/CalEmbed';
import NewsletterForm from '@/components/NewsletterForm';
import ClientLogos from '@/components/ClientLogos';
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
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[70%_30%] gap-8 items-start">
            <div className="space-y-6 text-base text-gray-700 leading-relaxed text-left">
              <p>
                If you don't understand what drives value and for which customers, how will you know what choices to make and determine precisely where you should invest?
              </p>
              <p>
                What consumers truly value can be challenging to pin down and psychologically complicated. How can leadership teams actively manage value or devise ways to deliver more of it, whether functional (reducing cost, risk or effort), emotional (reducing stress, increasing fun, motivation or nostalgia) or social (belonging or status)?
              </p>
              <p>
                The task is made more difficult by customer experts who deliver un-actionable insights and preach that delightful and wow experiences are the way to success with complete disregard for the probabilistic behaviour of customers or understanding the relevance of customer experience in a particular category.
              </p>
              <p>
                And if pinpointing what customers value wasn't hard enough, then orchestrating the delivery of that value from the backline to the frontline of the enterprise can be challenging, to say the least, considering the sheer breadth of engagement required, multiple business units, multiple channels, service partners, technology platforms and internal and external data quality.
              </p>
            </div>
            <div className="space-y-4 text-left">
              <p className="text-lg font-semibold text-gray-900 leading-relaxed">
                Every successful product or service derives from insights about customers.
              </p>
              <p className="text-base text-gray-700">Roger L Martin</p>
            </div>
          </div>
        </div>
      </Section>

      {/* About Section 2 - Peter Drucker Quote */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[70%_30%] gap-8 items-start">
            <div className="space-y-6 text-base text-gray-700 leading-relaxed text-left">
              <p>
                To keep customers loyal and attract new ones, you need to remain relevant and superior. Companies must continually update and adapt their strategies and business models to respond to the explosion of choice that ever more sophisticated consumers face.
              </p>
              <p>
                Grada's ambition is to deliver more value to its clients. To simplify engagement through an on-demand model, with faster output of actionable insights, strategic choices, and next-level support for customer-focused leaders.
              </p>
              <p>
                By partnering with Grada, you gain access to a wealth of expertise in customer insight and strategy design, all while leveraging our simplified engagement model for ongoing, scalable support tailored to your organisation's unique needs.
              </p>
            </div>
            <div className="space-y-4 text-left">
              <p className="text-lg font-semibold text-gray-900 leading-relaxed">
                The value of a product or service is not what you put into it, it's what the customer gets out of it.
              </p>
              <p className="text-base text-gray-700">Peter Drucker</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Client Logos */}
      <ClientLogos />

      {/* Engagement Benefits */}
      <Section 
        backgroundImage="/images/hero/happy-customers.jpg"
        overlay={true}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Engagement benefits
          </h2>
          <p className="text-xl text-white/90">
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
      <Section 
        backgroundImage="/images/testimonials/background.jpg"
        overlay={true}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
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
      <Section 
        backgroundImage="/images/hero/concert.jpg"
        overlay={true}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Keep me updated
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Subscribe to receive insights and updates on customer strategy
          </p>
          <NewsletterForm />
        </div>
      </Section>
      </main>
  );
}

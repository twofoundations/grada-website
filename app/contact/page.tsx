import { Metadata } from 'next';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'Contact | GRADA',
  description: 'Get in touch with GRADA for customer insight and strategy consulting.',
};

export default function ContactPage() {
  return (
    <main className="pt-20">
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 mb-8">
            Ready to transform your customer strategy? Let's talk.
          </p>
          
          <div className="space-y-6 text-left">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="text-gray-600">
                The best way to start a conversation is to{' '}
                <a href="/#book" className="text-black underline hover:no-underline">
                  book a call
                </a>{' '}
                directly on our calendar.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">
                <a href="mailto:hello@grada.com.au" className="text-black underline hover:no-underline">
                  hello@grada.com.au
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600">
                Sydney, Australia
              </p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}


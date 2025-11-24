import { Metadata } from 'next';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'Terms & Conditions | GRADA',
  description: 'Terms and conditions for GRADA services.',
};

export default function TermsPage() {
  return (
    <main className="pt-20">
      <Section>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & Conditions</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Services</h2>
              <p>
                GRADA provides customer insight and strategy consulting services. All engagements are subject to these terms and conditions unless otherwise agreed in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Engagement Terms</h2>
              <p>
                Services are provided on a flexible basis. Clients may pause or cancel engagements at any time with appropriate notice as outlined in the engagement agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. Confidentiality</h2>
              <p>
                We maintain strict confidentiality of all client information and data. All parties agree to protect proprietary and confidential information shared during the engagement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Liability</h2>
              <p>
                Services are provided to the best of our ability and expertise. Liability is limited as outlined in individual engagement agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Contact</h2>
              <p>
                For questions about these terms, please contact us at{' '}
                <a href="mailto:hello@grada.com.au" className="text-black underline">
                  hello@grada.com.au
                </a>
              </p>
            </section>
          </div>
        </div>
      </Section>
    </main>
  );
}


import { Metadata } from 'next';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'Privacy Policy | GRADA',
  description: 'Privacy policy for GRADA - how we collect and protect your information.',
};

export default function PrivacyPage() {
  return (
    <main className="pt-20">
      <Section>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you book a consultation, subscribe to our newsletter, or contact us with inquiries.
              </p>
              <p>
                This may include: name, email address, company information, and any details you choose to share during consultations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and improve our consulting services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you updates and newsletters (with your consent)</li>
                <li>Analyze how our website is used to improve user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist in operating our website and conducting our business, subject to confidentiality agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Cookies and Analytics</h2>
              <p>
                We use cookies and similar tracking technologies to analyze website traffic and usage patterns. You can control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. You may unsubscribe from our newsletters at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">7. Contact Us</h2>
              <p>
                If you have questions about this privacy policy, please contact us at{' '}
                <a href="mailto:hello@grada.com.au" className="text-black underline">
                  hello@grada.com.au
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">8. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated "Last updated" date.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </main>
  );
}


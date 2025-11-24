'use client';

import Modal from './Modal';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Terms & Conditions">
      <div className="prose prose-sm max-w-none">
        <p className="text-gray-600 mb-4">
          <em>Last updated: {new Date().toLocaleDateString()}</em>
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">1. Acceptance of Terms</h3>
        <p className="text-gray-700 mb-4">
          By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use this website.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">2. Services</h3>
        <p className="text-gray-700 mb-4">
          Grada provides customer insight and strategy consulting services. The specific terms of service delivery will be outlined in individual service agreements or statements of work.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">3. Intellectual Property</h3>
        <p className="text-gray-700 mb-4">
          The content, organization, graphics, design, and other matters related to this website are protected under applicable copyrights and other proprietary laws. Copying, redistribution, or publication of any such matters is strictly prohibited without our express written permission.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">4. Confidentiality</h3>
        <p className="text-gray-700 mb-4">
          We maintain strict confidentiality regarding all client information and project details. Any information shared through our contact forms or during consultations will be kept confidential and used solely for the purpose of providing our services.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">5. Limitation of Liability</h3>
        <p className="text-gray-700 mb-4">
          Grada shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website or services.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">6. Modifications</h3>
        <p className="text-gray-700 mb-4">
          We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after changes are posted constitutes your acceptance of the modified terms.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">7. Governing Law</h3>
        <p className="text-gray-700 mb-4">
          These terms shall be governed by and construed in accordance with the laws of New South Wales, Australia.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">8. Contact Information</h3>
        <p className="text-gray-700">
          For questions about these Terms & Conditions, please contact us at:
          <br />
          Email: contact@grada.com.au
          <br />
          Location: Sydney, Australia
        </p>
      </div>
    </Modal>
  );
}


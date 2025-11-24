'use client';

import Modal from './Modal';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Privacy Policy">
      <div className="prose prose-sm max-w-none">
        <p className="text-gray-600 mb-4">
          <em>Last updated: {new Date().toLocaleDateString()}</em>
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">Introduction</h3>
        <p className="text-gray-700 mb-4">
          Grada ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">Information We Collect</h3>
        <p className="text-gray-700 mb-4">
          We may collect information about you in a variety of ways, including:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Personal Data: Name, email address, and other contact information you provide when you contact us or subscribe to our newsletter.</li>
          <li>Usage Data: Information about how you access and use our website, including your IP address, browser type, and pages visited.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">How We Use Your Information</h3>
        <p className="text-gray-700 mb-4">
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Respond to your inquiries and provide customer service</li>
          <li>Send you newsletters and marketing communications (with your consent)</li>
          <li>Improve our website and services</li>
          <li>Analyze usage trends and preferences</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-3">Data Security</h3>
        <p className="text-gray-700 mb-4">
          We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">Your Rights</h3>
        <p className="text-gray-700 mb-4">
          You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at contact@grada.com.au.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">Contact Us</h3>
        <p className="text-gray-700">
          If you have any questions about this Privacy Policy, please contact us at:
          <br />
          Email: contact@grada.com.au
          <br />
          Location: Sydney, Australia
        </p>
      </div>
    </Modal>
  );
}


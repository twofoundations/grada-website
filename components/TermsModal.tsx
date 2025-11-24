'use client';

import Modal from './Modal';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Terms & Conditions">
      <div className="prose prose-sm max-w-none text-gray-700">
        <h3 className="text-lg font-semibold mt-6 mb-3 text-gray-900">Definitions</h3>
        <p className="mb-6">
          These terms & conditions ("Terms") constitute a legally binding agreement by and between JTMP Family Trust trading as Grada ("Grada"), its subsidiaries, affiliates, successors, and assigns and the client ("Client"), its subsidiaries, affiliates, successors, and assigns, when a consulting service ("Service") is selected and payment made from grada.com.au ("Website").
        </p>

        <h3 className="text-lg font-semibold mt-8 mb-3 text-gray-900">Changes to terms</h3>
        <p className="mb-6">
          We reserve the right to update or modify these Terms at any time without prior notice. Please review these Terms regularly for any changes. The use of our Website and continued subscription to the Service after changes to the Terms constitute your acceptance of the modified Terms.
        </p>

        <h3 className="text-lg font-semibold mt-8 mb-3 text-gray-900">Payment terms</h3>
        <p className="mb-6">
          The Client authorises Grada to initiating a payment or a series of payments on their behalf at the frequency and the amount described in the one-off and subscription Service description selected by the Client.
        </p>

        <h3 className="text-lg font-semibold mt-8 mb-3 text-gray-900">GST (Goods and Services Tax)</h3>
        <p className="mb-6">
          All pricing quoted on the Website and provided under this Agreement are inclusive of GST. GST may not be payable on services provided to an overseas based Client according to Australian GST law. Please contact <a href="mailto:sales@grada.com.au" className="text-blue-600 hover:underline">sales@grada.com.au</a> for GST exempt pricing.
        </p>

        <h3 className="text-lg font-semibold mt-8 mb-3 text-gray-900">Subscription pause and reactivation</h3>
        <p className="mb-6">
          The Client may pause and reactivate a Service subscription at any time by contacting <a href="mailto:accounts@grada.com.au" className="text-blue-600 hover:underline">accounts@grada.com.au</a>. When paused, the Service will continue to be active until its renewal date, where at such time the Service will be made inactive. The Service will be reactivated at the agreed renewal date corresponding to the renewal frequency of the Service. Service reactivations are subject to Grada capacity and Grada does not guarantee that Service can be reactivated when required by the Client.
        </p>

        <h3 className="text-lg font-semibold mt-8 mb-3 text-gray-900">Cancellation</h3>
        <p className="mb-6">
          The Client may cancel a Service subscription at any time by contacting <a href="mailto:accounts@grada.com.au" className="text-blue-600 hover:underline">accounts@grada.com.au</a>. The Service will continue to be active until its renewal date, where at such time the Service will be cancelled.
        </p>

        <h3 className="text-lg font-semibold mt-8 mb-3 text-gray-900">Refunds</h3>
        <p className="mb-6">
          Refunds are not available for a subscription Service. For one-off calendar bookings, a full refund will be provided if Grada is notified greater than 24 hours prior to the booked meeting by contacting <a href="mailto:accounts@grada.com.au" className="text-blue-600 hover:underline">accounts@grada.com.au</a>.
        </p>

        <h3 className="text-lg font-semibold mt-8 mb-3 text-gray-900">Project expenses</h3>
        <p className="mb-6">
          The Client will be responsible for reimbursing Grada for all pre-approved, reasonable, and necessary project-related expenses incurred by Grada in connection with the provision of the Service including but not limited to; travel, printing costs, research recruitment and incentives, production costs, and room hire. These expenses will be itemised and invoiced to the Client at cost.
        </p>

        <h3 className="text-lg font-semibold mt-8 mb-3 text-gray-900">One at a time service</h3>
        <p className="mb-6">
          Service subscriptions are designed for a Service to be delivered one at a time in order to optimise focus and speed of delivery for the Client. One Service may extend over one or many subscription payment periods depending on the scope and requirements of the Client.
        </p>

        <h3 className="text-lg font-semibold mt-8 mb-3 text-gray-900">Service deliverable delays</h3>
        <p className="mb-6">
          Grada will use its best efforts to complete deliverables associated with a Service as agreed with the Client. Grada is not responsible for delays in deliverables if the delay was a result of the Client changing the scope of agreed Services, not being available or any other act or omission by the Client.
        </p>

        <h3 className="text-lg font-semibold mt-8 mb-3 text-gray-900">Intellectual property</h3>
        <p className="mb-4">
          Intellectual property rights in deliverables, Grada methodologies and materials initially remain with Grada. The Client will obtain ownership of all intellectual property rights in the Service-specific deliverables created through the delivery of the Service.
        </p>
        <p className="mb-6">
          For any pre-existing intellectual property that Grada provides for use in connection with the Service, the Client shall be granted a non-exclusive license. The Client is authorised to reuse any such pre-existing intellectual property internally but agrees not to disclose such intellectual property to external parties without consent from Grada. Any new intellectual property created by Grada in the course of the project, which is not part of the Service-specific deliverables, shall remain the property of Grada.
        </p>

        <h3 className="text-lg font-semibold mt-8 mb-3 text-gray-900">Confidentially</h3>
        <p className="mb-6">
          Both parties agree to maintain the confidentiality of proprietary information disclosed during the course of the Service. Confidential Information does not include information that is public knowledge (unless due to wrongful disclosure) or required by law to be disclosed. Upon completion of the Service, both parties will ensure that any confidential information of the other party is securely stored, destroyed, or returned. Both parties agree to maintain the confidentiality of Confidential Information for a period of five (5) years from the date of disclosure.
        </p>

        <h3 className="text-lg font-semibold mt-8 mb-3 text-gray-900">Privacy policy</h3>
        <p className="mb-6">
          By using our Website and/or a Service, the Client consents to our Privacy Policy which explains how we collect, use, and protect your personal information.
        </p>

        <h3 className="text-lg font-semibold mt-8 mb-3 text-gray-900">Limitation of liability</h3>
        <p className="mb-6">
          To the fullest extent permitted by law, neither party shall be liable for any indirect, special, or consequential damages, including loss of profit, data, or business interruption. A liability cap may be established through mutual agreement, and any excluded damage types will be explicitly stated.
        </p>

        <h3 className="text-lg font-semibold mt-8 mb-3 text-gray-900">Dispute resolution and governing law</h3>
        <p className="mb-6">
          In the event of a dispute, the parties agree to work in good faith to resolve the matter amicably. If a resolution cannot be reached within thirty (30) days, the parties agree to submit the dispute to mediation before pursuing any other form of dispute resolution. This Agreement shall be governed by and construed in accordance with the laws of New South Wales, Australia, without regard to its conflict of laws principles. The parties agree to submit to the exclusive jurisdiction of the courts located in New South Wales.
        </p>

        <h3 className="text-lg font-semibold mt-8 mb-3 text-gray-900">Miscellaneous</h3>
        <p className="mb-4">
          These Terms contain the entire agreement between the parties with respect to the subject matter hereof and supersedes all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, with respect to such subject matter.
        </p>
        <p className="mb-4">
          If any term or provision of this agreement is invalid, illegal, or unenforceable in any jurisdiction, such invalidity, illegality, or unenforceability shall not affect any other term or provision of this agreement or invalidate or render unenforceable such term or provision in any other jurisdiction.
        </p>
        <p>
          This agreement is binding on and shall inure to the benefit of the parties hereto and their respective successors and assigns.
        </p>
      </div>
    </Modal>
  );
}

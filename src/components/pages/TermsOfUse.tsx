
const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Terms of Use</h1>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">1. Acceptance of Terms</h2>
          <p className="text-gray-600">
            By accessing and using our food delivery service, you agree to be bound by these Terms of Use and all applicable laws and regulations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">2. Use of Service</h2>
          <div className="space-y-3 text-gray-600">
            <p>• You must be at least 18 years old to use our service</p>
            <p>• You agree to provide accurate and complete information</p>
            <p>• You are responsible for maintaining account security</p>
            <p>• You agree not to abuse or misuse our service</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">3. Ordering and Payment</h2>
          <div className="space-y-3 text-gray-600">
            <p>• All orders are subject to availability</p>
            <p>• Prices are subject to change without notice</p>
            <p>• You agree to pay all charges at the prices listed</p>
            <p>• We reserve the right to refuse service</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">4. Delivery Policy</h2>
          <div className="space-y-3 text-gray-600">
            <p>• Delivery times are estimates only</p>
            <p>• You must provide accurate delivery information</p>
            <p>• We are not responsible for orders delivered to incorrect addresses</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">5. Cancellation Policy</h2>
          <p className="text-gray-600">
            Orders can be cancelled within 5 minutes of placing them. After this window, cancellation may not be possible as food preparation may have begun.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">6. Liability</h2>
          <p className="text-gray-600">
            We strive to provide reliable service but cannot guarantee uninterrupted access. We are not liable for any damages arising from service interruptions or delays.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">7. Modifications</h2>
          <p className="text-gray-600">
            We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of new terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">8. Contact</h2>
          <p className="text-gray-600">
            For questions about these terms, please contact legal@yourfooddelivery.com
          </p>
        </section>

        <footer className="mt-8 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Last updated: January 2025
          </p>
        </footer>
      </div>
    </div>
  );
};

export default TermsOfUse;
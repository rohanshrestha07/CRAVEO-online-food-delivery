import { Card, CardContent } from '@mui/material';
// import { Card, CardContent } from '@/components/ui/card';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Card className="bg-white shadow-lg">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-8 text-gray-900">Privacy Policy</h1>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Information We Collect</h2>
              <p className="text-gray-600 mb-4">We collect information that you provide directly to us, including:</p>
              <div className="space-y-2 text-gray-600">
                <p>• Name and contact details</p>
                <p>• Delivery address</p>
                <p>• Payment information</p>
                <p>• Order history and preferences</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">How We Use Your Information</h2>
              <div className="space-y-3 text-gray-600">
                <p>• Process and deliver your orders</p>
                <p>• Send order updates and notifications</p>
                <p>• Improve our services and user experience</p>
                <p>• Protect against fraudulent transactions</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Information Sharing</h2>
              <p className="text-gray-600 mb-4">
                We share your information with:</p>
              <div className="space-y-3 text-gray-600">
                <p>• Restaurant partners to fulfill your orders</p>
                <p>• Delivery partners for order delivery</p>
                <p>• Payment processors for secure transactions</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Data Security</h2>
              <p className="text-gray-600">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Your Rights</h2>
              <div className="space-y-3 text-gray-600">
                <p>• Access your personal information</p>
                <p>• Request corrections to your data</p>
                <p>• Delete your account</p>
                <p>• Opt-out of marketing communications</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Contact Us</h2>
              <p className="text-gray-600">
                For questions about this privacy policy, please contact us at privacy@yourfooddelivery.com
              </p>
            </section>

            <footer className="mt-8 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Last updated: January 2025
              </p>
            </footer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
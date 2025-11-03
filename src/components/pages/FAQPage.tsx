import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
  
    const faqs = [
      {
        question: 'What are your operating hours?',
        answer: 'We operate 24/7 for online orders. Our customer service team is available Monday to Sunday from 8 AM to 11 PM.'
      },
      {
        question: 'Do you offer delivery services?',
        answer: 'Yes, we offer delivery within a 5-mile radius. Orders can be placed through our website or mobile app. Delivery times typically range from 30-45 minutes depending on your location and order volume.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, MasterCard, American Express), digital wallets (Apple Pay, Google Pay), and cash on delivery. Corporate accounts can request invoice billing.'
      },
      {
        question: 'Is there a minimum order value for delivery?',
        answer: 'Yes, the minimum order value for delivery is $15. Orders below this amount can be placed for pickup at the restaurant.'
      },
      {
        question: 'How can I track my order?',
        answer: "Once your order is confirmed, you'll receive a tracking link via SMS and email. You can use this link to monitor your order status in real-time and track your delivery driver's location."
      },
      {
        question: 'What if I need to cancel or modify my order?',
        answer: 'Orders can be modified or cancelled within 5 minutes of placing them. After this window, please contact our customer service team for assistance. Note that orders already in preparation cannot be cancelled.'
      },
      {
        question: 'Do you cater to dietary restrictions?',
        answer: 'Yes, our menu includes vegetarian, vegan, gluten-free, and halal options. You can use filters on our app to find meals that match your dietary requirements. Please note any allergies in the order comments.'
      },
      {
        question: 'What is your refund policy?',
        answer: "If you're unsatisfied with your order, please contact us within 30 minutes of delivery. We'll either replace your order or provide a full refund based on your preference. Photo evidence may be required."
      },
      {
        question: 'Do you offer group ordering or catering services?',
        answer: 'Yes, we offer both group ordering and catering services. For group orders, use our split-bill feature. For catering, please place orders 24 hours in advance through our catering menu section.'
      },
      {
        question: 'How does your loyalty program work?',
        answer: 'Earn 1 point for every dollar spent. 100 points = $10 reward. Gold members (spend over $500 in 3 months) earn double points and get free delivery. Points expire after 12 months of inactivity.'
      }
  ];
  
    return (
      <>
      <div className="bg-[url('/wrapper_bg.jpg')] bg-fixed">
        <div className="bg-gray-100 bg-opacity-90 py-4">
          <div className="max-w-7xl mx-auto px-4 py-12 rounded-lg bg-white ">
            <h1 className="text-4xl font-bold mb-8">Frequently Asked <span className="text-[#ff0000]">Questions</span></h1>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border rounded-lg">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="font-semibold">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-6 py-4 bg-gray-50 border-t">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </>
    );
  };
  
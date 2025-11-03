import React, { useState } from 'react';
import { useCart } from './CartProvider';
import { Card, CardHeader, CardContent } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface DeliveryInfo {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    zipCode: string;
}

const Checkout: React.FC = () => {
    const { cartItems, getCartTotal } = useCart();
    const [activeStep, setActiveStep] = useState(1);
    const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo>({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: '',
    });
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleDeliveryInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDeliveryInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const subtotal = getCartTotal();
    const deliveryFee = 100;
    const tax = subtotal * 0.13; // 13% tax
    const total = subtotal + deliveryFee + tax;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    
        if (isSubmitting) return; // Prevent double submissions
        setIsSubmitting(true);
    
        // Only trigger success when at Step 3
        if (activeStep === 3) {
            // Simulate order submission
            console.log('Order submitted:', {
                items: cartItems,
                deliveryInfo,
                paymentMethod,
                totalAmount: total,
            });
    
            // Show success message only at Step 3 when the order is placed
            toast.success('Order Successful! All required bills are sent to your email.');
        }
    
        // Reset submitting state after some time
        setTimeout(() => setIsSubmitting(false), 3000);
    };
    
    

    const handleStepChange = (nextStep: number) => {
        if (nextStep === 2 && activeStep === 1) {
            if (Object.values(deliveryInfo).some((field) => !field)) {
                toast.error('Please fill in all delivery information fields before proceeding.');
                return;
            }
        }
        setActiveStep(nextStep);
    };
    

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Checkout Form */}
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <p>Checkout</p>
                        </CardHeader>
                        <CardContent>
                            <div className="mb-8">
                                <div className="flex justify-between mb-4">
                                    {[1, 2, 3].map((step) => (
                                        <div
                                            key={step}
                                            className={`flex items-center ${step < activeStep
                                                    ? 'text-green-600'
                                                    : step === activeStep
                                                    ? 'text-blue-600'
                                                    : 'text-gray-400'
                                                }`}
                                        >
                                            <div
                                                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                                                    step < activeStep
                                                        ? 'border-green-600 bg-green-600 text-white'
                                                        : step === activeStep
                                                        ? 'border-blue-600'
                                                        : 'border-gray-400'
                                                }`}
                                            >
                                                {step}
                                            </div>
                                            <span className="ml-2">
                                                {step === 1
                                                    ? 'Delivery'
                                                    : step === 2
                                                    ? 'Payment'
                                                    : 'Review'}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <form onSubmit={handleSubmit}>
                                {activeStep === 1 && (
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold mb-4">Delivery Information</h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            {[{ label: 'Full Name', name: 'fullName', type: 'text' },
                                              { label: 'Email', name: 'email', type: 'email' },
                                              { label: 'Phone', name: 'phone', type: 'tel' },
                                              { label: 'Address', name: 'address', type: 'text' },
                                              { label: 'City', name: 'city', type: 'text' },
                                              { label: 'ZIP Code', name: 'zipCode', type: 'text' }]
                                              .map((field) => (
                                                <div key={field.name}>
                                                    <label className="block text-sm font-medium mb-1">
                                                        {field.label}
                                                    </label>
                                                    <input
                                                        type={field.type}
                                                        name={field.name}
                                                        value={deliveryInfo[field.name as keyof DeliveryInfo]}
                                                        onChange={handleDeliveryInfoChange}
                                                        className="w-full p-2 border rounded"
                                                        required
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeStep === 2 && (
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
                                        {['Credit/Debit Card', 'Cash On Delivery', 'Digital Wallet'].map((method) => (
                                            <div key={method} className="flex items-center gap-2">
                                                <input
                                                    type="radio"
                                                    id={method}
                                                    name="paymentMethod"
                                                    value={method}
                                                    checked={paymentMethod === method}
                                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                                />
                                                <label htmlFor={method}>{method.toString()}</label>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {activeStep === 3 && (
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold mb-4">Order Review</h3>
                                        <div>
                                            <h4 className="font-medium">Delivery Details</h4>
                                            <p>{deliveryInfo.fullName}</p>
                                            <p>{deliveryInfo.address}</p>
                                            <p>
                                                {deliveryInfo.city}, {deliveryInfo.zipCode}
                                            </p>
                                            <p>{deliveryInfo.phone}</p>
                                            <p>{deliveryInfo.email}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium">Payment Method</h4>
                                            <p className="capitalize">{paymentMethod}</p>
                                        </div>
                                    </div>
                                )}

                                <div className="mt-8 flex justify-between">
                                    {activeStep > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => handleStepChange(activeStep - 1)}
                                            className="px-6 py-2 border rounded-3xl hover:bg-gray-100"
                                        >
                                            Back
                                        </button>
                                    )}
                                    {activeStep < 3 ? (
                                        <button
                                            type="button"
                                            onClick={() => handleStepChange(activeStep + 1)}
                                            className="px-6 py-2 bg-red-600 text-white rounded-3xl hover:bg-red-700"
                                        >
                                            Continue
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            className="px-6 py-2 bg-red-600 text-white rounded-3xl hover:bg-red-700"
                                        >
                                            Place Order
                                        </button>
                                    )}
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <Card>
                        <CardHeader>
                            <p>Summary</p>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {cartItems.map((item) => (
                                    <div
                                        key={item.title}
                                        className="flex justify-between items-center"
                                    >
                                        <div className="flex items-center gap-2">
                                            <img
                                                src={item.img}
                                                alt={item.title}
                                                className="w-12 h-12 object-cover rounded"
                                            />
                                            <div>
                                                <p className="font-medium">{item.title}</p>
                                                <p className="text-sm text-gray-600">
                                                    Qty: {item.quantity}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="font-medium">
                                            Rs.{(
                                                parseFloat(item.price.replace('Rs', '')) *
                                                item.quantity
                                            ).toFixed(2)}
                                        </p>
                                    </div>
                                ))}

                                <div className="border-t pt-4 space-y-2">
                                    <div className="flex justify-between">
                                        <span>Subtotal</span>
                                        <span>Rs.{subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Delivery Fee</span>
                                        <span>Rs.{deliveryFee.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Tax</span>
                                        <span>Rs.{tax.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between font-bold">
                                        <span>Total</span>
                                        <span>Rs.{total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Checkout;

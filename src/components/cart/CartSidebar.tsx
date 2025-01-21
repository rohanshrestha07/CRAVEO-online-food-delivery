import React from 'react';
import { useCart } from '../cart/CartProvider';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom';

export const CartSidebar: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

    const handleQuantityChange = (itemTitle: string, currentQuantity: number, change: number) => {
        const newQuantity = currentQuantity + change;
        if (newQuantity < 1) {
            removeFromCart(itemTitle);
        } else {
            updateQuantity(itemTitle, newQuantity);
        }
    };

    return (
        <div 
            className={`fixed right-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <div className="p-4 h-full flex flex-col">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Shopping Cart</h2>
                    <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
                        <CloseIcon />
                    </button>
                </div>

                {cartItems.length === 0 ? (
                    <div className="flex-1 flex items-center justify-center">
                        <p className="text-gray-500">Your cart is empty</p>
                    </div>
                ) : (
                    <>
                        <div className="flex-1 overflow-y-auto">
                            {cartItems.map((item) => (
                                <div key={item.title} className="border-b py-4">
                                    <div className="flex gap-4">
                                        <img 
                                            src={item.img} 
                                            alt={item.title} 
                                            className="w-20 h-20 object-cover rounded"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-semibold">{item.title}</h3>
                                            <p className="text-red-600">{item.price}</p>
                                            <div className="flex items-center gap-2 mt-2">
                                                <button 
                                                    onClick={() => handleQuantityChange(item.title, item.quantity, -1)}
                                                    className="p-1 hover:bg-gray-100 rounded"
                                                >
                                                    <RemoveIcon fontSize="small" />
                                                </button>
                                                <span>{item.quantity}</span>
                                                <button 
                                                    onClick={() => handleQuantityChange(item.title, item.quantity, 1)}
                                                    className="p-1 hover:bg-gray-100 rounded"
                                                >
                                                    <AddIcon fontSize="small" />
                                                </button>
                                                <button 
                                                    onClick={() => removeFromCart(item.title)}
                                                    className="ml-auto p-1 hover:bg-gray-100 rounded"
                                                >
                                                    <DeleteOutlineIcon />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 border-t pt-4">
                            <div className="flex justify-between mb-4">
                                <span className="font-semibold">Total:</span>
                                <span className="font-bold">Rs.{getCartTotal().toFixed(2)}</span>
                            </div>
                            <Link to={"/checkout"}>
                                <button className="w-full bg-red-600 text-white py-2 rounded-3xl hover:bg-red-700 transition-colors">
                                    Checkout
                                </button>
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
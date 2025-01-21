import React, { createContext, useState, useContext, ReactNode } from 'react';

// Interface for individual cart item
interface CartItem {
    title: string;
    price: string;
    img: string;
    quantity: number;
    description: string;
    // Add other properties you need from menuData
}

// Interface for context value
interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: Omit<CartItem, 'quantity'>) => void;
    removeFromCart: (itemTitle: string) => void;
    updateQuantity: (itemTitle: string, newQuantity: number) => void;
    getCartCount: () => number;
    getCartTotal: () => number;
}

// Props interface for CartProvider
interface CartProviderProps {
    children: ReactNode;
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// CartProvider component
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (item: Omit<CartItem, 'quantity'>) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(i => i.title === item.title);
            
            if (existingItem) {
                return prevItems.map(i => 
                    i.title === item.title 
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                );
            }
            return [...prevItems, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (itemTitle: string) => {
        setCartItems(prevItems => 
            prevItems.filter(item => item.title !== itemTitle)
        );
    };

    const updateQuantity = (itemTitle: string, newQuantity: number) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.title === itemTitle
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    const getCartCount = (): number => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const getCartTotal = (): number => {
        return cartItems.reduce((total, item) => {
            const price = parseFloat(item.price.replace('$', ''));
            return total + (price * item.quantity);
        }, 0);
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            getCartCount,
            getCartTotal
        }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use cart context
export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const FloatingTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Dheeraj",
      rating: 5,
      text: "Best food delivery service ever! Always on time and the food is fresh.",
      image: "/public/Dheeraj2.jpg"
    },
    {
      id: 2,
      name: "Thor",
      rating: 5,
      text: "Great variety of restaurants and excellent customer service!",
      image: "/public/Thor.jpg"
    },
    {
      id: 3,
      name: "Ronaldo",
      rating: 4,
      text: "Love the easy booking system and quick delivery times.",
      image: "/public/Ronaldo.jpg"
    },
    {
      id: 4,
      name: "Alex",
      rating: 5,
      text: "The table booking feature is a game-changer. So convenient!",
      image: "/public/Dheeraj1.jpg"
    },
    {
      id: 5,
      name: "Love Birds",
      rating: 5,
      text: "Amazing selection of restaurants and super fast delivery!",
      image: "/public/Gitagobinda.jpg"
    },
    {
      id: 6,
      name: "Hacker",
      rating: 4,
      text: "The app is so easy to use. Great experience every time!",
      image: "/public/Hacker.png"
    }
  ];

  const [activeIndices, setActiveIndices] = useState([0, 1, 2]);
  const [visibleStates, setVisibleStates] = useState([true, true, true]);
  const [positions, setPositions] = useState([]);
  const timeoutRef = useRef(null);
  const isAnimatingRef = useRef(false);

  const generatePositions = () => {
    const newPositions = [];
    const cardWidth = 280;
    const cardHeight = 250;
    const padding = 20;
    const screenPadding = 100;

    for (let i = 0; i < 3; i++) {
      let position;
      let overlap;
      let attempts = 0;
      const maxAttempts = 50;

      do {
        overlap = false;
        attempts++;

        const minX = -(window.innerWidth / 2) + screenPadding;
        const maxX = (window.innerWidth / 2) - cardWidth - screenPadding;
        const minY = 50;
        const maxY = 250;

        position = {
          x: minX + Math.random() * (maxX - minX),
          y: minY + Math.random() * (maxY - minY),
          delay: i * 0.3
        };

        for (const existingPos of newPositions) {
          const xOverlap = Math.abs(position.x - existingPos.x) < (cardWidth + padding);
          const yOverlap = Math.abs(position.y - existingPos.y) < (cardHeight + padding);
          if (xOverlap && yOverlap) {
            overlap = true;
            break;
          }
        }
      } while (overlap && attempts < maxAttempts);

      newPositions.push(position);
    }
    return newPositions;
  };

  const startNewCycle = async () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    // Clear existing timeouts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Remove all testimonials simultaneously
    setVisibleStates([false, false, false]);

    // Wait for exit animations to complete
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Update indices and show new testimonials
    setActiveIndices(prev => prev.map(index => (index + 3) % testimonials.length));
    setPositions(generatePositions());
    
    // Small delay before showing new testimonials
    setTimeout(() => {
      setVisibleStates([true, true, true]);
      isAnimatingRef.current = false;
    }, 100);
  };

  useEffect(() => {
    setPositions(generatePositions());

    const interval = setInterval(() => {
      startNewCycle();
    }, 8000);

    return () => {
      clearInterval(interval);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const TestimonialCard = ({ testimonial, position, isVisible, index }) => (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key={`${testimonial.id}-${index}`}
          initial={{ 
            y: 400,
            x: position.x,
            opacity: 0,
            scale: 0.5
          }}
          animate={{ 
            y: position.y,
            x: position.x,
            opacity: 1,
            scale: 1
          }}
          exit={{ 
            y: -100,
            opacity: 0,
            scale: 1.5,
          }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 12,
            duration: 1,
            delay: position.delay
          }}
          className="absolute -right-24 -top-24 transform -translate-x-1/2"
        >
          <div className="relative bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg w-[280px] text-center hover:scale-105 transition-transform">
            <div className='flex items-center space-x-2'>
              <div className='rounded-full'>
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-40 h-16 object-cover rounded-full mx-auto mb-0"
                />
              </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: position.delay + 0.3 }}
                  className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-1"
                >
                  <Star className="w-4 h-4 text-white" />
                </motion.div>
              {/* review and star */}
              <div>
                <p className="text-gray-700 mb-1 italic items-center flex text-sm">
                  "{testimonial.text}"
                </p>

                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <div className="flex justify-center gap-1 mb-0">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="absolute top-0 bg-transparent h-full w-full ">
      {activeIndices.map((testimonialIndex, index) => (
        <TestimonialCard
          key={`${testimonials[testimonialIndex].id}-${index}`}
          testimonial={testimonials[testimonialIndex]}
          position={positions[index] || { x: 0, y: 0, delay: 0 }}
          isVisible={visibleStates[index]}
          index={index}
        />
      ))}
    </div>
  );
};

export default FloatingTestimonials;
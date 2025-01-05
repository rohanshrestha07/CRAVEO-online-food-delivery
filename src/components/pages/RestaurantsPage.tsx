import React, { useState } from 'react';
import { Search, Star, Clock, MapPin, Phone, Filter, ChevronDown, Calendar } from 'lucide-react';

const RestaurantsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [selectedRating, setSelectedRating] = useState(null);

  const restaurants = [
    {
      id: 1,
      name: "Italian Delight",
      image: "/public/Restaurants/1.jpeg",
      cuisine: "Italian",
      rating: 4.8,
      reviewCount: 1250,
      location: "123 Main St, Downtown",
      deliveryTime: "25-35",
      minimumOrder: 15,
      phone: "+1 (555) 123-4567",
      openingHours: "11:00 AM - 10:00 PM",
      featured: true,
      tags: ["Pizza", "Pasta", "Wine"],
      popular: ["Margherita Pizza", "Fettuccine Alfredo"]
    },
    {
      id: 2,
      name: "Sushi Master",
      image: "/public/Restaurants/2.jpeg",
      cuisine: "Japanese",
      rating: 4.9,
      reviewCount: 890,
      location: "456 Oak Ave, Westside",
      deliveryTime: "30-45",
      minimumOrder: 20,
      phone: "+1 (555) 234-5678",
      openingHours: "12:00 PM - 11:00 PM",
      featured: true,
      tags: ["Sushi", "Ramen", "Sake"],
      popular: ["Dragon Roll", "Miso Ramen"]
    },
    {
      id: 3,
      name: "Spice Route",
      image: "/public/Restaurants/3.jpg",
      cuisine: "Indian",
      rating: 4.7,
      reviewCount: 750,
      location: "789 Elm St, Eastside",
      deliveryTime: "35-50",
      minimumOrder: 25,
      phone: "+1 (555) 345-6789",
      openingHours: "11:30 AM - 10:30 PM",
      featured: false,
      tags: ["Curry", "Tandoor", "Biryani"],
      popular: ["Butter Chicken", "Vegetable Biryani"]
    },
    {
      id: 4,
      name: "Burger Bros",
      image: "/public/Restaurants/4.jpg",
      cuisine: "American",
      rating: 4.6,
      reviewCount: 1100,
      location: "321 Pine St, Northside",
      deliveryTime: "20-30",
      minimumOrder: 12,
      phone: "+1 (555) 456-7890",
      openingHours: "10:00 AM - 12:00 AM",
      featured: true,
      tags: ["Burgers", "Fries", "Shakes"],
      popular: ["Classic Cheeseburger", "BBQ Bacon Burger"]
    },
    {
      id: 5,
      name: "Wok Master",
      image: "/public/Restaurants/5.jpg",
      cuisine: "Chinese",
      rating: 4.5,
      reviewCount: 680,
      location: "654 Maple Ave, Southside",
      deliveryTime: "25-40",
      minimumOrder: 18,
      phone: "+1 (555) 567-8901",
      openingHours: "11:00 AM - 11:00 PM",
      featured: false,
      tags: ["Noodles", "Dim Sum", "Fried Rice"],
      popular: ["Kung Pao Chicken", "Special Fried Rice"]
    }
  ];

  const cuisineTypes = ["All", "Italian", "Japanese", "Indian", "American", "Chinese"];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  // booking
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    guests: '2',
    restaurantId: null,
    restaurantName: ''
  });
  const [showBooking, setShowBooking] = useState(false);

  const availableTimes = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"];

  const handleBooking = (e) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', bookingData);
    setShowBooking(false);
    alert('Booking confirmed! You will receive a confirmation email shortly.');
  };

  const BookingModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h3 className="text-xl font-bold">Book a Table</h3>
        <p className="text-gray-600 mb-4">at {bookingData.restaurantName}</p>
        <form onSubmit={handleBooking} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Date</label>
            <input
              type="date"
              min={new Date().toISOString().split('T')[0]}
              className="w-full p-2 border rounded"
              value={bookingData.date}
              onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Time</label>
            <select
              className="w-full p-2 border rounded"
              value={bookingData.time}
              onChange={(e) => setBookingData({...bookingData, time: e.target.value})}
              required
            >
              <option value="">Select time</option>
              {availableTimes.map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Number of Guests</label>
            <select
              className="w-full p-2 border rounded"
              value={bookingData.guests}
              onChange={(e) => setBookingData({...bookingData, guests: e.target.value})}
              required
            >
              {[1,2,3,4,5,6,7,8].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'guest' : 'guests'}</option>
              ))}
            </select>
          </div>
          <div className="flex gap-2 mt-6">
            <button
              type="button"
              onClick={() => setShowBooking(false)}
              className="flex-1 px-4 py-2 border rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        restaurant.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCuisine = !selectedCuisine || selectedCuisine === 'All' || restaurant.cuisine === selectedCuisine;
    const matchesRating = !selectedRating || restaurant.rating >= selectedRating;
    
    return matchesSearch && matchesCuisine && matchesRating;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Partner <span className='text-[#ff0000]'>Restaurants</span></h1>
      
      {/* Search and Filter Section */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex-1 min-w-[300px]">
          {/* search box */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search restaurants or dishes..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <select
          className="px-4 py-2 border rounded-lg"
          value={selectedCuisine}
          onChange={(e) => setSelectedCuisine(e.target.value)}
        >
          <option value="">All Cuisines</option>
          {cuisineTypes.map(cuisine => (
            <option key={cuisine} value={cuisine}>{cuisine}</option>
          ))}
        </select>
        
        <select
          className="px-4 py-2 border rounded-lg"
          value={selectedRating || ''}
          onChange={(e) => setSelectedRating(e.target.value ? Number(e.target.value) : null)}
        >
          <option value="">All Ratings</option>
          <option value="4.5">4.5+</option>
          <option value="4">4.0+</option>
          <option value="3.5">3.5+</option>
        </select>
      </div>

      {/* Restaurants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRestaurants.map(restaurant => (
          <div key={restaurant.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
            <div className="relative">
              <img 
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-48 object-cover"
              />
              {restaurant.featured && (
                <span className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                  Featured
                </span>
              )}
            </div>
            
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{restaurant.name}</h2>
              
              <div className="flex items-center gap-2 mb-3">
                {renderStars(Math.floor(restaurant.rating))}
                <span className="text-sm text-gray-600">
                  {restaurant.rating} ({restaurant.reviewCount} reviews)
                </span>
              </div>

              <div className="space-y-2 text-gray-600 text-sm mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {restaurant.location}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {restaurant.deliveryTime} mins
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  {restaurant.phone}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {restaurant.tags.map(tag => (
                  <span key={tag} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold mb-2">Popular Items:</h3>
                <ul className="text-sm text-gray-600">
                  {restaurant.popular.map(item => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              {/* New Booking Button */}
              <button
                onClick={() => {
                  setBookingData({...bookingData, restaurantId: restaurant.id,restaurantName: restaurant.name});
                  setShowBooking(true);
                }}
                className="w-full mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book a Table
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Booking Modal */}
      {showBooking && <BookingModal />}
    </div>
  );
};

export default RestaurantsPage;
import { useState } from 'react';
import { Star, ThumbsUp } from 'lucide-react';
import CtaMenu1 from '../CTA/CtaMenu1';

const ReviewsPage = () => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const reviews = [
    {
      id: 1,
      userName: 'Mike Johnson',
      rating: 5,
      date: '2024-01-03',
      content: 'Best delivery service in town! Food arrived hot and on time.',
      helpful: 24,
      orderDetails: 'Spicy Burger Combo',
      verified: true
    },
    {
      id: 2,
      userName: 'Sarah Lee',
      rating: 4,
      date: '2024-01-02',
      content: 'Great food quality, but delivery took a bit longer than expected.',
      helpful: 15,
      orderDetails: 'Vegetarian Pizza',
      verified: true
    },
    {
      id: 3,
      userName: 'David Chen',
      rating: 5,
      date: '2024-01-01',
      content: 'Amazing selection of dishes and the app is super easy to use.',
      helpful: 32,
      orderDetails: 'Family Feast Pack',
      verified: true
    },
    {
      id: 4,
      userName: 'Emma Wilson',
      rating: 3,
      date: '2023-12-31',
      content: 'Food was good but packaging could be improved.',
      helpful: 8,
      orderDetails: 'Pasta Alfredo',
      verified: true
    },
    {
      id: 5,
      userName: 'Alex Martinez',
      rating: 5,
      date: '2023-12-30',
      content: 'The loyalty program is fantastic! Earned free delivery already.',
      helpful: 19,
      orderDetails: 'Mexican Fiesta Platter',
      verified: true
    }
  ];

  const stats = {
    average: 4.4,
    total: 2459,
    breakdown: {
      5: 1500,
      4: 600,
      3: 200,
      2: 100,
      1: 59
    }
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  const filteredReviews = selectedRating
    ? reviews.filter(review => review.rating === selectedRating)
    : reviews;

  return (
    <>
      <div className="bg-[url('/wrapper_bg.jpg')] bg-fixed">
        <div className="bg-gray-100 bg-opacity-90 py-4">
          <div className="max-w-7xl mx-auto px-4 py-12 bg-white rounded-lg">
            <h1 className="text-4xl font-bold mb-8">Customer <span className='text-[#ff0000]'>Reviews</span></h1>
            
            {/* Stats Section */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="flex items-center gap-8">
                <div>
                  <div className="text-5xl font-bold text-gray-900">{stats.average}</div>
                  <div className="flex items-center gap-2 my-2">
                    {renderStars(Math.round(stats.average))}
                  </div>
                  <div className="text-gray-600">{stats.total} reviews</div>
                </div>
                
                <div className="flex-1">
                  {Object.entries(stats.breakdown)
                    .reverse()
                    .map(([rating, count]) => (
                      <button
                        key={rating}
                        onClick={() => setSelectedRating(selectedRating === Number(rating) ? null : Number(rating))}
                        className="flex items-center gap-2 w-full mb-2"
                      >
                        <span className="w-12 text-sm">{rating} stars</span>
                        <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-yellow-400"
                            style={{
                              width: `${(count / stats.total) * 100}%`
                            }}
                          />
                        </div>
                        <span className="w-12 text-sm text-right">{count}</span>
                      </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Reviews List */}
            <div className="space-y-6">
              {filteredReviews.map(review => (
                <div key={review.id} className="border rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        {renderStars(review.rating)}
                      </div>
                      <h3 className="font-semibold">{review.userName}</h3>
                      {review.verified && (
                        <span className="text-sm text-green-600">Verified Purchase</span>
                      )}
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(review.date).toLocaleDateString()}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{review.content}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Ordered: {review.orderDetails}</span>
                    <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                      <ThumbsUp className="w-4 h-4" />
                      Helpful ({review.helpful})
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA section */}
            <CtaMenu1/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewsPage;
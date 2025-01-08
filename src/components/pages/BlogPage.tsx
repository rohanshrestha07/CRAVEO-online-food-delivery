import CtaMenu1 from "../CTA/CtaMenu1";


const BlogPage = () => {

const blogs = [
  {
    id: 1,
    title: 'The Art of Food Photography: Tips for Instagram-Worthy Dishes',
    author: 'Sarah Chen',
    date: '2024-01-03',
    image: '/public/Blogs/Photography.jpg',
    excerpt: 'Master the art of food photography with professional lighting techniques, composition tips, and styling secrets that will make your dishes stand out on social media.',
    category: 'Photography'
  },
  {
    id: 2,
    title: 'Farm to Table: Understanding Sustainable Food Practices',
    author: 'Michael Greene',
    date: '2024-01-02',
    image: '/public/Blogs/Sustainability.jpg',
    excerpt: 'Explore how sustainable farming practices are shaping the future of food, from local sourcing to reducing carbon footprint in food production.',
    category: 'Sustainability'
  },
  {
    id: 3,
    title: 'Global Street Food: A Culinary Adventure',
    author: 'Lisa Rodriguez',
    date: '2024-01-01',
    image: '/public/Blogs/Travel.jpg',
    excerpt: "Journey through the world's most exciting street food scenes, from Bangkok's night markets to Mexico City's taquerias.",
    category: 'Travel'
  },
  {
    id: 4,
    title: 'The Science Behind Fermentation',
    author: 'Dr. James Kim',
    date: '2023-12-31',
    image: '/public/Blogs/Science.jpg',
    excerpt: 'Discover the fascinating world of fermented foods, their health benefits, and how to start fermenting at home.',
    category: 'Science'
  },
  {
    id: 5,
    title: 'Essential Kitchen Tools for Every Home Chef',
    author: 'Emma Thompson',
    date: '2023-12-30',
    image: '/public/Blogs/Equipment.jpg',
    excerpt: 'From knives to thermometers, learn about the must-have tools that will elevate your cooking game to professional levels.',
    category: 'Equipment'
  },
  {
    id: 6,
    title: 'Seasonal Cooking: Winter Comfort Foods',
    author: 'Thomas Wilson',
    date: '2023-12-29',
    image: '/public/Blogs/Seasonal.jpg',
    excerpt: 'Embrace the cold weather with hearty, warming recipes that make the most of winter produce and spices.',
    category: 'Seasonal'
  },
  {
    id: 7,
    title: 'The Rise of Plant-Based Cuisine',
    author: 'Maya Patel',
    date: '2023-12-28',
    image: '/public/Blogs/Nutrition.jpg',
    excerpt: 'Explore innovative plant-based cooking techniques and recipes that are changing the way we think about vegetarian and vegan food.',
    category: 'Nutrition'
  },
  {
    id: 8,
    title: "Wine Pairing 101: A Beginner's Guide",
    author: 'Pierre Dubois',
    date: '2023-12-27',
    image: '/public/Blogs/Beverages.jpg',
    excerpt: 'Learn the basic principles of wine pairing and how to enhance your dining experience with the perfect wine selection.',
    category: 'Beverages'
  },
  {
    id: 9,
    title: 'Traditional Cooking Methods Around the World',
    author: 'Anna Kowalski',
    date: '2023-12-26',
    image: '/public/Blogs/Culture.jpg',
    excerpt: "Discover ancient cooking techniques from different cultures and how they're being preserved in modern kitchens.",
    category: 'Culture'
  },
  {
    id: 10,
    title: 'Food Waste Revolution: Creative Ways to Use Leftovers',
    author: 'David Martinez',
    date: '2023-12-25',
    image: '/public/Blogs/10.jpeg',
    excerpt: 'Transform your kitchen habits with innovative ways to reduce food waste and create delicious meals from leftovers.',
    category: 'Sustainability'
  },
  {
    id: 11,
    title: 'Top 10 Healthy Foods',
    author: 'John Doe',
    date: '2024-01-03',
    image: '/public/Blogs/Health.png',
    excerpt: 'Discover the healthiest foods that can transform your diet...',
    category: 'Health'
  },
  {
    id: 12,
    title: 'Cooking Tips for Beginners',
    author: 'Jane Smith',
    date: '2024-01-02',
    image: '/public/Blogs/Cooking.png',
    excerpt: 'Essential cooking tips every beginner should know...',
    category: 'Cooking'
  },
];

// Rest of the code remains the same

  return (
    <>
    <div className="bg-[url('/public/wrapper_bg.jpg')] bg-fixed">
      <div className="bg-gray-100 bg-opacity-90 py-4">
        <div className="max-w-7xl mx-auto px-4 py-12 bg-white rounded-lg">
          <h1 className="text-4xl font-bold mb-8">Our <span className="text-[#ff0000]">Blogs</span></h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map(blog => (
              <div key={blog.id} className="bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-red-600 font-semibold">{blog.category}</span>
                  <h2 className="text-xl font-bold mt-2 mb-3">{blog.title}</h2>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{blog.author}</span>
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
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

export default BlogPage;
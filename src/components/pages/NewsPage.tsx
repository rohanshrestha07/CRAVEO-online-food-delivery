import CtaMenu1 from "../CTA/CtaMenu1";

export default function NewsPage(){
  const news = [
    {
      id: 1,
      title: 'New Restaurant Opening',
      date: '2024-01-03',
      image: '/public/News/1.jpeg',
      content: 'We are excited to announce the opening of our new branch in downtown, featuring an expanded kitchen and improved delivery capacity to serve you better.',
      category: 'Announcement'
    },
    {
      id: 2,
      title: 'Special Holiday Menu',
      date: '2024-01-02',
      image: '/public/News/2.png',
      content: 'Discover our limited-time holiday specials featuring seasonal ingredients and festive flavors. Available for both delivery and pickup.',
      category: 'Menu Update'
    },
    {
      id: 3,
      title: 'Enhanced Safety Protocols',
      date: '2024-01-01',
      image: '/public/News/3.png',
      content: "We've implemented new safety measures for food preparation and delivery, including contactless delivery options and regular health checks for our staff.",
      category: 'Safety'
    },
    {
      id: 4,
      title: 'Mobile App Launch',
      date: '2023-12-30',
      image: '/public/News/4.jpg',
      content: 'Download our new mobile app for faster ordering, real-time tracking, and exclusive app-only discounts on your favorite meals.',
      category: 'Technology'
    },
    {
      id: 5,
      title: 'Partnership with Local Farms',
      date: '2023-12-29',
      image: '/public/News/5.jpg',
      content: "We're proud to announce our partnership with local farms to bring you fresher ingredients and support our local community.",
      category: 'Partnership'
    },
    {
      id: 6,
      title: 'New Loyalty Program',
      date: '2023-12-28',
      image: '/public/News/6.jpeg',
      content: 'Introducing our revamped loyalty program with better rewards, faster points accumulation, and exclusive member benefits.',
      category: 'Rewards'
    },
    {
      id: 7,
      title: 'Sustainable Packaging Initiative',
      date: '2023-12-27',
      image: '/public/News/7.webp',
      content: "We're transitioning to 100% eco-friendly packaging for all deliveries as part of our commitment to environmental sustainability.",
      category: 'Environment'
    },
    {
      id: 8,
      title: 'Extended Delivery Hours',
      date: '2023-12-26',
      image: '/public/News/8.jpg',
      content: 'Now delivering until 2 AM! Enjoy your favorite meals later with our extended delivery service hours.',
      category: 'Service Update'
    },
    {
      id: 9,
      title: 'New Dietary Options Available',
      date: '2023-12-25',
      image: '/public/News/9.jpeg',
      content: 'Expanding our menu with new vegan, gluten-free, and keto-friendly options to cater to all dietary preferences.',
      category: 'Menu Update'
    },
    {
      id: 10,
      title: 'Community Giving Initiative',
      date: '2023-12-24',
      image: '/public/News/10.png',
      content: "For every order above $30, we're donating a meal to local food banks. Join us in supporting our community.",
      category: 'Community'
    }
];
  
    return (
      <>
        <div className="bg-[url('/public/wrapper_bg.jpg')] bg-fixed">
          <div className="bg-gray-100 bg-opacity-90 py-4">
            <div className="max-w-7xl mx-auto px-4 py-12 bg-white rounded-lg">
              <h1 className="text-4xl font-bold mb-8">Latest <span className="text-[#ff0000]">News</span></h1>
              <div className="space-y-8">
                {news.map(item => (
                  <div key={item.id} className="bg-white flex flex-col md:flex-row gap-6 border rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full md:w-64 h-48 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">{item.category}</span>
                        <span className="text-gray-500 text-sm">{new Date(item.date).toLocaleDateString()}</span>
                      </div>
                      <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
                      <p className="text-gray-600">{item.content}</p>
                      <button className="mt-4 text-red-600 font-semibold hover:text-red-700">Read More →</button>
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
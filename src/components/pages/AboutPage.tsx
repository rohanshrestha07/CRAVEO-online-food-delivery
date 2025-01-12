
import { Check, Award, Users, Utensils } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Rohan from '/public/Rohan.png';
import Thor from '/public/Thor.jpg';
import Strange from '/public/Strange.jpg';
import Ronaldo from '/public/Ronaldo.jpg';

const AboutPage = () => {
  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '50+', label: 'Team Members' },
    { value: '1000+', label: 'Happy Customers' },
    { value: '100+', label: 'Menu Items' },
  ];

  const values = [
    {
      title: 'Quality Food',
      description: 'We use only the freshest ingredients to prepare your meals.',
      icon: Utensils,
    },
    {
      title: 'Expert Team',
      description: 'Our chefs and staff are highly trained professionals.',
      icon: Users,
    },
    {
      title: 'Fast Delivery',
      description: 'We ensure your food arrives hot and fresh at your doorstep.',
      icon: Award,
    },
  ];

  const members = [
    {
      image: Rohan,
      name: "Rohan Shrestha",
      position: "Founder & CEO" 
    },
    {
      image: Thor,
      name: "Thor",
      position: "Manager" 
    },
    {
      image: Strange,
      name: "Dr.Strange",
      position: "CTO" 
    },
    {
      image: Ronaldo,
      name: "Cristiano Ronaldo",
      position: "CFO" 
    },
  ]

  return (
    <div className="min-h-screen bg-red-50">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-red-600 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/public/Restaurant_interior.webp" 
            alt="Restaurant interior" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Story</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Welcome to Foodie, where passion for food meets excellence in service. 
            Since 2013, we've been serving delicious meals to our community.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-red-600">{stat.value}</div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Restaurant Journey</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2013, Foodie started as a small family restaurant with a big dream: 
              to serve the most delicious and authentic food while creating memorable dining experiences.
            </p>
            <p className="text-gray-600 mb-6">
              Today, we've grown into a beloved establishment, known for our exceptional cuisine,
              warm hospitality, and commitment to quality. Our success is built on our passion
              for food and dedication to customer satisfaction.
            </p>
            <ul className="space-y-3">
              {['Fresh ingredients daily', 'Expert chefs', 'Quality service', 'Fast delivery'].map((item, index) => (
                <li key={index} className="flex items-center">
                  <Check className="text-green-500 mr-2" size={20} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img 
              src="/public/Our_kitchen.webp" 
              alt="Our kitchen" 
              className="rounded-lg shadow-xl"
            />
            <img 
              src="/public/Chef_cooking.jpg" 
              alt="Chef cooking" 
              className="absolute -bottom-8 -left-8 rounded-lg shadow-xl border-4 border-white hidden md:block"
            />
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-6">
                  <value.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={member.image} 
                alt={`Team member ${index}`} 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-red-600 py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Order?</h2>
          <p className="text-white/90 mb-8 text-lg">
            Experience our delicious food and exceptional service today.
          </p>
          <NavLink to="/orderFood">
          <button className="bg-white text-red-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Order Now
          </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
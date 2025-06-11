import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Products: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const products = [
    {
      id: 1,
      name: 'Classic Pure',
      price: 24.99,
      originalPrice: 34.99,
      rating: 4.8,
      reviews: 2847,
      image: 'https://images.pexels.com/photos/1292294/pexels-photo-1292294.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['500ml Capacity', 'Stainless Steel', 'Leak Proof', '24h Cold'],
      color: 'from-blue-500 to-blue-600',
      badge: 'Best Seller',
    },
    {
      id: 2,
      name: 'Sport Edition',
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.9,
      reviews: 1923,
      image: 'https://images.pexels.com/photos/1346155/pexels-photo-1346155.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['750ml Capacity', 'Ergonomic Grip', 'Quick Flow', 'Sweat Proof'],
      color: 'from-green-500 to-green-600',
      badge: 'New',
    },
    {
      id: 3,
      name: 'Premium Glass',
      price: 34.99,
      originalPrice: 44.99,
      rating: 4.7,
      reviews: 1456,
      image: 'https://images.pexels.com/photos/1187317/pexels-photo-1187317.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['600ml Capacity', 'Borosilicate Glass', 'Bamboo Lid', 'Chemical Free'],
      color: 'from-purple-500 to-purple-600',
      badge: 'Eco Choice',
    },
  ];

  return (
    <section id="products" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 dark:bg-blue-900 rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-100 dark:bg-cyan-900 rounded-full opacity-20"></div>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Our <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Premium</span> Collection
          </h2>
          <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Discover our range of premium water bottles, each designed with unique features to match your lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 dark:border-gray-700 overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200 + 300}ms` }}
            >
              {/* Badge */}
              <div className={`absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r ${product.color} text-white text-sm font-semibold rounded-full`}>
                {product.badge}
              </div>

              {/* Wishlist Button */}
              <button className="absolute top-4 right-4 z-10 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 group-hover:scale-110">
                <Heart className="h-5 w-5 text-gray-600 dark:text-gray-300 hover:text-red-500 hover:fill-current transition-colors duration-300" />
              </button>

              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{product.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">{product.rating}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {product.reviews.toLocaleString()} reviews
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="text-xs text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 px-2 py-1 rounded-lg">
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      ${product.price}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                      ${product.originalPrice}
                    </span>
                  </div>
                  <button className={`px-4 py-2 bg-gradient-to-r ${product.color} text-white rounded-full font-semibold text-sm hover:shadow-lg transition-all duration-300 flex items-center space-x-2 group-hover:scale-105`}>
                    <ShoppingCart className="h-4 w-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products CTA */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button className="px-8 py-4 border-2 border-blue-500 text-blue-600 dark:text-blue-400 rounded-full font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
import React from 'react';
import { Shield, Thermometer, Droplets, Recycle, Clock, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useParallax } from '../hooks/useParallax';

const Features: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const scrollY = useParallax();

  const features = [
    {
      icon: Shield,
      title: 'BPA-Free Materials',
      description: 'Made from premium, food-grade materials that are completely safe for daily use.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Thermometer,
      title: 'Temperature Control',
      description: 'Advanced insulation keeps drinks cold for 24 hours or hot for 12 hours.',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Droplets,
      title: '100% Leak Proof',
      description: 'Engineered with precision sealing technology for zero-leak guarantee.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Recycle,
      title: 'Eco-Friendly',
      description: 'Sustainable materials and manufacturing process reduce environmental impact.',
      color: 'from-green-600 to-teal-500',
    },
    {
      icon: Clock,
      title: 'Long Lasting',
      description: 'Built to withstand daily use with premium durability and scratch resistance.',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Zap,
      title: 'Quick Clean',
      description: 'Easy-to-clean design with wide mouth opening and dishwasher-safe construction.',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-200 dark:bg-blue-800 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200 dark:bg-cyan-800 rounded-full filter blur-3xl"></div>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Advanced <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Features</span>
          </h2>
          <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Every detail is crafted with precision to deliver the ultimate hydration experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20 dark:border-gray-700/50 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: `${index * 150 + 400}ms`,
                  transform: `translateY(${-scrollY * 0.05 * (index + 1)}px)`,
                }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/50">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Experience Pure Hydration?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have made the switch to sustainable, premium hydration.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
              Shop Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
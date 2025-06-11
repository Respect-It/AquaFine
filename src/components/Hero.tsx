import React from 'react';
import { ArrowDown, Play } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';

const Hero: React.FC = () => {
  const scrollY = useParallax();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-gray-900 dark:via-blue-900 dark:to-cyan-900"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      ></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-300 dark:bg-cyan-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-300 dark:bg-teal-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <div 
            className="space-y-4 animate-fadeInUp"
            style={{
              transform: `translateY(${-scrollY * 0.2}px)`,
            }}
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                Pure Water,
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">
                Pure Life
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the ultimate hydration with our premium, eco-friendly water bottles designed for the modern lifestyle.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp animation-delay-300">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-2">
              Shop Now
              <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
            <button className="group px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold text-lg hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 flex items-center gap-2">
              <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              Watch Story
            </button>
          </div>

          {/* Product Preview */}
          <div 
            className="mt-16 animate-fadeInUp animation-delay-600"
            style={{
              transform: `translateY(${-scrollY * 0.1}px)`,
            }}
          >
            <div className="relative mx-auto w-64 h-80 md:w-80 md:h-96">
              {/* Water Bottle Silhouette */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500 via-cyan-400 to-blue-300 rounded-full rounded-t-3xl opacity-80 hover:opacity-100 transition-opacity duration-500 animate-float"></div>
              <div className="absolute inset-2 bg-gradient-to-t from-white/20 to-white/40 rounded-full rounded-t-3xl backdrop-blur-sm"></div>
              
              {/* Water Effect */}
              <div className="absolute bottom-4 left-4 right-4 h-3/4 bg-gradient-to-t from-blue-400 to-cyan-300 rounded-full rounded-t-3xl opacity-60 animate-wave"></div>
              
              {/* Bottle Cap */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gray-800 dark:bg-gray-200 rounded-full"></div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent rounded-full rounded-t-3xl transform rotate-12 animate-shine"></div>
              
              {/* Floating Particles */}
              <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-white/40 rounded-full animate-float"
                    style={{
                      left: `${20 + i * 12}%`,
                      top: `${30 + (i % 2) * 20}%`,
                      animationDelay: `${i * 500}ms`,
                      animationDuration: `${3 + i * 0.5}s`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-gray-400 dark:text-gray-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
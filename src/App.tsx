import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Features from './components/Features';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import { useTheme } from './hooks/useTheme';

function App() {
  const { isDark, toggleTheme, isLoading: themeLoading } = useTheme();
  const [isAppLoading, setIsAppLoading] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(false);

  // Handle loading completion
  const handleLoadingComplete = () => {
    setIsAppLoading(false);
    setTimeout(() => {
      setIsContentVisible(true);
      const loadingElement = document.getElementById('loading-screen');
      if (loadingElement) {
        loadingElement.remove();
      }
      const rootElement = document.getElementById('root');
      if (rootElement) {
        rootElement.classList.remove('hidden');
      }
    }, 100);
  };

  // Preload critical images
  useEffect(() => {
    const preloadImages = [
      'https://images.pexels.com/photos/1292294/pexels-photo-1292294.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1346155/pexels-photo-1346155.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1187317/pexels-photo-1187317.jpeg?auto=compress&cs=tinysrgb&w=400'
    ];

    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Show loading screen initially
  if (isAppLoading || themeLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className={`${isDark ? 'dark' : ''} transition-colors duration-300`}>
      <div
        className={`bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen overflow-x-hidden transition-all duration-300 ${
          isContentVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Navigation isDark={isDark} toggleTheme={toggleTheme} />
        <main role="main">
          <Hero />

          {/* Spline 3D Model */}
          <div className="w-full h-screen">
            <iframe
              src="https://my.spline.design/worldplanet-MZ1T6guXrqDSwcyyolCIGpek/"
              className="w-full h-full"
              frameBorder="0"
              allow="fullscreen"
              title="Spline 3D World Planet"
            ></iframe>
          </div>

          <About />
          <Products />
          <Features />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;

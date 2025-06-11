import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Loading duration: 2.5 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Wait for fade out animation to complete
      setTimeout(() => {
        setIsVisible(false);
        onLoadingComplete();
      }, 800);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-container">
        {/* Water Droplet Animation */}
        <div className="droplet-animation">
          <div className="water-droplet">
            <div className="droplet-inner"></div>
          </div>
          
          {/* Ripple Effects */}
          <div className="ripple-container">
            <div className="ripple ripple-1"></div>
            <div className="ripple ripple-2"></div>
            <div className="ripple ripple-3"></div>
          </div>
        </div>
        
        {/* Loading Text */}
        <div className="loading-text">
          <span className="loading-label">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
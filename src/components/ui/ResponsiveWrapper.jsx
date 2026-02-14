import { useEffect, useState } from 'react';

const ResponsiveWrapper = ({ children, className = '' }) => {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setScreenSize({
        width,
        height,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
      });
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    
    // Fix iOS viewport height issues
    const handleViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    handleViewportHeight();
    window.addEventListener('resize', handleViewportHeight);
    window.addEventListener('orientationchange', handleViewportHeight);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
      window.removeEventListener('resize', handleViewportHeight);
      window.removeEventListener('orientationchange', handleViewportHeight);
    };
  }, []);

  const wrapperClasses = `
    overflow-x-hidden
    w-full
    max-w-full
    ${className}
  `;

  return (
    <div className={wrapperClasses}>
      {children}
    </div>
  );
};

export default ResponsiveWrapper;

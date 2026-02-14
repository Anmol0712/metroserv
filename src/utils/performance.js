import { useEffect, useState, useRef, useCallback } from 'react';

// Device detection utilities
export const useDeviceDetection = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    isMobile: false,
    isTablet: false,
    isLowEnd: false,
    prefersReducedMotion: false
  });

  useEffect(() => {
    const updateDeviceInfo = () => {
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      
      // Detect low-end devices based on hardware concurrency and memory
      const isLowEnd = 
        navigator.hardwareConcurrency <= 4 || 
        (navigator.deviceMemory && navigator.deviceMemory <= 4) ||
        isMobile;

      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      setDeviceInfo({
        isMobile,
        isTablet,
        isLowEnd,
        prefersReducedMotion
      });
    };

    updateDeviceInfo();
    window.addEventListener('resize', updateDeviceInfo);
    
    return () => window.removeEventListener('resize', updateDeviceInfo);
  }, []);

  return deviceInfo;
};

// Performance-optimized animation configurations
export const getAnimationConfig = (deviceInfo) => {
  const { isMobile, isLowEnd, prefersReducedMotion } = deviceInfo;

  if (prefersReducedMotion) {
    return {
      duration: 0.1,
      ease: "linear",
      disabled: true
    };
  }

  if (isLowEnd) {
    return {
      duration: isMobile ? 0.3 : 0.4,
      ease: "easeOut",
      reducedIntensity: true
    };
  }

  return {
    duration: isMobile ? 0.5 : 0.6,
    ease: "easeOut",
    normal: true
  };
};

// Throttled scroll handler for better performance
export const useThrottledScroll = (callback, delay = 16) => {
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          callback(window.scrollY);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [callback]);
};

// Intersection Observer with performance optimizations
export const useOptimizedIntersection = (callback, options = {}) => {
  const observerRef = useRef();
  const callbackRef = useRef(callback);
  
  // Update callback ref when callback changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const defaultOptions = {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callbackRef.current(entry.target);
        }
      });
    }, defaultOptions);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [options]);

  const observe = useCallback((element) => {
    if (observerRef.current && element) {
      observerRef.current.observe(element);
    }
  }, []);

  const unobserve = useCallback((element) => {
    if (observerRef.current && element) {
      observerRef.current.unobserve(element);
    }
  }, []);

  return { observe, unobserve };
};

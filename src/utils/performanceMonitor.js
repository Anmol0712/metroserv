// Performance monitoring utilities

export const measurePerformance = (name, fn) => {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
  return result;
};

export const logFPS = () => {
  let fps = 0;
  let lastTime = performance.now();
  let frames = 0;

  const countFPS = (currentTime) => {
    frames++;
    if (currentTime >= lastTime + 1000) {
      fps = Math.round((frames * 1000) / (currentTime - lastTime));
      console.log(`FPS: ${fps}`);
      frames = 0;
      lastTime = currentTime;
    }
    requestAnimationFrame(countFPS);
  };

  requestAnimationFrame(countFPS);
};

export const measureBundleSize = async () => {
  if (typeof window !== 'undefined' && window.performance) {
    const navigation = window.performance.getEntriesByType('navigation')[0];
    console.log('Bundle size:', {
      transferSize: navigation.transferSize,
      encodedBodySize: navigation.encodedBodySize,
      decodedBodySize: navigation.decodedBodySize
    });
  }
};

export const checkWebVitals = () => {
  if (typeof window !== 'undefined' && 'web-vitals' in window) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(console.log);
      getFID(console.log);
      getFCP(console.log);
      getLCP(console.log);
      getTTFB(console.log);
    });
  }
};

// Performance budget checker
export const checkPerformanceBudget = () => {
  const budgets = {
    bundleSize: 250 * 1024, // 250KB
    imageCount: 50,
    animationCount: 20,
    domNodes: 1500
  };

  const checks = {
    bundleSize: document.querySelector('html').outerHTML.length < budgets.bundleSize,
    imageCount: document.querySelectorAll('img').length < budgets.imageCount,
    animationCount: document.querySelectorAll('[class*="animate"], [class*="motion"]').length < budgets.animationCount,
    domNodes: document.querySelectorAll('*').length < budgets.domNodes
  };

  console.table(checks);
  return checks;
};

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Enhanced performance monitoring
export const enhancedReportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Report Core Web Vitals
    reportWebVitals(onPerfEntry);
    
    // Additional performance metrics
    if ('performance' in window) {
      // Navigation timing
      const navigation = performance.getEntriesByType('navigation')[0];
      if (navigation) {
        onPerfEntry({
          name: 'DOM Content Loaded',
          value: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          rating: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart < 1000 ? 'good' : 'poor'
        });
        
        onPerfEntry({
          name: 'Page Load Time',
          value: navigation.loadEventEnd - navigation.loadEventStart,
          rating: navigation.loadEventEnd - navigation.loadEventStart < 2000 ? 'good' : 'poor'
        });
      }
      
      // Memory usage (if available)
      if ('memory' in performance) {
        onPerfEntry({
          name: 'JS Heap Size',
          value: performance.memory.usedJSHeapSize,
          rating: performance.memory.usedJSHeapSize < 50000000 ? 'good' : 'poor' // 50MB threshold
        });
      }
    }
  }
};

export default reportWebVitals;

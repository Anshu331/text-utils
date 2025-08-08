import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { enhancedReportWebVitals } from './reportWebVitals';

// Performance monitoring
const logWebVitals = (metric) => {
  if (process.env.NODE_ENV === 'production') {
    console.log('Performance metric:', metric);
    // In production, you might want to send this to an analytics service
    // analytics.track('Web Vital', metric);
  }
};

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Application error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '20px', 
          textAlign: 'center',
          fontFamily: 'Arial, sans-serif' 
        }}>
          <h2>Oops! Something went wrong.</h2>
          <p>We're sorry for the inconvenience. Please refresh the page to try again.</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

// Use concurrent features for better performance
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// Enhanced performance monitoring
enhancedReportWebVitals(logWebVitals);

// Register service worker for caching (in production)
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

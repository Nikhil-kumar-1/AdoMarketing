import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SmoothScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change or reload
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  // Scroll to top on initial page load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto' // Use 'auto' for instant scroll on refresh
    });
  }, []);

  return null;
};

export default SmoothScrollToTop;

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SmoothScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Adds smooth scrolling animation
    });
  }, [pathname]);

  return null;
};
export default SmoothScrollToTop;
// Add this component just inside your Router component
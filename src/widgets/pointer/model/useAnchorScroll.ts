import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useAnchorScroll = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = decodeURIComponent(location.hash);
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
};

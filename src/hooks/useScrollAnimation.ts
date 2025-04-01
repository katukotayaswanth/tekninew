import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll('.fade-up, .fade-in, .scale-up');
      
      animatedElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = (rect.top < window.innerHeight - 100) && (rect.bottom > 0);
        element.classList.toggle('visible', isVisible);
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};
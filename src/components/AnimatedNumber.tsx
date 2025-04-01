import React, { useState, useEffect, useRef } from 'react';

interface AnimatedNumberProps {
  end: number;
  duration?: number;
  suffix?: string;
}

export function AnimatedNumber({ end, duration = 2000, suffix = '' }: AnimatedNumberProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return (
    <span 
      ref={countRef} 
      className={`text-4xl font-bold text-blue-400 mb-2 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'} transition-all duration-1000`}
    >
      {count.toLocaleString()}{suffix}
    </span>
  );
}
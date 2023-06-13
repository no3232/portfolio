import { useEffect, useRef, useState, RefObject } from 'react';

interface Options {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export default function useIntersectionObserver(elementRef: RefObject<Element>, options: Options): boolean {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  const observer = new IntersectionObserver(([entry]) => {
    setIsIntersecting(entry.isIntersecting);
  }, options);

  useEffect(() => {
    if(elementRef.current) {
      observer.observe(elementRef.current);
    }
    // Clean-up function
    return () => {
      if(elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}
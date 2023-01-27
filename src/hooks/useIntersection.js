import { useState, useEffect } from "react";

const useIntersection = (element, rootMargin) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState(entry.isIntersecting);
          observer.unobserve(element.current);
        }
      },
      {
        rootMargin,
      }
    );

    element.current && observer.observe(element.current);
    const curElement = element.current;
    return () => {
      observer.unobserve(curElement);
    };
  }, [element, rootMargin]);

  return isVisible;
};

export default useIntersection;

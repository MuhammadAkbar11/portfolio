import { useEffect, useState } from 'react';

const defaultOptions = {
  root: null,
  threshold: 0,
  rootMargin: '50px',
};

const useAppearOnScroll = (ref, options = defaultOptions) => {
  const [isVisible, setIsVisible] = useState(false);

  const callbackObserve = entries => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    const observe = new IntersectionObserver(callbackObserve, {
      ...options,
    });

    if (ref.current) observe.observe(ref.current);

    return () => {
      if (ref.current) {
        observe.unobserve(ref.current);
      }
      setIsVisible(false);
    };
  }, [ref, options]);
  return [isVisible];
};

export default useAppearOnScroll;

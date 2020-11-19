import { useEffect, useState } from 'react';

const useScrollUp = () => {
  const [lastYPos, setLastYPos] = useState(0);
  const [YTop, setYTop] = useState(false);
  const [shouldShowActions, setShouldShowActions] = useState(true);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScroll(true);
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYPos;

      const isTop = yPos <= 5;
      setYTop(isTop);
      setShouldShowActions(isScrollingUp);
      setLastYPos(yPos);
    }

    window.addEventListener('scroll', handleScroll, false);

    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    };
  }, [lastYPos]);

  return [shouldShowActions, isScroll, YTop];
};

export default useScrollUp;

import { useEffect, useState } from 'react';

const useScrollUp = () => {
  const [lastYPos, setLastYPos] = useState(0);
  const [YTop, setYTop] = useState(false);
  const [shouldShowActions, setShouldShowActions] = useState(true);
  const [isScroll, setIsScroll] = useState(false);

  function handleScroll() {
    setIsScroll(true);
    const yPos = window.scrollY;
    const isScrollingUp = yPos < lastYPos;

    const isTop = yPos <= 5;
    setYTop(isTop);
    setShouldShowActions(isScrollingUp);
    setLastYPos(yPos);
  }

  useEffect(() => {
    const hasScrollbar =
      window.innerWidth > document.documentElement.clientWidth;

    if (hasScrollbar) {
      window.addEventListener('scroll', handleScroll, false);
    } else {
      setYTop(true);
      setShouldShowActions(true);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    };
  }, [lastYPos]);

  return [shouldShowActions, isScroll, YTop];
};

export default useScrollUp;

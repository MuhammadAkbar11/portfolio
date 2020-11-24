import { useEffect, useState } from 'react';

const useScrollUp = () => {
  const [isWinScroll, setWinScroll] = useState(false);

  useEffect(() => {
    function handScroll() {
      setWinScroll(true);
    }
    window.addEventListener('scroll', handScroll, false);

    return () => {
      window.removeEventListener('scroll', handScroll, false);
    };
  }, []);

  return { isWinScroll };
};

export default useScrollUp;

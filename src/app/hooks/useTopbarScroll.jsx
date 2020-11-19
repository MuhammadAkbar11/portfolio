import { useEffect, useState } from 'react';
import { useScrollUp } from '.';

function useTopbarScroll() {
  const [isShow, isScrolling, isTop] = useScrollUp();
  const [variants, setVariants] = useState({
    show: {
      opacity: 1,
      y: 0,
      position: 'fixed',
      transition: {
        delay: 0.8,
        duration: 0.4,
        type: 'spring',
        when: 'beforeChildren',
      },
    },
    closed: {
      opacity: 0,
      y: -50,
    },
  });

  const handleShow = state => ({
    ...state,
    show: {
      ...state.show,
      opacity: 1,
      y: 0,
      height: !isTop ? '95px' : '80px',
      boxShadow: !isTop
        ? '0 .3rem 0.2rem rgba(3, 3, 3, 0.3)'
        : '0 .3rem 0.2rem rgba(3, 3, 3, 0)',
      backgroundColor: !isTop ? 'rgba(10, 24, 46, .9)' : 'rgba(10, 24, 46, 0)',
      transition: {
        ...state.show.transition,
        delay: 0.1,
      },
    },
  });

  const handleHide = state => ({
    ...state,
    show: {
      ...state.show,
      opacity: 0,
      y: -50,
      backgroundColor: 'rgba(10, 24, 46, 0)',
      height: '80px',
      transition: {
        ...state.show.transition,
        delay: 0.1,
      },
    },
  });

  useEffect(() => {
    if (isScrolling) {
      setVariants(prevState => {
        let newState = {};
        if (isShow) {
          newState = handleShow(prevState);
        } else {
          newState = handleHide(prevState);
        }
        return newState;
      });
    }
  }, [isShow, isScrolling, isTop]);
  return variants;
}

export default useTopbarScroll;

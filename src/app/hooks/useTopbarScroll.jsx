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
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        delay: 1.2,
        duration: 1,
        type: 'spring',
        when: 'beforeChildren',
      },
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
        ? '0 5px 8px rgba(3, 3, 3, 0.1)'
        : '0 5px 8px rgba(3, 3, 3, 0)',
      backgroundColor: !isTop ? 'rgba(10, 24, 46, .9)' : 'rgba(10, 24, 46, 0)',
      backdropFilter: 'blur(20px)',
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

  const handleReset = () => {
    setVariants(prevState => ({
      ...prevState,
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
    }));
  };

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
    } else {
      handleReset();
    }

    return () => {
      handleReset();
    };
  }, [isShow, isScrolling, isTop]);

  return variants;
}

export default useTopbarScroll;

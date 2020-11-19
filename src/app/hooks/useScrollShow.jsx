import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const useScrollShow = () => {
  const [isShow, setShow] = useState(false); // eslint-disable-line
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      setShow(true);
    }

    return () => setShow(false);
  }, [inView, isShow]);

  return [ref, isShow];
};

export default useScrollShow;

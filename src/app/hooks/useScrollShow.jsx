import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

const defaultProps = {
  rootMargin: '-100px',
};

const proptypes = {
  rootMargin: PropTypes.string,
};

const useScrollShow = rootMargin => {
  const [isShow, setShow] = useState(false); // eslint-disable-line
  const [ref, inView] = useInView({
    rootMargin,
  });
  useEffect(() => {
    if (inView) {
      setShow(true);
    }
    return () => setShow(false);
  }, [inView, isShow]);

  return [ref, isShow];
};

useScrollShow.defaultProps = defaultProps;

useScrollShow.propTypes = proptypes;

export default useScrollShow;

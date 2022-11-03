import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useTitle = title => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [titleText, setTitle] = useState('');
  useEffect(() => {
    setTitle(title);

    if (isHome) {
      document.title = `Muhammad Akbar`;
    } else {
      document.title = `Muhammad Akbar | ${titleText}`;
    }

    return () => {
      setTitle('Loading');
      document.title = `${titleText}... Muhammad Akbar  | ..`;
    };
  }, [titleText, isHome]);
};

export default useTitle;

import { useState, useEffect } from 'react';

const useTitle = title => {
  const [titleText, setTitle] = useState('');
  useEffect(() => {
    setTitle(title);
    document.title = `Muhammad Akbar | ${titleText}`;
    return () => {
      setTitle('Loading');
      document.title = `Muhammad Akbar | ${titleText}`;
    };
  }, [titleText]);
};

export default useTitle;

/* eslint-disable */
import { useState, useCallback } from 'react';

const useSideLinkHover = init => {
  const [text, setText] = useState(init);

  const setTextHover = useCallback(
    e => {
      const { textContent } = e.target;
      const newText = textContent.split('.')[1];
      setText(newText);
    },
    [text]
  );

  return [text, setTextHover];
};
export default useSideLinkHover;

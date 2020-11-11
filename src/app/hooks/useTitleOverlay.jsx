import { useContext, useEffect } from 'react';

import { LayoutContext } from '@app/context/context';

function useTitleOverlay(title) {
  const layoutContext = useContext(LayoutContext);

  console.log(title, 'hooks'); // eslint-disable-line

  const dispatch = layoutContext.layoutDispatch;

  useEffect(() => {
    dispatch({ type: 'SHOW_TITLEOVERLAY', value: title });
    return () => dispatch({ type: 'HIDE_TITLEOVERLAY', value: '' });
  }, []);
}

export default useTitleOverlay;

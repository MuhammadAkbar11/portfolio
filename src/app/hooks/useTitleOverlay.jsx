import { useContext, useEffect } from 'react';

import { LayoutContext } from '@app/context/context';

function useTitleOverlay(title) {
  const layoutContext = useContext(LayoutContext);
  const dispatch = layoutContext.layoutDispatch;

  useEffect(() => {
    dispatch({ type: 'SHOW_TITLEOVERLAY', value: title });
    return () => dispatch({ type: 'HIDE_TITLEOVERLAY', value: '' });
  }, []);
}

export default useTitleOverlay;

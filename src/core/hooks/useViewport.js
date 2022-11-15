import { useState, useEffect } from 'react';
import { size, viewportDefaultState } from 'core/const/device';

const isBrowser = () => typeof window !== 'undefined';

export default function useViewport(customSize) {
  const getViewportSizes = () => {
    if (isBrowser()) {
      let clientWidth = document.documentElement.clientWidth;
      let viewportSizes = {
        viewportWidth: clientWidth,
        isMobile: clientWidth <= size.mobile,
        isLaptop: clientWidth > size.mobile && clientWidth <= size.desktop,
        isDesktop: clientWidth > size.desktop,
        // isCustom: customSize! > clientWidth
      };
      return viewportSizes;
    }
    return viewportDefaultState;
  };

  const [viewportSizes, setViewportSizes] = useState(getViewportSizes());

  useEffect(() => {
    const handleWindowResize = () => setViewportSizes(getViewportSizes());
    window?.addEventListener('resize', handleWindowResize);
    return () => window?.removeEventListener('resize', handleWindowResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return viewportSizes;
}

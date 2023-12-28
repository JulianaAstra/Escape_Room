import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const {pathname} = useLocation();
  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      window.scrollTo(0, 0);
    }

    return () => {
      isMounted = false;
    };
  }, [pathname]);
  return null;
}

export default ScrollToTop;

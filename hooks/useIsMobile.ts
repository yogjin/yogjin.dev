import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({ query: '(min-width:1400px)' });

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  return isMobile;
}

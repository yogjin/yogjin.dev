import { useEffect, useState } from 'react';

function useScrollLocation() {
  const [scrollLocation, setScrollLocation] = useState<number>(0);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollLocation = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY;
      if (direction !== scrollLocation) {
        setScrollLocation(scrollY);
      }
      lastScrollY = scrollY;
    };
    window.addEventListener('scroll', updateScrollLocation); // add event listener
    return () => {
      window.removeEventListener('scroll', updateScrollLocation); // clean up
    };
  }, [scrollLocation]);

  return scrollLocation;
}

export default useScrollLocation;

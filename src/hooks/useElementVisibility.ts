import { useCallback, useEffect, useRef, useState } from 'react';

import { useDevices } from './useDevices';

export const useElementVisibility = () => {
  const { isMedium } = useDevices();

  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibilityCheck = useCallback(() => {
    if (!ref.current) return;

    const elementTop = ref.current.getBoundingClientRect().top;
    if (isMedium) {
      if (elementTop <= 153) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    } else {
      if (elementTop <= 101) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  }, [isMedium]);

  useEffect(() => {
    handleVisibilityCheck();
    handleVisibilityCheck();

    window.addEventListener('scroll', handleVisibilityCheck);
    window.addEventListener('resize', handleVisibilityCheck);

    return () => {
      window.removeEventListener('scroll', handleVisibilityCheck);
      window.removeEventListener('resize', handleVisibilityCheck);
    };
  }, [handleVisibilityCheck]);

  return { isVisible, ref };
};

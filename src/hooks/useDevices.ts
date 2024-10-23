import { useMediaQuery } from './useMediaQuery';

export const useDevices = () => {
  const isSmall = useMediaQuery('(min-width: 640px)');
  const isMedium = useMediaQuery('(min-width: 768px)');

  return {
    isSmall,
    isMedium,
  };
};

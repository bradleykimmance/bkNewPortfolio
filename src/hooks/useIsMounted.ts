import { useLayoutEffect, useState } from 'react';

const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
};

export default useIsMounted;

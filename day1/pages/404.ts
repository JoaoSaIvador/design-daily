import { useEffect } from 'react';
import { useRouter } from 'next/router';

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.push('/signin');
  }, []);
}

export default NotFound;

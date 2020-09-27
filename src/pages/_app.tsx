import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Navbar from '../components/Navbar';

import '../styles/globals.scss';

function MyApp ({ Component, pageProps }) {
  const [user, setUser] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!user && router.pathname.startsWith('/dashboard')) {
      router.push('login');
    }
  }, [user]);

  useEffect(() => {
    function handleRouteChange (url: string) {
      if (!user && url.startsWith('/dashboard')) {
        router.push('login');
      }
    }
    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Component {...pageProps} user={user} setUser={setUser} />
    </>
  );
}

export default MyApp;

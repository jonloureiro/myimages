import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Navbar from '../components/Navbar';

import '../styles/globals.scss';

function MyApp ({ Component, pageProps }) {
  const [user, setUser] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!user && window.location.pathname.startsWith('/dashboard')) {
      router.push('login');
    }
  }, [user]);

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>);
}

export default MyApp;

'use client';

import { useEffect, useState } from 'react';

import { Layout } from '@/components/layouts';
import { Home } from '@/components/modules';

import Loading from './loading';

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return !loading ? (
    <Layout>
      <Home />
    </Layout>
  ) : (
    <Loading />
  );
}

'use client';

import { useState } from 'react';

import { Layout } from '@/components/layouts';
import { Home } from '@/components/modules';
import { useIsomorphicLayoutEffect } from '@/hooks';

import Loading from './loading';

export default function HomePage() {
  const [loading, setLoading] = useState<boolean>(true);
  useIsomorphicLayoutEffect(() => {
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

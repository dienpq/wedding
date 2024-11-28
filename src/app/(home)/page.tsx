'use client';

import { useState } from 'react';

import { AudioPlayer } from '@/components/common';
import { Layout } from '@/components/layouts';
import { Home } from '@/components/modules';
import { WeddingInvitation } from '@/components/modules/home/WeddingInvitation';
import { useIsomorphicLayoutEffect } from '@/hooks';
import { cn } from '@/lib/utils';

export default function HomePage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);

  useIsomorphicLayoutEffect(() => {
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = '';
    });
  }, []);

  return (
    <>
      <div className={cn('block', !open && 'hidden')}>
        <Layout>
          <Home />
        </Layout>
      </div>

      <AudioPlayer />

      <WeddingInvitation open={open} loading={loading} setOpen={setOpen} />
    </>
  );
}

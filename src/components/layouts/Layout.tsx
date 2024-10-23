'use client';

import { ReactNode, useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

import { Snowfall } from '../common';
import { Footer } from './footer';
import { Header } from './header';

interface LayoutProps {
  children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [active, setActive] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = height + 80;

      if (scrollPosition > triggerPosition) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [height]);

  return (
    <>
      <Header
        className={cn(
          'fixed -top-40 left-0 z-30 w-full bg-background duration-300',
          active && 'translate-y-40 shadow-xl',
        )}
      />
      <Header setHeight={setHeight} />
      <main>{children}</main>
      <Footer />
      <Snowfall />
    </>
  );
};

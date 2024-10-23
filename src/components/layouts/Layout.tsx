'use client';

import { ReactNode, useEffect, useState } from 'react';
import Snowfall from 'react-snowfall';

import { useIsomorphicLayoutEffect } from '@/hooks';
import { cn } from '@/lib/utils';

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

  const [images, setImages] = useState<HTMLImageElement[]>([]);

  useIsomorphicLayoutEffect(() => {
    const loadedImages = [
      '/images/snow/1.png',
      '/images/snow/2.png',
      '/images/snow/3.png',
      '/images/snow/4.png',
      '/images/snow/5.png',
      '/images/snow/6.png',
      '/images/snow/7.png',
    ].map((imgSrc) => {
      const img = document.createElement('img');
      img.src = imgSrc;
      return img;
    });
    setImages(loadedImages);
  }, []);

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
      <Snowfall
        style={{
          position: 'absolute',
          top: '0px',
          left: '0px',
          width: '100%',
          height: '100%',
        }}
        snowflakeCount={50}
        images={images}
        radius={[12, 20]}
      />
    </>
  );
};

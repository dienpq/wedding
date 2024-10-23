'use client';

import { ReactNode, useState } from 'react';
import Snowfall from 'react-snowfall';

import { useDevices, useIsomorphicLayoutEffect } from '@/hooks';

import { Footer } from './footer';
import { Header } from './header';

interface LayoutProps {
  children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { isSmall } = useDevices();

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
      <Header />
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
        snowflakeCount={isSmall ? 80 : 60}
        images={images}
        radius={isSmall ? [16, 20] : [12, 16]}
        wind={isSmall ? [-0.5, 1] : [0, 0]}
      />
    </>
  );
};

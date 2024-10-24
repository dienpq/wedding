'use client';

import { ReactNode, useState } from 'react';
import Snowfall from 'react-snowfall';

import { useDevices, useIsomorphicLayoutEffect } from '@/hooks';

import { Footer } from './footer';
import { Header } from './header';
import Snow1 from '/public/images/snow/1.png';
import Snow2 from '/public/images/snow/2.png';
import Snow3 from '/public/images/snow/3.png';
import Snow4 from '/public/images/snow/4.png';
import Snow5 from '/public/images/snow/5.png';
import Snow6 from '/public/images/snow/6.png';
import Snow7 from '/public/images/snow/7.png';

interface LayoutProps {
  children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { isSmall } = useDevices();

  const [images, setImages] = useState<HTMLImageElement[]>([]);

  useIsomorphicLayoutEffect(() => {
    const loadedImages = [Snow1, Snow2, Snow3, Snow4, Snow5, Snow6, Snow7].map(
      (image, index) => {
        const img = document.createElement('img');
        img.src = image.src;
        img.width = image.width;
        img.height = image.height;
        img.alt = `Snow ${index}`;

        return img;
      },
    );
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

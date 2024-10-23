'use client';

import { ReactNode, useEffect, useState } from 'react';
import Snowfall from 'react-snowfall';

import { cn } from '@/lib/utils';

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

  const images = [Snow1, Snow2, Snow3, Snow4, Snow5, Snow6, Snow7].map(
    (imgSrc) => {
      const img = document.createElement('img');
      img.src = imgSrc.src;
      return img;
    },
  );

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

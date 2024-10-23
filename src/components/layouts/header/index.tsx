'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { AspectRatio } from '@/components/ui';
import { useResizeObserver } from '@/hooks';
import { cn } from '@/lib/utils';

import { Navigation } from './Navigation';
import ShadeLeft from '/public/images/header/shade-left.png';
import ShadeRight from '/public/images/header/shade-right.png';
import Logo from '/public/images/logo.png';

export const Header = () => {
  const ref = useRef<HTMLElement>(null);

  const { height = 0 } = useResizeObserver({
    ref,
    box: 'border-box',
  });

  const [active, setActive] = useState<boolean>(false);

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
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [height]);

  return (
    <header ref={ref} className="h-20 py-2 md:h-32">
      <div
        className={cn(
          'z-10 flex lg:justify-between',
          active &&
            'fixed -top-40 left-0 z-30 h-20 w-full translate-y-40 bg-background py-2 shadow-md duration-300 md:h-32',
        )}
      >
        <div className="hidden w-40 lg:block">
          <AspectRatio ratio={ShadeLeft.width / ShadeLeft.height}>
            <Image
              src={ShadeLeft.src}
              alt="Wedding Shade Left"
              className="object-cover"
              fill
            />
          </AspectRatio>
        </div>
        <div className="flex h-full w-full items-center justify-between px-5 sm:px-10 md:flex-col">
          <Link href="/" className="w-52 md:w-64">
            <AspectRatio ratio={Logo.width / Logo.height}>
              <Image
                src={Logo.src}
                alt="Wedding Logo"
                className="object-cover"
                fill
              />
            </AspectRatio>
          </Link>
          <Navigation />
        </div>
        <div className="z-10 hidden w-40 lg:block">
          <AspectRatio ratio={ShadeRight.width / ShadeRight.height}>
            <Image
              src={ShadeRight.src}
              alt="Wedding Shade Left"
              className="object-cover"
              fill
            />
          </AspectRatio>
        </div>
      </div>
    </header>
  );
};

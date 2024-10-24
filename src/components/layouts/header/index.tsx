'use client';

import { motion } from 'framer-motion';
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
  const [activeSub, setActiveSub] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const triggerPosition = height + 100;
      const triggerPositionSub = height + 60;

      if (scrollPosition > triggerPosition) {
        setActive(true);
      } else {
        setActive(false);
      }
      if (scrollPosition > triggerPositionSub) {
        setActiveSub(true);
      } else {
        setActiveSub(false);
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('resize', handleScroll);
    };
  }, [height]);

  return (
    <header ref={ref} className="h-20 py-2 md:h-32">
      <div
        className={cn(
          'z-30 flex lg:justify-between',
          activeSub &&
            'fixed -top-52 left-0 z-30 h-20 w-full bg-background py-2 shadow-md duration-500 md:h-32',
          active && 'translate-y-52',
        )}
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          viewport={{ once: true }}
          className="hidden w-40 lg:block"
        >
          <AspectRatio ratio={ShadeLeft.width / ShadeLeft.height}>
            <Image
              src={ShadeLeft.src}
              alt="Wedding Shade Left"
              className="object-cover"
              fill
            />
          </AspectRatio>
        </motion.div>
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
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            x: 20,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          viewport={{ once: true }}
          className="z-10 hidden w-40 lg:block"
        >
          <AspectRatio ratio={ShadeRight.width / ShadeRight.height}>
            <Image
              src={ShadeRight.src}
              alt="Wedding Shade Left"
              className="object-cover"
              fill
            />
          </AspectRatio>
        </motion.div>
      </div>
    </header>
  );
};

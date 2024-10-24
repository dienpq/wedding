'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { useDevices, useResizeObserver } from '@/hooks';
import { cn } from '@/lib/utils';
import { TabType } from '@/types';

import { Navigation } from './Navigation';
import ShadeLeft from '/public/images/header/shade-left.png';
import ShadeRight from '/public/images/header/shade-right.png';
import Logo from '/public/images/logo.png';

export const Header = () => {
  const { isMedium } = useDevices();

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

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: TabType,
  ) => {
    e.preventDefault();

    const targetElement = document.getElementById(id);

    if (targetElement) {
      const yOffset = isMedium ? -152 : -100;
      const yPosition =
        targetElement.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({
        top: yPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header ref={ref} className="h-20 py-2 md:h-32">
      <div
        className={cn(
          'z-30 flex lg:justify-between',
          activeSub &&
            'fixed -top-52 left-0 z-30 h-20 w-full overflow-hidden bg-background py-2 shadow-md duration-500 md:h-32',
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
          <Image
            src={ShadeLeft.src}
            alt="Wedding Shade Left"
            width={ShadeLeft.width}
            height={ShadeLeft.height}
            priority
          />
        </motion.div>
        <div className="flex h-full w-full items-center justify-between px-5 sm:px-10 md:flex-col">
          <Link
            href="/"
            className="w-52 md:w-64"
            onClick={(e) => handleClick(e, 'saveTheDate')}
          >
            <Image
              src={Logo.src}
              alt="Wedding Logo"
              className="object-cover"
              width={Logo.width}
              height={Logo.height}
              priority
            />
          </Link>
          <Navigation onClick={handleClick} />
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
          <Image
            src={ShadeRight.src}
            alt="Wedding Shade Left"
            width={ShadeRight.width}
            height={ShadeRight.height}
            priority
          />
        </motion.div>
      </div>
    </header>
  );
};

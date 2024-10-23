'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, HTMLProps, SetStateAction, useEffect, useRef } from 'react';

import { AspectRatio } from '@/components/ui';
import { useResizeObserver } from '@/hooks';
import { cn } from '@/lib/utils';

import { Navigation } from './Navigation';
import ShadeLeft from '/public/images/header/shade-left.png';
import ShadeRight from '/public/images/header/shade-right.png';
import Logo from '/public/images/logo.png';

interface HeaderProps {
  setHeight?: Dispatch<SetStateAction<number>>;
  className?: HTMLProps<HTMLElement>['className'];
}
export const Header = ({ setHeight, className }: HeaderProps) => {
  const ref = useRef<HTMLElement>(null);

  const { height = 0 } = useResizeObserver({
    ref,
    box: 'border-box',
  });

  useEffect(() => setHeight && setHeight(height), [height, setHeight]);

  return (
    <header ref={ref} className={cn('py-2 md:h-32', className)}>
      <div className="z-10 flex lg:justify-between">
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

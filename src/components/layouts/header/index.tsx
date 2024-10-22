import Image from 'next/image';
import Link from 'next/link';

import { AspectRatio } from '@/components/ui';

import { Navigation } from './Navigation';
import ShadeLeft from '/public/images/header/shade-left.png';
import ShadeRight from '/public/images/header/shade-right.png';
import Logo from '/public/images/logo.png';

export const Header = () => {
  return (
    <header className="py-2 md:h-32">
      <div className="flex justify-between">
        <div className="w-40">
          <AspectRatio ratio={ShadeLeft.width / ShadeLeft.height}>
            <Image
              src={ShadeLeft.src}
              alt="Wedding Shade Left"
              className="object-cover"
              fill
            />
          </AspectRatio>
        </div>
        <div className="flex h-full items-center justify-between px-5 sm:px-10 md:flex-col">
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
        <div className="z-10 w-40">
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

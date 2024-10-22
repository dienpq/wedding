import Image from 'next/image';

import { AspectRatio } from '@/components/ui';

import { Navigation } from './Navigation';
import Logo from '/public/images/logo.png';

export const Header = () => {
  return (
    <header className="h-24">
      <div className="flex h-full items-center justify-between px-5 sm:px-10">
        <div className="w-52 md:w-64">
          <AspectRatio ratio={Logo.width / Logo.height}>
            <Image
              src={Logo.src}
              alt="Wedding Logo"
              className="rounded-md object-cover"
              fill
            />
          </AspectRatio>
        </div>
        <Navigation />
        <div className="hidden h-full w-64 xl:block" />
      </div>
    </header>
  );
};

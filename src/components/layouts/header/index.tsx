import Image from 'next/image';

import { Logo } from '@/assets/images';

import { Navigation } from './Navigation';

export const Header = () => {
  return (
    <header className="h-28 border-b">
      <div className="container flex h-full items-center justify-between">
        <div className="w-32">
          <Image
            src={Logo}
            alt="Wedding Logo"
            width={Logo.width}
            height={Logo.height}
          />
        </div>
        <Navigation />
        <div className="h-full w-32" />
      </div>
    </header>
  );
};

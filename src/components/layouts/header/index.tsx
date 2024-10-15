import Image from 'next/image';

import { Navigation } from './Navigation';

export const Header = () => {
  return (
    <header className="h-28">
      <div className="container flex h-full items-center justify-between">
        <div className="relative h-20 w-32">
          <Image
            src="/images/logo.png"
            alt="Wedding Logo"
            fill
            className="w-ful h-full"
          />
        </div>
        <Navigation />
        <div className="h-full w-32" />
      </div>
    </header>
  );
};

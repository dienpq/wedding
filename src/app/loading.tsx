import Image from 'next/image';

import PreLoader from '/public/gif/preloader.gif';

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-olive-gray">
      <Image
        src={PreLoader.src}
        alt="Preloader"
        height={PreLoader.height}
        width={PreLoader.width}
      />
    </div>
  );
}

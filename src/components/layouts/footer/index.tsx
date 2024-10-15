import Image from 'next/image';

import { Typography } from '@/components/ui';

import ShapeLeft from '/public/images/footer/shape-left.svg';
import ShapeRight from '/public/images/footer/shape-right.svg';

export const Footer = () => {
  return (
    <footer className="relative mt-32 h-[300px] bg-dark-chocolate p-6 text-white">
      <div className="flex h-full items-end justify-center">
        <Typography>Phan Điện ❤️ Vũ Anh - Wedding 2024</Typography>
      </div>
      <div className="absolute bottom-0 left-0">
        <Image
          src={ShapeLeft}
          alt="Shape"
          width={ShapeLeft.width}
          height={ShapeLeft.height}
          className="w-52"
        />
      </div>
      <div className="absolute right-0 top-0">
        <Image
          src={ShapeRight}
          alt="Shape"
          width={ShapeRight.width}
          height={ShapeRight.height}
          className="w-52"
        />
      </div>
    </footer>
  );
};

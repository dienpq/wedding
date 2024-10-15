import { PlayIcon } from 'lucide-react';
import Image from 'next/image';

import { Typography } from '@/components/ui';

export const BrideAndGroom = () => {
  return (
    <section className="px-[100px]">
      <div className="flex justify-center gap-x-6">
        <div className="flex flex-col items-end justify-center">
          <div className="text-right">
            <Typography>Vũ Thị Anh</Typography>
            <Typography>Cô dâu</Typography>
            <Typography>STK: 19036383952013</Typography>
          </div>
          <div className="relative size-64">
            <Image
              src="/images/home/bride-and-groom/qr-bride.jpg"
              alt="Bank Acount Bride"
              fill
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="relative h-[440px] w-[800px]">
          <div className="absolute left-0 top-0">
            <div className="relative">
              <div className="relative aspect-square w-[440px] overflow-hidden rounded-full">
                <Image
                  src="/images/home/bride-and-groom/bride.png"
                  alt="Bride"
                  fill
                  className="gride-and-groom-animate h-full w-full object-cover"
                />
              </div>
              <div className="absolute left-5 top-5 size-[400px] rounded-full border" />
            </div>
          </div>
          <div className="absolute right-0 top-0">
            <div className="relative">
              <div className="relative aspect-square w-[440px] overflow-hidden rounded-full">
                <Image
                  src="/images/home/bride-and-groom/groom.png"
                  alt="Bride"
                  fill
                  className="gride-and-groom-animate h-full w-full object-cover"
                />
              </div>
              <div className="absolute left-5 top-5 size-[400px] rounded-full border" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center">
          <div className="text-left">
            <Typography>Phan Quang Điện</Typography>
            <Typography>Chú rể</Typography>
            <Typography>STK: 222340829</Typography>
          </div>
          <div className="relative size-64">
            <Image
              src="/images/home/bride-and-groom/qr-groom.jpg"
              alt="Bank Acount Bride"
              fill
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="relative p-10 shadow-xl">
        <div className="relative h-[500px] w-full">
          <Image
            src="/images/home/video/bg.jpg"
            alt="Video"
            fill
            className="h-full w-full object-cover"
          />
        </div>
        <button className="absolute left-1/2 top-1/2 flex size-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-white/20">
          <PlayIcon className="size-12 stroke-[1.5] text-white" />
        </button>
      </div>
    </section>
  );
};

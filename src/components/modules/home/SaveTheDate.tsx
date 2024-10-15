'use client';

import Image from 'next/image';

import { Typography } from '@/components/ui';
import { useCountdown } from '@/hooks';

export const SaveTheDate = () => {
  const { days, hours, minutes, seconds } = useCountdown('2024-12-28T10:00:00');

  return (
    <section className="h-[calc(100vh-64px)] bg-image-['/images/home/save-the-date/bg.png']">
      <div className="flex pl-48">
        <div className="flex flex-1 flex-col items-center justify-center gap-y-4">
          <div className="relative flex size-[500px] items-center justify-center">
            <Typography variant="h1" className="text-center font-greatVibes">
              Save
              <Typography variant="h3" className="py-4">
                <span>the</span>
              </Typography>
              Date
            </Typography>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="hero-flower-animate relative aspect-square w-[540px]">
                <Image
                  src="/images/home/save-the-date/hero-flower.png"
                  alt="Hero flower"
                  fill
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4 text-center">
            <Typography variant="h3" className="font-jost text-beige-rose">
              Phan Điện ❤️ Vũ Anh
            </Typography>
            <Typography variant="h6" className="text-steel-gray">
              We Are Getting Married December 28,2024
            </Typography>
          </div>
        </div>
        <div className="w-[calc(100vh-16px)] px-10">
          <div className="relative">
            <div className="relative aspect-square h-full w-full">
              <Image
                src="/images/home/save-the-date/1.jpg"
                alt="Hero flower"
                fill
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-x-8 bottom-8 flex w-[calce(100%-4rem)] justify-center gap-x-20 bg-primary/50 p-5 text-white">
              <div className="text-center">
                <Typography variant="h3" className="font-sail">
                  {days}
                </Typography>
                <Typography variant="h6">Days</Typography>
              </div>
              <div className="text-center">
                <Typography variant="h3" className="font-sail">
                  {hours}
                </Typography>
                <Typography variant="h6">Hours</Typography>
              </div>
              <div className="text-center">
                <Typography variant="h3" className="font-sail">
                  {minutes}
                </Typography>
                <Typography variant="h6">Mins</Typography>
              </div>
              <div className="text-center">
                <Typography variant="h3" className="font-sail">
                  {seconds}
                </Typography>
                <Typography variant="h6">Secs</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

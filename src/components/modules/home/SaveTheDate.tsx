'use client';

import Image from 'next/image';

import { Typography } from '@/components/ui';
import { useCountdown } from '@/hooks';

export const SaveTheDate = () => {
  const { days, hours, minutes, seconds } = useCountdown('2024-12-28T10:00:00');

  return (
    <section className="h-[calc(100vh)] bg-image-['/images/home/save-the-date/bg.png']">
      <div className="grid grid-cols-2">
        <div className="col-span-1 flex flex-col items-center justify-center">
          <div className="relative flex size-[500px] items-center justify-center">
            <div className="text-center">
              <Typography variant="h1" className="text-center">
                Save
              </Typography>
              <Typography variant="h3">
                <span>the</span>
              </Typography>
              <Typography variant="h1" className="text-center">
                Date
              </Typography>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="hero-flower-animate relative aspect-square w-[500px]">
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
            <Typography variant="h1">Phan Điện ❤️ Vũ Anh</Typography>
            <Typography variant="h3">
              We Are Getting Married December 28,2024
            </Typography>
          </div>
        </div>
        <div className="col-span-1 px-10">
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
                <Typography variant="h2">{days}</Typography>
                <Typography variant="h2">Days</Typography>
              </div>
              <div className="text-center">
                <Typography variant="h2">{hours}</Typography>
                <Typography variant="h2">Hours</Typography>
              </div>
              <div className="text-center">
                <Typography variant="h2">{minutes}</Typography>
                <Typography variant="h2">Mins</Typography>
              </div>
              <div className="text-center">
                <Typography variant="h2">{seconds}</Typography>
                <Typography variant="h2">Secs</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

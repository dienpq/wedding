'use client';

import Image from 'next/image';

import { Typography } from '@/components/ui';
import { useCountdown } from '@/hooks';

export const SaveTheDate = () => {
  const { days, hours, minutes, seconds } = useCountdown('2024-12-28T10:00:00');

  return (
    <section
      className="w-full bg-image-['/images/home/save-the-date/bg.png'] xl:h-[calc(100vh-96px)]"
      style={{
        backgroundPosition: 'bottom center',
      }}
    >
      <div className="flex h-full w-full flex-col xl:flex-row xl:pl-[8%]">
        <div className="flex w-full flex-1 flex-col items-center justify-center gap-y-4 px-5 pb-20 sm:px-10">
          <div className="relative flex aspect-square w-full items-center justify-center sm:max-w-[500px]">
            <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 sm:max-w-[540px]">
              <div className="hero-flower-animate relative aspect-square w-full">
                <Image
                  src="/images/home/save-the-date/hero-flower.png"
                  alt="Hero flower"
                  fill
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <Typography
              variant="h1"
              className="z-10 text-center font-greatVibes"
            >
              Save
              <Typography variant="h3" className="py-2 sm:py-4" asChild>
                <p>the</p>
              </Typography>
              Date
            </Typography>
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
        <div className="mx-auto w-full flex-1 px-5 sm:max-w-[600px] sm:px-10 xl:max-w-full xl:pb-10 xl:pr-10">
          <div className="relative h-full w-full">
            <div className="relative aspect-square h-full w-full xl:aspect-auto">
              <Image
                src="/images/home/save-the-date/1.jpg"
                alt="Hero flower"
                fill
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-x-4 bottom-4 flex w-[calc(100%-2rem)] justify-between bg-primary/50 p-5 text-white sm:inset-x-8 sm:bottom-8 sm:w-[calc(100%-4rem)] sm:gap-x-10 sm:px-16">
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

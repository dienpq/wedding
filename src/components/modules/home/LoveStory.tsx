import { HeartIcon } from 'lucide-react';
import Image from 'next/image';

import { SectionTitle } from '@/components/common';
import { Typography } from '@/components/ui';
import { cn } from '@/lib/utils';

import ShapeLeft from '/public/images/home/love-history/shape-left.png';
import ShapeRight from '/public/images/home/love-history/shape-right.png';

const data = [
  {
    title: 'How we meet',
    description:
      'Under the sparkling lights of the Christmas tree, we circled the streets hand in hand. The atmosphere of warmth and happiness spread in every moment, making our first Christmas outing together a romantic memory and memorable forever.',
    image: '/images/home/love-history/1.jpg',
    shade: (
      <div className="absolute -left-14 -top-14">
        <Image
          src={ShapeLeft}
          alt="Shape"
          width={ShapeLeft.width}
          height={ShapeLeft.height}
          className="w-56"
        />
      </div>
    ),
  },
  {
    title: 'I proposed, She said Yes',
    description: 'It’s is secret.',
    image: '/images/home/love-history/2.jpg',
    shade: (
      <div className="absolute -right-16 -top-16">
        <Image
          src={ShapeRight}
          alt="Shape"
          width={ShapeRight.width}
          height={ShapeRight.height}
          className="w-56"
        />
      </div>
    ),
  },
  {
    title: 'Our Engagement Day',
    description: 'To be released after the lovely wedding on 22 October, 2023.',
    image: '/images/home/love-history/3.jpg',
    shade: (
      <div className="absolute -left-24 -top-16">
        <Image
          src={ShapeLeft}
          alt="Shape"
          width={ShapeLeft.width}
          height={ShapeLeft.height}
          className="w-56"
        />
      </div>
    ),
  },
];

export const LoveStory = () => {
  return (
    <section className="container">
      <SectionTitle title="STORY" description="Câu chuyện tình yêu" />
      <div className="relative mx-auto mt-12 flex max-w-[1200px] flex-col gap-y-20 py-20 md:gap-y-6 xl:mt-20">
        {data.map(({ title, description, image, shade }, index) => (
          <div
            key={index}
            className={cn(
              'relative flex flex-col items-center justify-center gap-x-0 gap-y-10 md:flex-row md:gap-x-28 md:gap-y-0 lg:gap-x-40',
              index % 2 !== 0 && 'md:flex-row-reverse',
            )}
          >
            <div className="absolute left-1/2 top-1/2 z-[1] hidden size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-beige-rose bg-white md:flex">
              <HeartIcon className="text-beige-rose" />
            </div>
            <div
              className={cn(
                'flex w-full flex-1 justify-center md:justify-end',
                index % 2 !== 0 && 'md:justify-start',
              )}
            >
              <div className="relative aspect-square w-full max-w-[280px] lg:max-w-[300px]">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="h-full w-full overflow-hidden rounded-full object-cover"
                />
                <div className="absolute left-1/2 top-1/2 size-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border" />
                {shade}
              </div>
            </div>
            <div
              className={cn(
                'w-full flex-1 space-y-4 bg-secondary px-16 py-10 text-center md:bg-transparent md:px-0 md:py-0 md:text-left',
                index % 2 !== 0 && 'md:text-right',
              )}
            >
              <Typography variant="h5" className="font-sail">
                {title}
              </Typography>
              <Typography variant="sub" className="text-steel-gray">
                {description}
              </Typography>
            </div>
          </div>
        ))}
        {/* ----- */}
        <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 rounded bg-beige-rose md:block" />
        <div className="absolute left-1/2 top-0 hidden size-6 -translate-x-1/2 rounded-full border-[5px] border-beige-rose bg-white md:block" />
        <div className="absolute bottom-0 left-1/2 hidden size-6 -translate-x-1/2 rounded-full border-[5px] border-beige-rose bg-white md:block" />
      </div>
    </section>
  );
};

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
    <section>
      <SectionTitle title="Story" description="Câu chuyện tình yêu" />
      <div className="relative mx-auto mt-20 flex max-w-5xl flex-col gap-y-6 py-20">
        {data.map(({ title, description, image, shade }, index) => (
          <div
            key={index}
            className={cn(
              'relative flex items-center justify-center gap-x-40',
              index % 2 !== 0 && 'flex-row-reverse',
            )}
          >
            <div className="absolute left-1/2 top-1/2 z-[1] flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-orange-100 bg-white">
              <HeartIcon className="text-orange-100" />
            </div>
            <div
              className={cn(
                'flex w-full flex-1 justify-end',
                index % 2 !== 0 && 'justify-start',
              )}
            >
              <div className="relative">
                <div className="relative aspect-square w-[300px] overflow-hidden rounded-full">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute left-1/2 top-1/2 size-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border" />
                {shade}
              </div>
            </div>
            <div
              className={cn(
                'w-full flex-1 text-left',
                index % 2 !== 0 && 'text-right',
              )}
            >
              <Typography variant="h3">{title}</Typography>
              <Typography variant="h5">{description}</Typography>
            </div>
          </div>
        ))}
        {/* ----- */}
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 rounded bg-orange-100" />
        <div className="absolute left-1/2 top-0 size-6 -translate-x-1/2 rounded-full border-[5px] border-orange-100 bg-white" />
        <div className="absolute bottom-0 left-1/2 size-6 -translate-x-1/2 rounded-full border-[5px] border-orange-100 bg-white" />
      </div>
    </section>
  );
};

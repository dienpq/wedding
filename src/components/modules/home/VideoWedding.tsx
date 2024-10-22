import { PlayIcon } from 'lucide-react';
import Image from 'next/image';

export const VideoWedding = () => {
  return (
    <section className="container">
      <div
        className="relative mt-32 rounded-xl p-5 sm:p-6 lg:p-10"
        style={{
          boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-lg sm:aspect-[2/1] md:aspect-[5/2] lg:aspect-[9/4] xl:aspect-[3/1]">
          <Image
            src="/images/home/video/bg.jpg"
            alt="Video"
            fill
            className="h-full w-full object-cover"
          />
        </div>
        <button className="absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-white/20 sm:size-16 xl:size-24">
          <PlayIcon className="size-6 stroke-[1.5] text-white sm:size-8 xl:size-12" />
        </button>
      </div>
    </section>
  );
};

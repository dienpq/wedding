import { PlayIcon } from 'lucide-react';
import Image from 'next/image';

export const VideoWedding = () => {
  return (
    <section>
      <div className="container">
        <div
          className="relative mt-32 rounded-xl p-10"
          style={{
            boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
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
      </div>
    </section>
  );
};

import { motion } from 'framer-motion';
import { PlayIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import { DialogPreviewImage } from '@/components/common';

import BgVideo from '/public/images/home/video/bg.jpg';

export const VideoWedding = () => {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="videoWedding" className="container-lg">
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        viewport={{ once: true }}
        className="relative rounded-xl p-5 will-change-opacity sm:p-6 lg:p-10"
        style={{
          boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-lg sm:aspect-[2/1] md:aspect-[5/3] lg:aspect-[9/5] xl:aspect-[2/1]">
          <Image
            src={BgVideo}
            alt="Video"
            priority
            className="h-full w-full object-cover"
          />
        </div>
        <button
          name="preview-video"
          className="absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-white/20 sm:size-16 xl:size-24"
          onClick={() => setOpen(1)}
        >
          <PlayIcon className="size-6 stroke-[1.5] text-white sm:size-8 xl:size-12" />
        </button>
      </motion.div>
      <DialogPreviewImage
        showLabel={false}
        open={open}
        setOpen={setOpen}
        data={[
          <video
            id="video-wedding"
            key="video-wedding"
            className="max-h-[calc(100svh-100px)]"
            controls
          >
            <source src="/video/wedding-min.mp4" type="video/mp4" />
            Video Wedding
          </video>,
        ]}
      />
    </section>
  );
};

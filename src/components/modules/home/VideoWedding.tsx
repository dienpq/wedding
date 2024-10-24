import { motion } from 'framer-motion';
import { PlayIcon } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { DialogPreviewImage } from '@/components/common';
import { useElementVisibility } from '@/hooks';
import { setTab } from '@/redux/features/configurationSlice';
import { useAppDispatch } from '@/redux/hooks';

export const VideoWedding = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState<number>(0);

  const { ref, isVisible } = useElementVisibility();

  useEffect(() => {
    if (isVisible) {
      dispatch(setTab('brideAndGroom'));
    } else {
      dispatch(setTab('brideAndGroom'));
    }
  }, [dispatch, isVisible]);

  return (
    <section id="videoWedding" ref={ref} className="container-lg">
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
        className="relative rounded-xl p-5 sm:p-6 lg:p-10"
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
        <button
          className="absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-white/20 sm:size-16 xl:size-24"
          onClick={() => setOpen(1)}
        >
          <PlayIcon className="size-6 stroke-[1.5] text-white sm:size-8 xl:size-12" />
        </button>
      </motion.div>
      <DialogPreviewImage
        open={open}
        setOpen={setOpen}
        data={[
          <iframe
            key="video-wedding"
            className="aspect-video w-full self-stretch sm:min-h-80 md:min-h-96"
            src={`https://www.youtube.com/embed/XlDlHi4hj7A?autoplay=1`}
            title="Video Wedding"
            aria-hidden="true"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />,
        ]}
      />
    </section>
  );
};

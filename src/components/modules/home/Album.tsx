import Image from 'next/image';
import { useEffect, useState } from 'react';

import { DialogPreviewImage } from '@/components/common';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { setTab } from '@/redux/features/configurationSlice';
import { useAppDispatch } from '@/redux/hooks';

import Image1 from '/public/images/home/album/1.jpg';
import Image2 from '/public/images/home/album/2.jpg';
import Image3 from '/public/images/home/album/3.jpg';
import Image4 from '/public/images/home/album/4.jpg';
import Image5 from '/public/images/home/album/5.jpg';
import Image6 from '/public/images/home/album/6.jpg';

export const Album = () => {
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState<number>(0);
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: [0.25, 0.5],
  });

  useEffect(() => {
    if (isIntersecting) {
      dispatch(setTab('album'));
    }
  }, [dispatch, isIntersecting]);

  const data = [Image1, Image2, Image3, Image4, Image5, Image6];

  return (
    <section id="album" ref={ref} className="container">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:gap-8">
        {data.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[3/4] w-full"
            onClick={() => {
              setOpen(index + 1);
            }}
          >
            <Image
              src={image.src}
              alt={`Wedding ${index + 1}`}
              fill
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      <DialogPreviewImage open={open} setOpen={setOpen} data={data} />
    </section>
  );
};

import { motion } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import { DialogPreviewImage } from '@/components/common';
import { Button } from '@/components/ui';

import Image1 from '/public/images/home/album/1.jpg';
import Image2 from '/public/images/home/album/2.jpg';
import Image3 from '/public/images/home/album/3.jpg';
import Image4 from '/public/images/home/album/4.jpg';
import Image5 from '/public/images/home/album/5.jpg';
import Image6 from '/public/images/home/album/6.jpg';

export const Album = () => {
  const [open, setOpen] = useState<number>(0);

  const data = [Image1, Image2, Image3, Image4, Image5, Image6];

  return (
    <section id="album" className="container">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:gap-8">
        {data.map((image, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.75,
            }}
            className="group relative will-change-transform-opacity"
          >
            <Image src={image} alt={`Wedding ${index + 1}`} priority />
            <Button
              variant="ghost"
              className="absolute left-1/2 top-1/2 flex size-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-none opacity-0 duration-200 group-hover:bg-accent/50 group-hover:opacity-100"
              onClick={() => {
                setOpen(index + 1);
              }}
            >
              <PlusIcon className="size-10 stroke-[1.5px] opacity-0 duration-200 group-hover:opacity-100" />
            </Button>
          </motion.div>
        ))}
      </div>
      <DialogPreviewImage open={open} setOpen={setOpen} data={data} />
    </section>
  );
};

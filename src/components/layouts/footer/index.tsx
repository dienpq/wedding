import { motion } from 'framer-motion';
import Image from 'next/image';

import { Typography } from '@/components/ui';

import ShapeLeft from '/public/images/footer/shape-left.svg';
import ShapeRight from '/public/images/footer/shape-right.svg';

export const Footer = () => {
  return (
    <footer className="relative mt-32 h-[200px] overflow-hidden bg-dark-chocolate p-6 text-white sm:h-[250px] lg:h-[300px]">
      <div className="flex h-full items-end justify-center">
        <Typography variant="sub" className="font-medium" asChild>
          <motion.p
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className="will-change-transform-opacity"
          >
            Phan Điện ❤️ Vũ Anh - Wedding 2024
          </motion.p>
        </Typography>
      </div>
      <div className="absolute bottom-0 left-0">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          viewport={{ once: true }}
          className="will-change-transform-opacity"
        >
          <Image
            src={ShapeLeft}
            alt="Shape"
            className="w-28 sm:w-36 lg:w-52"
            priority
            quality={100}
          />
        </motion.div>
      </div>
      <div className="absolute right-0 top-0">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            x: 20,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          viewport={{ once: true }}
          className="will-change-transform-opacity"
        >
          <Image
            src={ShapeRight}
            alt="Shape"
            className="w-28 sm:w-36 lg:w-52"
            priority
            quality={100}
          />
        </motion.div>
      </div>
    </footer>
  );
};

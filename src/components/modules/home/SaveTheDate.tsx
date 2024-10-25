import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

import { Typography } from '@/components/ui';
import { useCountdown, useElementVisibility } from '@/hooks';
import { setTab } from '@/redux/features/configurationSlice';
import { useAppDispatch } from '@/redux/hooks';

import Couple from '/public/images/home/save-the-date/couple.jpg';
import HeroFlower from '/public/images/home/save-the-date/hero-flower.png';

export const SaveTheDate = () => {
  const dispatch = useAppDispatch();
  const { days, hours, minutes, seconds } = useCountdown('2024-12-28T10:00:00');

  const { ref, isVisible } = useElementVisibility();

  useEffect(() => {
    if (isVisible) {
      dispatch(setTab('saveTheDate'));
    }
  }, [dispatch, isVisible]);

  const description = 'We Are Getting Married December 28, 2024';

  return (
    <section
      id="saveTheDate"
      ref={ref}
      className="w-full bg-image-['/images/home/save-the-date/bg.png'] xl:h-[calc(100vh-128px+40px)]"
      style={{
        backgroundPosition: 'bottom center',
      }}
    >
      <div className="flex h-full w-full flex-col xl:flex-row xl:pl-[8%]">
        <div className="flex w-full flex-1 flex-col items-center justify-center gap-y-4 px-5 pb-20 sm:px-10">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.75,
            }}
            viewport={{ once: true }}
            className="relative flex aspect-square w-full items-center justify-center sm:max-w-[400px] 2xl:max-w-[500px]"
          >
            <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden">
              <Image
                src={HeroFlower}
                alt="Hero flower"
                priority
                className="hero-flower-animate aspect-square w-full object-cover"
              />
            </div>
            <Typography
              variant="h1"
              className="z-10 text-center font-greatVibes sm:scale-75 2xl:scale-100"
            >
              Save
              <Typography variant="h3" className="py-2 sm:py-4" asChild>
                <p>the</p>
              </Typography>
              Date
            </Typography>
          </motion.div>

          <div className="space-y-4 text-center sm:scale-75 2xl:scale-100">
            <Typography
              variant="h3"
              className="font-jost text-beige-rose"
              asChild
            >
              <motion.h3
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                viewport={{ once: true }}
              >
                Phan Điện ❤️ Vũ Anh
              </motion.h3>
            </Typography>
            <Typography variant="h6" className="text-steel-gray">
              {description.split('').map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: (index + 1) * 0.1,
                    duration: 0.2,
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </Typography>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[500px] px-5 sm:max-w-[600px] sm:px-10 xl:max-w-[710px] xl:px-10 xl:pb-10 2xl:max-w-[50%]">
          <div className="relative h-full w-full overflow-hidden">
            <Image src={Couple} alt="Couple" priority />
            <div className="absolute inset-x-4 bottom-4 w-[calc(100%-2rem)] sm:inset-x-8 sm:bottom-8 sm:w-[calc(100%-4rem)]">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                className="flex justify-between bg-primary/50 px-4 py-4 text-white sm:gap-x-10 sm:px-10 sm:py-5 xl:px-16"
              >
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
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

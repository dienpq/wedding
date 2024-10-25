import { Variants, motion } from 'framer-motion';
import Image from 'next/image';

import { Typography } from '@/components/ui';
import { useCountdown } from '@/hooks';

import Couple from '/public/images/home/save-the-date/couple.jpg';
import HeroFlower from '/public/images/home/save-the-date/hero-flower.png';

export const SaveTheDate = () => {
  const { days, hours, minutes, seconds } = useCountdown('2024-12-28T10:00:00');

  const description = 'We Are Getting Married December 28, 2024';

  const typingEffectVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <section
      id="saveTheDate"
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
            className="relative flex aspect-square w-full items-center justify-center will-change-transform-opacity sm:max-w-[400px] 2xl:max-w-[500px]"
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
              <h3>
                <motion.p
                  initial={{
                    opacity: 0,
                    x: -40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.25,
                    duration: 0.5,
                  }}
                  className="inline-block will-change-transform-opacity"
                >
                  Phan Điện
                </motion.p>
                <span> ❤️ </span>
                <motion.p
                  initial={{
                    opacity: 0,
                    x: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.25,
                    duration: 0.5,
                  }}
                  className="inline-block will-change-transform-opacity"
                >
                  Vũ Anh
                </motion.p>
              </h3>
            </Typography>

            <Typography variant="h6" className="text-steel-gray" asChild>
              <motion.h6
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                  hidden: {},
                }}
                initial="hidden"
                whileInView="visible"
                aria-hidden
                className="will-change-opacity"
              >
                {description.split('').map((word, index) => (
                  <motion.span
                    key={index}
                    variants={typingEffectVariants}
                    className="will-change-opacity"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h6>
            </Typography>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[500px] px-5 sm:max-w-[600px] sm:px-10 xl:max-w-[710px] xl:px-10 xl:pb-10 2xl:max-w-[50%]">
          <div className="relative h-full w-full overflow-hidden">
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              className="will-change-opacity"
            >
              <Image src={Couple} alt="Couple" priority />
            </motion.div>
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
                className="flex justify-between bg-primary/50 px-4 py-4 text-white will-change-transform-opacity sm:gap-x-10 sm:px-10 sm:py-5 xl:px-16"
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

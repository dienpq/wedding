import { motion } from 'framer-motion';
import Image from 'next/image';
import { Fragment, useEffect } from 'react';

import { Typography } from '@/components/ui';
import { useElementVisibility } from '@/hooks';
import { cn } from '@/lib/utils';
import { setTab } from '@/redux/features/configurationSlice';
import { useAppDispatch } from '@/redux/hooks';

import Bride from '/public/images/home/bride-and-groom/bride.png';
import Groom from '/public/images/home/bride-and-groom/groom.png';
import QRBride from '/public/images/home/bride-and-groom/qr-bride.jpg';
import QRGroom from '/public/images/home/bride-and-groom/qr-groom.jpg';

export const BrideAndGroom = () => {
  const dispatch = useAppDispatch();
  const { ref, isVisible } = useElementVisibility();

  useEffect(() => {
    if (isVisible) {
      dispatch(setTab('brideAndGroom'));
    } else {
      dispatch(setTab('saveTheDate'));
    }
  }, [dispatch, isVisible]);

  const data = [
    {
      name: 'Vũ Thị Anh',
      label: 'Cô dâu',
      bank: {
        accout: '19036383952013',
        qrCode: QRBride,
      },
    },
    {
      name: 'Phan Quang Điện',
      label: 'Chú rể',
      bank: {
        accout: '222340829',
        qrCode: QRGroom,
      },
    },
  ];

  const images = [Bride, Groom];

  return (
    <section id="brideAndGroom" ref={ref} className="container">
      <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
        {data.map(({ bank, label, name }, index) => (
          <Fragment key={index}>
            <motion.div
              initial={{
                opacity: 0,
                x: index === 0 ? -30 : 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
              viewport={{ once: true }}
              className={cn(
                'text-center lg:text-left',
                index === 0 && 'lg:text-right',
              )}
            >
              <Typography
                variant="h4"
                className="font-greatVibes text-rose-pink"
              >
                {name}
              </Typography>
              <Typography variant="h6" className="mt-4 font-sail">
                {label}
              </Typography>
              <Typography
                variant="sub"
                className="mt-1 font-semibold text-steel-gray"
              >
                STK: {bank.accout}
              </Typography>
              <div className="mt-4 aspect-square w-full max-w-[180px] overflow-hidden sm:max-w-[210px] xl:max-w-[250px]">
                <Image
                  src={bank.qrCode.src}
                  alt={name}
                  width={bank.qrCode.width}
                  height={bank.qrCode.height}
                  priority
                />
              </div>
            </motion.div>
            {index === 0 && (
              <div className="flex w-full max-w-[600px] flex-1 -space-x-8 sm:-space-x-14 xl:max-w-[800px]">
                {images.map((image, subIndex) => (
                  <motion.div
                    key={subIndex}
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
                    className="relative aspect-square w-full overflow-hidden rounded-full"
                  >
                    <Image
                      src={image.src}
                      alt={name}
                      width={image.width}
                      height={image.height}
                      priority
                      className="gride-and-groom-animate h-full w-full object-cover"
                    />
                    <div className="absolute left-1/2 top-1/2 aspect-square w-[calc(100%-1.5rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border sm:w-[calc(100%-3rem)]" />
                  </motion.div>
                ))}
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
};

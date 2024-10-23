import Image from 'next/image';
import { Fragment, useEffect } from 'react';

import { Typography } from '@/components/ui';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';
import { setTab } from '@/redux/features/configurationSlice';
import { useAppDispatch } from '@/redux/hooks';

import QRBride from '/public/images/home/bride-and-groom/qr-bride.jpg';
import QRGroom from '/public/images/home/bride-and-groom/qr-groom.jpg';

export const BrideAndGroom = () => {
  const dispatch = useAppDispatch();
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  });

  useEffect(() => {
    if (isIntersecting) {
      dispatch(setTab('brideAndGroom'));
    }
  }, [dispatch, isIntersecting]);

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

  const images = [
    '/images/home/bride-and-groom/bride.png',
    '/images/home/bride-and-groom/groom.png',
  ];

  return (
    <section id="brideAndGroom" ref={ref} className="container">
      <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
        {data.map(({ bank, label, name }, index) => (
          <Fragment key={index}>
            <div
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
                />
              </div>
            </div>
            {index === 0 && (
              <div className="flex w-full max-w-[600px] flex-1 -space-x-8 sm:-space-x-14 xl:max-w-[800px]">
                {images.map((image, subIndex) => (
                  <div
                    key={subIndex}
                    className="relative aspect-square w-full overflow-hidden rounded-full"
                  >
                    <Image
                      src={image}
                      alt={name}
                      fill
                      className="gride-and-groom-animate h-full w-full object-cover"
                    />
                    <div className="absolute left-1/2 top-1/2 aspect-square w-[calc(100%-1.5rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border sm:w-[calc(100%-3rem)]" />
                  </div>
                ))}
              </div>
            )}
            {/* <div className="w-full max-w-[300px] sm:max-w-full lg:max-w-[380px]">
              
            </div> */}
          </Fragment>
        ))}
      </div>
    </section>
  );
};

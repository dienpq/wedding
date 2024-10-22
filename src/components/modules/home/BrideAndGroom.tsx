import Image from 'next/image';

import { Typography } from '@/components/ui';
import { cn } from '@/lib/utils';

import QRBride from '/public/images/home/bride-and-groom/qr-bride.jpg';
import QRGroom from '/public/images/home/bride-and-groom/qr-groom.jpg';

export const BrideAndGroom = () => {
  const data = [
    {
      name: 'Vũ Thị Anh',
      label: 'Cô dâu',
      bank: {
        accout: '19036383952013',
        qrCode: QRBride,
      },
      image: '/images/home/bride-and-groom/bride.png',
    },
    {
      name: 'Phan Quang Điện',
      label: 'Chú rể',
      bank: {
        accout: '222340829',
        qrCode: QRGroom,
      },
      image: '/images/home/bride-and-groom/groom.png',
    },
  ];

  return (
    <section className="container">
      <div className="flex flex-col justify-center -space-y-20 sm:flex-row sm:-space-x-16 sm:space-y-0">
        {data.map(({ bank, image, label, name }, index) => (
          <div
            key={index}
            className={cn(
              'flex w-full flex-col flex-wrap items-center justify-center gap-8 sm:flex-row lg:flex-nowrap lg:justify-end',
              index !== 0 && 'flex-col-reverse sm:flex-row-reverse',
            )}
          >
            <div
              className={cn(
                'flex w-full flex-1 flex-col items-center justify-center lg:min-w-[250px] lg:items-start',
                index === 0 && 'lg:items-end',
              )}
            >
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
              </div>
              <div className="mt-4 w-full max-w-[200px]">
                <Image
                  src={bank.qrCode.src}
                  alt={name}
                  width={bank.qrCode.width}
                  height={bank.qrCode.height}
                />
              </div>
            </div>
            <div className="w-full max-w-[300px] sm:max-w-full lg:max-w-[380px]">
              <div className="relative aspect-square w-full overflow-hidden rounded-full">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="gride-and-groom-animate h-full w-full object-cover"
                />
                <div className="absolute left-1/2 top-1/2 aspect-square w-[calc(100%-3rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

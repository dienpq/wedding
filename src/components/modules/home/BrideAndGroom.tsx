import Image from 'next/image';

import { Typography } from '@/components/ui';

import QRBride from '/public/images/home/bride-and-groom/qr-bride.jpg';
import QRGroom from '/public/images/home/bride-and-groom/qr-groom.jpg';

export const BrideAndGroom = () => {
  return (
    <section className="px-[100px]">
      <div className="flex justify-center gap-x-8">
        <div className="flex flex-col items-end justify-center">
          <div className="text-right">
            <Typography variant="h5" className="font-greatVibes text-rose-pink">
              Vũ Thị Anh
            </Typography>
            <Typography className="mt-4 font-sail text-lg">Cô dâu</Typography>
            <Typography className="mt-1 font-semibold text-steel-gray">
              STK: 19036383952013
            </Typography>
          </div>
          <div className="w-[200px]">
            <Image
              src={QRBride}
              alt="Bank Acount Bride"
              width={QRBride.width}
              height={QRBride.height}
            />
          </div>
        </div>
        <div className="relative h-[440px] w-[800px]">
          <div className="absolute left-0 top-0">
            <div className="relative">
              <div className="relative aspect-square w-[440px] overflow-hidden rounded-full">
                <Image
                  src="/images/home/bride-and-groom/bride.png"
                  alt="Bride"
                  fill
                  className="gride-and-groom-animate h-full w-full object-cover"
                />
              </div>
              <div className="absolute left-5 top-5 size-[400px] rounded-full border" />
            </div>
          </div>
          <div className="absolute right-0 top-0">
            <div className="relative">
              <div className="relative aspect-square w-[440px] overflow-hidden rounded-full">
                <Image
                  src="/images/home/bride-and-groom/groom.png"
                  alt="Bride"
                  fill
                  className="gride-and-groom-animate h-full w-full object-cover"
                />
              </div>
              <div className="absolute left-5 top-5 size-[400px] rounded-full border" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center">
          <div className="text-left">
            <Typography variant="h5" className="font-greatVibes text-rose-pink">
              Phan Quang Điện
            </Typography>
            <Typography className="mt-4 font-sail text-lg">Chú rể</Typography>
            <Typography className="mt-1 font-semibold text-steel-gray">
              STK: 222340829
            </Typography>
          </div>
          <div className="w-[200px]">
            <Image
              src={QRGroom}
              alt="Bank Acount Bride"
              width={QRGroom.width}
              height={QRGroom.height}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

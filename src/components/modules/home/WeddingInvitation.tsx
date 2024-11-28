import { motion } from 'framer-motion';
import { ArrowBigDownDashIcon } from 'lucide-react';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

import { cn } from '@/lib/utils';

import PreLoader from '/public/gif/preloader.gif';
import ShapeLeft from '/public/images/footer/shape-left.svg';
import ShapeRight from '/public/images/footer/shape-right.svg';

interface WeddingInvitationProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
}
export const WeddingInvitation = ({
  open,
  loading,
  setOpen,
}: WeddingInvitationProps) => {
  const handleOpen = () => {
    setOpen(true);

    const button = document.getElementById('audio-wedding');
    if (button) {
      button.click();
    }
  };

  return (
    <>
      {!open && (
        <div className="fixed left-1/2 top-1/2 z-50 flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center bg-olive-gray text-white">
          <div className="absolute z-10 flex h-full w-full flex-col items-center justify-center">
            <div className="mb-6 sm:mb-10">
              <h1 className="font-jost text-xl sm:text-3xl">Thư mời cưới</h1>
            </div>
            <Image
              src={PreLoader}
              alt="Preloader"
              priority
              quality={100}
              className="size-[120px] sm:size-[150px]"
            />
            <div className="my-6 flex w-full max-w-52 gap-2.5 max-sm:flex-col sm:my-8 sm:max-w-96 sm:items-center sm:gap-5">
              <h3 className="text-left font-monteCarlo text-4xl font-semibold sm:text-5xl">
                Phan Điện
              </h3>
              <p className="text-center">❤️</p>
              <h3 className="text-right font-monteCarlo text-4xl font-semibold sm:text-5xl">
                Vũ Anh
              </h3>
            </div>

            <div className="mb-4 space-y-2 border-x px-6 py-1 text-center sm:mb-8 sm:space-y-2.5">
              <h4>Tháng 12</h4>
              <h4 className="text-4xl font-bold">28</h4>
              <h4>2024</h4>
            </div>

            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className={cn(loading && 'opacity-0')}
            >
              <ArrowBigDownDashIcon />
            </motion.div>

            <motion.button
              type="button"
              initial={{ opacity: loading ? 0 : 1 }}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ repeat: Infinity, duration: 1 }}
              onClick={handleOpen}
              disabled={loading}
              className="mt-2.5 text-lg"
            >
              Mở thư
            </motion.button>
          </div>

          <Image
            src={ShapeLeft}
            alt="Shape"
            className="absolute bottom-0 left-0 w-28 sm:w-36 lg:w-52"
            priority
            quality={100}
          />

          <Image
            src={ShapeRight}
            alt="Shape"
            className="absolute bottom-0 right-0 w-28 sm:w-36 lg:w-52"
            priority
            quality={100}
          />
        </div>
      )}

      <motion.div
        initial={{ width: '50%' }}
        animate={{ width: open ? 0 : '50%' }}
        transition={{ duration: 2, ease: [0.4, 0.3, 0.2, 1] }}
        className="fixed left-0 top-0 z-40 h-screen bg-olive-gray"
      />
      <motion.div
        initial={{ width: '50%' }}
        animate={{ width: open ? 0 : '50%' }}
        transition={{ duration: 2, ease: [0.4, 0.3, 0.2, 1] }}
        className="fixed right-0 top-0 z-40 h-screen bg-olive-gray"
      />
    </>
  );
};

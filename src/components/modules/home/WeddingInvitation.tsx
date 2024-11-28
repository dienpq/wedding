import { motion } from 'framer-motion';
import { ArrowBigDownDashIcon } from 'lucide-react';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

import { Typography, typographyVariants } from '@/components/ui';
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
          <div className="absolute z-10 flex h-full w-full flex-col items-center justify-center pb-12">
            <div className="mb-6 sm:mb-10">
              <Typography variant="h5" className="font-jost font-medium">
                Thư mời cưới
              </Typography>
            </div>
            <Image
              src={PreLoader}
              alt="Preloader"
              priority
              quality={100}
              className="size-[120px] sm:size-[150px]"
            />
            <div className="my-6 flex w-full max-w-64 gap-2.5 max-sm:flex-col sm:my-16 sm:max-w-[500px] sm:items-center sm:justify-between sm:gap-5 lg:max-w-[600px]">
              <Typography
                variant="h2"
                className="text-left font-monteCarlo font-semibold tracking-widest"
                asChild
              >
                <motion.h3
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  Phan Điện
                </motion.h3>
              </Typography>
              <Typography variant="h3" className="text-center" asChild>
                <motion.span
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="mt-1"
                >
                  ❤️
                </motion.span>
              </Typography>
              <Typography
                variant="h2"
                className="text-right font-monteCarlo font-semibold tracking-widest"
                asChild
              >
                <motion.h3
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  Vũ Anh
                </motion.h3>
              </Typography>
            </div>

            <div className="mb-4 flex items-center gap-x-6 sm:mb-8 sm:gap-x-10">
              <Typography
                variant="h6"
                className="w-16 text-right font-semibold"
                asChild
              >
                <motion.h3
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  10:00
                </motion.h3>
              </Typography>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="space-y-2 border-x px-6 py-1 text-center sm:space-y-2.5"
              >
                <Typography variant="h6">Tháng 12</Typography>
                <Typography variant="h2" className="font-bold">
                  28
                </Typography>
                <Typography variant="h6">2024</Typography>
              </motion.div>
              <Typography
                variant="h6"
                className="w-16 text-left font-semibold"
                asChild
              >
                <motion.h3
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  Thứ 7
                </motion.h3>
              </Typography>
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
              transition={{
                repeat: Infinity,
                duration: 1,
              }}
              onClick={handleOpen}
              disabled={loading}
              className={cn('mt-2.5', typographyVariants({ variant: 'h6' }))}
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

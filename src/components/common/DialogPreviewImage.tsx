'use client';

import FadePlugin from 'embla-carousel-fade';
import { ArrowLeftIcon, ArrowRightIcon, XIcon } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import { Dispatch, ReactNode, SetStateAction, isValidElement } from 'react';

import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  Typography,
} from '@/components/ui';
import { useCarousel } from '@/hooks';

interface DialogPreviewImageProps {
  open: number;
  setOpen: Dispatch<SetStateAction<number>>;
  data?: Array<StaticImageData | ReactNode>;
}

export const DialogPreviewImage = ({
  open = 0,
  setOpen,
  data = [],
}: DialogPreviewImageProps) => {
  const {
    setApi,
    selectedIndex,
    scrollSnaps,
    handlePrevious,
    handleNext,
    canScrollNext,
    canScrollPrev,
  } = useCarousel();

  const handleClose = () => {
    setOpen(0);
  };

  return (
    <Dialog open={!!open}>
      <DialogContent
        hasClose={false}
        className="h-full max-w-full !rounded-none border-none bg-transparent text-white !outline-none"
      >
        <DialogHeader>
          <DialogTitle />
          <DialogDescription />
        </DialogHeader>
        <div className="absolute left-4 top-4 z-20">
          {!!scrollSnaps.length && (
            <Typography variant="sub" className="tracking-widest">
              {selectedIndex + 1}/{scrollSnaps.length}
            </Typography>
          )}
        </div>
        <div className="absolute right-4 top-4 z-20">
          <Button variant="ghost" size="icon" onClick={handleClose}>
            <XIcon />
          </Button>
        </div>
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
            align: 'center',
            startIndex: open - 1,
          }}
          plugins={[FadePlugin()]}
          className="h-full w-full"
          onClick={handleClose}
        >
          <CarouselContent>
            {data.map((item, index) => (
              <CarouselItem
                key={index}
                className="flex h-[calc(100vh-3rem)] items-center justify-center"
              >
                {typeof item === 'object' &&
                  item !== null &&
                  'src' in item &&
                  'width' in item &&
                  'height' in item && (
                    <div
                      className="max-w-[520px] cursor-grab"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <Image
                        src={item.src}
                        alt={`Album ${index + 1}`}
                        width={item.width}
                        height={item.height}
                        priority
                      />
                    </div>
                  )}
                {isValidElement(item) && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    {item}
                  </div>
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {canScrollPrev && (
          <div className="absolute bottom-6 left-6 z-20 sm:bottom-1/2 sm:translate-y-1/2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-black/40 md:size-14"
              onClick={handlePrevious}
              disabled={!canScrollPrev}
            >
              <ArrowLeftIcon className="md:size-8" />
            </Button>
          </div>
        )}

        {canScrollNext && (
          <div className="absolute bottom-6 right-6 z-20 sm:bottom-1/2 sm:translate-y-1/2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-black/40 md:size-14"
              onClick={handleNext}
              disabled={!canScrollNext}
            >
              <ArrowRightIcon className="md:size-8" />
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

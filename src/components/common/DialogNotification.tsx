'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Confetti, { ConfettiConfig } from 'react-dom-confetti';

import { cn } from '@/lib/utils';

import { Dialog, DialogContent, DialogHeader, Typography } from '../ui';

export type NotificationType = {
  title: string;
  description: string;
  succes: boolean;
};

interface DialogNotificationProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  data?: NotificationType;
}

export const DialogNotification = ({
  data,
  open,
  setOpen,
}: DialogNotificationProps) => {
  const [isExploding, setIsExploding] = useState<boolean>(open);

  useEffect(() => {
    if (open) {
      setIsExploding(true);
    } else {
      setIsExploding(false);
    }
  }, [open]);

  const config: ConfettiConfig = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 100,
    dragFriction: 0.14,
    duration: 10000,
    stagger: 3,
    width: '10px',
    height: '10px',
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
  };

  useEffect(() => {}, [open]);

  return (
    <>
      <div className="absolute left-1/2 top-[calc(50%-8rem)] z-[1000] -translate-x-1/2 -translate-y-1/2">
        <Confetti active={isExploding} config={config} />
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="py-10 text-center">
          <div className="absolute left-1/2 top-8 z-[1000] -translate-x-1/2">
            <Confetti active={isExploding} config={config} />
          </div>
          {data?.succes ? (
            <Typography variant="h1">🎊</Typography>
          ) : (
            <Typography variant="h4">❌</Typography>
          )}

          <DialogHeader>
            <Typography
              variant="h6"
              className={cn(
                'whitespace-pre-wrap text-center font-bold text-green-500',
                !data?.succes && 'text-red-500',
              )}
            >
              {data?.title}
            </Typography>
          </DialogHeader>
          <div className="mt-3 whitespace-pre-wrap text-center text-gray-600">
            <Typography className="font-medium">{data?.description}</Typography>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Confetti, { ConfettiConfig } from 'react-dom-confetti';

import { useDevices } from '@/hooks';
import { cn } from '@/lib/utils';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  Typography,
} from '../ui';

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
  const { isSmall } = useDevices();

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
    dragFriction: 0.12,
    duration: 10000,
    stagger: 3,
    width: '10px',
    height: '10px',
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
  };

  return (
    <>
      {isSmall && data?.succes && (
        <div className="absolute left-1/2 top-[calc(50%-8rem)] z-[1000] -translate-x-1/2 -translate-y-1/2 bg-red-50">
          <Confetti active={isExploding} config={config} />
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="py-10 text-center">
          <DialogHeader className="hidden">
            <DialogTitle />
            <DialogDescription />
          </DialogHeader>
          {data?.succes ? (
            <Typography variant="h1">🎊</Typography>
          ) : (
            <Typography variant="h4">❌</Typography>
          )}
          <div className="space-y-6 text-center text-gray-600">
            <Typography
              variant="h6"
              className={cn(
                'whitespace-pre-wrap font-bold text-green-500',
                !data?.succes && 'text-red-500',
              )}
            >
              {data?.title}
            </Typography>
            <Typography className="whitespace-pre-wrap font-medium">
              {data?.description}
            </Typography>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

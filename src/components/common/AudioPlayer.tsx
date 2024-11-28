import { Volume2Icon } from 'lucide-react';
import React, { useCallback, useRef, useState } from 'react';

import { Button } from '../ui';

export const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const togglePlayback = useCallback(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  return (
    <>
      <Button
        id="audio-wedding"
        name="audio"
        variant="ghost"
        className="fixed bottom-6 left-6 z-30 flex size-10 items-center justify-center rounded-full bg-beige-rose p-0 hover:bg-beige-rose-foreground sm:bottom-8 sm:left-12 sm:size-14"
        onClick={togglePlayback}
      >
        <Volume2Icon className="size-4 text-white sm:size-6" />
        {isPlaying && (
          <div className="absolute -z-[1] size-8 animate-ping rounded-full bg-beige-rose sm:size-10" />
        )}
      </Button>
      <audio ref={audioRef} autoPlay loop src="/audio/i-do.mp3" />
    </>
  );
};

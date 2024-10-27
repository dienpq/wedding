import { Volume2Icon } from 'lucide-react';
import React, { useRef, useState } from 'react';

export const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <button
        name="audio"
        className="fixed bottom-6 left-6 z-30 flex size-10 items-center justify-center rounded-full bg-beige-rose sm:bottom-8 sm:left-12 sm:size-14"
        onClick={togglePlayback}
      >
        <Volume2Icon className="size-5 text-white sm:size-6" />
      </button>
      <audio ref={audioRef} autoPlay loop src="/audio/i-do.mp3" />
    </>
  );
};

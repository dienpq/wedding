'use client';

import { Album } from './Album';
import { BrideAndGroom } from './BrideAndGroom';
import { Event } from './Event';
import { LoveStory } from './LoveStory';
import { SaveTheDate } from './SaveTheDate';
import { SendWishes } from './SendWishes';
import { VideoWedding } from './VideoWedding';

export const Home = () => {
  return (
    <div className="space-y-16 sm:space-y-24 xl:space-y-32">
      <SaveTheDate />
      <BrideAndGroom />
      <VideoWedding />
      <LoveStory />
      <Album />
      <SendWishes />
      <Event />
    </div>
  );
};

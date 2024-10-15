'use client';

import { Album } from './Album';
import { BrideAndGroom } from './BrideAndGroom';
import { Event } from './Event';
import { LoveStory } from './LoveStory';
import { SaveTheDate } from './SaveTheDate';
import { SendWishes } from './SendWishes';

export const Home = () => {
  return (
    <>
      <SaveTheDate />
      <BrideAndGroom />
      <LoveStory />
      <Album />
      <SendWishes />
      <Event />
    </>
  );
};

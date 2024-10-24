'use client';

import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import {
  AspectRatio,
  Button,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui';
import { useDevices } from '@/hooks';
import { cn } from '@/lib/utils';
import { useAppSelector } from '@/redux/hooks';
import { TabType } from '@/types';

import Logo from '/public/images/logo.png';

const links: { label: string; id: TabType }[] = [
  {
    label: 'Thời gian',
    id: 'saveTheDate',
  },
  {
    label: 'Cô dâu & Chú rể',
    id: 'brideAndGroom',
  },
  {
    label: 'Câu chuyện tình yêu',
    id: 'loveStory',
  },
  {
    label: 'Album',
    id: 'album',
  },
  {
    label: 'Gửi lời chúc',
    id: 'sendWishes',
  },
  {
    label: 'Sự kiện',
    id: 'event',
  },
];

export const Navigation = () => {
  const { isMedium } = useDevices();

  const tab = useAppSelector((state) => state.configuration.tab);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: TabType,
  ) => {
    e.preventDefault();

    const targetElement = document.getElementById(id);

    if (targetElement) {
      const yOffset = isMedium ? -152 : -100;
      const yPosition =
        targetElement.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({
        top: yPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <nav className="hidden md:flex">
        {links.map(({ label, id }) => (
          <div key={id} className="group relative">
            <Button
              variant="link"
              size="lg"
              className="px-3.5 hover:no-underline"
              asChild
            >
              <Link href={`#${id}`} onClick={(e) => handleClick(e, id)}>
                {label}
              </Link>
            </Button>
            <div
              className={cn(
                'absolute inset-x-1/2 bottom-0 size-0.5 -translate-x-1/2 bg-primary opacity-0 duration-200 group-hover:w-full group-hover:opacity-100',
                tab === id && 'w-full opacity-100',
              )}
            />
          </div>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger className="flex md:hidden" asChild>
          <Button size="icon">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="/" className="w-full">
            <AspectRatio ratio={Logo.width / Logo.height}>
              <Image
                src={Logo.src}
                alt="Wedding Logo"
                className="rounded-md object-cover"
                fill
              />
            </AspectRatio>
          </Link>
          <SheetHeader className="mt-1.5 items-center">
            <SheetTitle>Phan Điện ❤️ Vũ Anh</SheetTitle>
          </SheetHeader>
          <div className="mt-6 flex flex-col">
            {links.map(({ label, id }, index) => (
              <Button
                variant={tab === id ? 'default' : 'ghost'}
                size="lg"
                key={index}
                asChild
              >
                <Link href={`#${id}`} onClick={(e) => handleClick(e, id)}>
                  {label}
                </Link>
              </Button>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

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

import Logo from '/public/images/logo.png';

const links = [
  {
    label: 'Thời gian',
    url: '',
  },
  {
    label: 'Cô dâu & Chú rể',
    url: '',
  },
  {
    label: 'Câu chuyện tình yêu',
    url: '',
  },
  {
    label: 'Album',
    url: '',
  },
  {
    label: 'Gửi lời chúc',
    url: '',
  },
  {
    label: 'Sự kiện',
    url: '',
  },
];

export const Navigation = () => {
  return (
    <>
      <nav className="hidden md:block">
        {links.map(({ label, url }, index) => (
          <Button
            variant="ghost"
            key={index}
            asChild
            size="lg"
            className="px-4"
          >
            <Link href={url}>{label}</Link>
          </Button>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger className="block md:hidden" asChild>
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
            {links.map(({ label, url }, index) => (
              <Button variant="ghost" size="lg" key={index} asChild>
                <Link href={url}>{label}</Link>
              </Button>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

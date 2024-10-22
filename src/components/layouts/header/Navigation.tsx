import { MenuIcon } from 'lucide-react';
import Link from 'next/link';

import { Button, Sheet, SheetContent, SheetTrigger } from '@/components/ui';

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
      <nav className="hidden xl:block">
        {links.map(({ label, url }, index) => (
          <Button
            variant="link"
            key={index}
            asChild
            className="xl:px-3 2xl:px-4"
          >
            <Link href={url}>{label}</Link>
          </Button>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger className="block xl:hidden" asChild>
          <Button size="icon">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="flex flex-col">
            {links.map(({ label, url }, index) => (
              <Button
                variant="ghost"
                key={index}
                asChild
                className="xl:px-3 2xl:px-4"
              >
                <Link href={url}>{label}</Link>
              </Button>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

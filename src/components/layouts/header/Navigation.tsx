import Link from 'next/link';

import { Button, typographyVariants } from '@/components/ui';

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
    <nav>
      {links.map(({ label, url }, index) => (
        <Button
          variant="link"
          key={index}
          className={typographyVariants({ variant: 'h5' })}
          asChild
        >
          <Link href={url}>{label}</Link>
        </Button>
      ))}
    </nav>
  );
};

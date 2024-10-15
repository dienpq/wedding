import Link from 'next/link';

import { Button } from '@/components/ui';

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
        <Button variant="link" key={index} asChild>
          <Link href={url}>{label}</Link>
        </Button>
      ))}
    </nav>
  );
};

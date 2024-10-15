import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { SectionTitle } from '@/components/common';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Typography,
  typographyVariants,
} from '@/components/ui';
import { cn } from '@/lib/utils';

const data = [
  {
    image: '/images/home/event/1.jpg',
    title: 'Lễ Ăn Hỏi',
    time: '10:00 AM - Thứ 5, 26/12/2024',
    address: 'Xóm Mỹ Hoá, Xã Kim Mỹ, Huyện Kim Sơn,Tỉnh Ninh Bình',
    map: 'https://maps.app.goo.gl/yXFpFY4uQTVUnUsu9',
  },
  {
    image: '/images/home/event/2.jpg',
    title: 'Tiệc Cưới Nhà Gái',
    time: '16:30 AM - Thứ 6, 27/12/2024',
    address: 'Xóm Mỹ Hoá, Xã Kim Mỹ, Huyện Kim Sơn,Tỉnh Ninh Bình',
    map: 'https://maps.app.goo.gl/yXFpFY4uQTVUnUsu9',
  },
  {
    image: '/images/home/event/3.jpg',
    title: 'Lễ Thành Hôn',
    time: '10:00 AM - Thứ 7, 28/12/2024',
    address: 'Xóm 7C, Xã Cồn Thoi, Huyện Kim Sơn, Tỉnh Ninh Bình',
    map: 'https://maps.app.goo.gl/jzVWantXoxoYzA7r7',
  },
];

export const Event = () => {
  return (
    <section>
      <SectionTitle title="Đám cưới của chúng tôi" description="Where & When" />
      <div className="mx-auto mt-20 grid max-w-[1400px] grid-cols-3 gap-x-8">
        {data.map(({ image, time, title, address, map }, index) => (
          <div key={index} className="relative overflow-hidden rounded-xl">
            <div className="relative aspect-[4/6] w-full">
              <Image
                src={image}
                alt={title}
                fill
                className="h-full w-full object-cover"
              />
            </div>
            <Card className="absolute bottom-4 left-4 w-[calc(100%-2rem)] px-8">
              <CardHeader className="text-center">
                <CardTitle
                  className={cn(typographyVariants({ variant: 'h6' }))}
                >
                  {title}
                </CardTitle>
                <CardDescription className="font-medium">
                  {time}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Typography className="text-center">{address}</Typography>
              </CardContent>
              <CardFooter className="justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-beige-rose"
                  asChild
                >
                  <Link href={map} target="_blank">
                    Xem bản đồ <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

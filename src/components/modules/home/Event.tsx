import { motion } from 'framer-motion';
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

import Event1 from '/public/images/home/event/1.jpg';
import Event2 from '/public/images/home/event/2.jpg';
import Event3 from '/public/images/home/event/3.jpg';

const data = [
  {
    image: Event1,
    title: 'Lễ Ăn Hỏi',
    time: '10:00 - Thứ 5, 26/12/2024',
    address: 'Xóm Mỹ Hoá, Xã Kim Mỹ, Huyện Kim Sơn,\nTỉnh Ninh Bình',
    map: 'https://maps.app.goo.gl/yXFpFY4uQTVUnUsu9',
  },
  {
    image: Event2,
    title: 'Lễ Vu Quy',
    time: '16:30 - Thứ 6, 27/12/2024',
    address: 'Xóm Mỹ Hoá, Xã Kim Mỹ, Huyện Kim Sơn,\nTỉnh Ninh Bình',
    map: 'https://maps.app.goo.gl/yXFpFY4uQTVUnUsu9',
  },
  {
    image: Event3,
    title: 'Lễ Thành Hôn',
    time: '10:00 - Thứ 7, 28/12/2024',
    address: 'Xóm 7C, Xã Cồn Thoi, Huyện Kim Sơn,\nTỉnh Ninh Bình',
    map: 'https://maps.app.goo.gl/jzVWantXoxoYzA7r7',
  },
];

export const Event = () => {
  return (
    <section id="event" className="container">
      <SectionTitle title="Đám cưới của chúng tôi" description="Where & When" />
      <div className="-mx-4 -mb-4 mt-8 flex flex-wrap justify-center lg:mt-16">
        {data.map(({ image, time, title, address, map }, index) => (
          <div key={index} className="basis-full sm:basis-1/2 lg:basis-1/3">
            <div className="relative overflow-hidden rounded-xl p-4">
              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                className="will-change-opacity"
              >
                <Image
                  src={image}
                  alt={title}
                  priority
                  className="aspect-[2/3] w-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.75,
                }}
                viewport={{ once: true }}
                className="absolute bottom-8 left-8 w-[calc(100%-4rem)] will-change-transform-opacity"
              >
                <Card>
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
                    <Typography className="whitespace-pre-wrap text-center">
                      {address}
                    </Typography>
                  </CardContent>
                  <CardFooter className="justify-center">
                    <Button
                      name={`map-${index + 1}`}
                      variant="outline"
                      size="lg"
                      asChild
                    >
                      <Link href={map} target="_blank">
                        Xem bản đồ <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

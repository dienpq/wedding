import Image from 'next/image';

export const Album = () => {
  return (
    <section>
      <div className="container grid grid-cols-3 gap-8">
        <div className="space-y-8">
          <div className="relative aspect-[6/4] w-full">
            <Image
              src="/images/home/album/1.jpg"
              alt="Image 1"
              fill
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative aspect-square w-full">
            <Image
              src="/images/home/album/5.jpg"
              alt="Image 5"
              fill
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="relative h-full w-full">
          <Image
            src="/images/home/album/2.jpg"
            alt="Image 2"
            fill
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-8">
          <div className="relative aspect-[6/4] w-full">
            <Image
              src="/images/home/album/3.jpg"
              alt="Image 3"
              fill
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative aspect-square w-full">
            <Image
              src="/images/home/album/4.jpg"
              alt="Image 4"
              fill
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

import Image from 'next/image';

export const Album = () => {
  const data = [
    '/images/home/album/1.jpg',
    '/images/home/album/2.jpg',
    '/images/home/album/3.jpg',
    '/images/home/album/4.jpg',
    '/images/home/album/5.jpg',
    '/images/home/album/6.jpg',
  ];

  return (
    <section className="container">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:gap-8">
        {data.map((image, index) => (
          <div key={index} className="relative aspect-[3/4] w-full">
            <Image
              src={image}
              alt={`Wedding ${index + 1}`}
              fill
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

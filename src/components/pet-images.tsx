'use client'
import React from 'react';
import { Image as Img } from '@/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/swiper-bundle.css';
import 'swiper/scss/navigation';
import 'swiper/scss/thumbs';
import SwiperCore from 'swiper';
import { Navigation, Autoplay, Thumbs, FreeMode } from 'swiper/modules';

SwiperCore.use([Navigation, Autoplay, Thumbs, FreeMode]);

interface PetImagesProps {
  images: Img[];
}

export const PetImages: React.FC<PetImagesProps> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperCore | null>(null);

  if (!images.length) {
    return <div className="flex justify-center"> Images not found </div>
  }

  return (
    <div className="w-full max-w-sm mx-auto">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        className="h-96 mb-2"
        modules={[Navigation, Thumbs]}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <Image
              src={image.url}
              alt={`Selected Image ${image.id}`}
              className="rounded-t"
              width={380}
              height={340}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="h-26 max-h-20"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id} className="cursor-pointer">
            <Image
              src={image.url}
              alt={`Thumbnail Image ${image.id}`}
              className="rounded"
              width={120}
              height={100}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

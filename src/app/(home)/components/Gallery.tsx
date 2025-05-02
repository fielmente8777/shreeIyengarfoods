"use client";
import { GalleryDataProps } from "@/@types/types";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SectionWithContainer } from "@/component/sectionComponent";
import MainHeading from "@/component/Heading/MainHeading";
import Link from "next/link";
const Gallery: React.FC<GalleryDataProps> = ({
  title,
  images,
  subTitle,
  icon,
  label,
  href,
}) => {
  const gridPattern = [
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-2",
    "col-span-2 row-span-1",
    "col-span-2 row-span-2",
    "col-span-2 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
    "col-span-2 row-span-2",
  ];

  return (
    <SectionWithContainer sectionId="gallery" sectionClassName="bg-bg common">
      <div className="flex flex-col items-center justify-center w-full lg:gap-14 gap-6 commonSwiper">
        <div className="w-full flex items-center justify-center flex-col gap-6">
          <div className="flex items-center px-2 py-1 gap-2 bg-secondary">
            <span>{icon}</span>
            <MainHeading
              title={title}
              h2
              className="text-center text-primary font-medium"
            />
          </div>
          <MainHeading
            title={subTitle}
            h3
            className="text-center text-primary font-semibold mendl md:text-[2.5rem] text-[2rem]/[2.5rem]"
          />
        </div>
        <div className="lg:grid hidden grid-cols-4 gap-6 auto-rows-[15.8rem] grid-flow-row w-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-full h-full aspect-auto relative rounded-lg overflow-hidden ${gridPattern[index]}`}
            >
              <Image
                src={image}
                alt={title + index}
                fill
                priority
                loading="eager"
                className={`object-cover ${index === 5 ? "object-top" : index === 8 ? "object-center" : index === 10 ? "object-bottom" : ""}`}
              />
            </div>
          ))}
        </div>
        <div className="w-full lg:hidden relative common">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            modules={[Pagination]}
            pagination={{ clickable: true, el: ".pagination_2" }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={index}
                className="w-full lg:aspect-[4/3] aspect-[4/3] relative rounded-lg overflow-hidden"
              >
                <Image
                  src={image}
                  alt={title + index}
                  fill
                  className="object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="pagination_2 flex items-center justify-center gap-1 w-full lg:hidden"></div>

        <Link
          href={href}
          target="_blank"
          className="bg-ternory text-white py-3 px-6 rounded-lg w-fit hover:bg-white hover:text-ternory text-center description1 avenir mt-2"
        >
          {label}
        </Link>
      </div>
    </SectionWithContainer>
  );
};

export default Gallery;

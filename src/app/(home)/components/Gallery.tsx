"use client";
import { GalleryDataProps } from "@/@types/types";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SectionWithContainer } from "@/component/sectionComponent";
import MainHeading from "@/component/Heading/MainHeading";
import { OutLineBtnNext, OutLineBtnPrev } from "@/utils/icons/icons";
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
    <SectionWithContainer
      sectionId="gallery"
      sectionClassName="bg-bg"
    >
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
            className="text-primary text-center mendl md:text-[2.5rem] text-[2rem]/[2.5rem]"
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
        <div className="w-full lg:hidden relative ">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            modules={[Pagination, Navigation]}
            navigation={{
              nextEl: ".gallery_next",
              prevEl: ".gallery_prev",
            }}
            pagination={{ clickable: true, el: ".pagination_3" }}
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
          <button className="gallery_prev shadow-xl absolute -left-3 top-1/2 -translate-y-1/2 filter backdrop:blur-md w-12 aspect-square rounded-full bg-white text-clr2 flex items-center justify-center disabled:opacity-0 z-10">
            <OutLineBtnPrev />
          </button>
          <button className="gallery_next shadow-xl absolute -right-3 top-1/2 -translate-y-1/2 filter backdrop:blur-md w-12 aspect-square rounded-full bg-white text-clr2 flex items-center justify-center disabled:opacity-0 z-10">
            <OutLineBtnNext />
          </button>
        </div>
        <div className="pagination_3 flex items-center justify-center gap-1 w-full lg:hidden"></div>
        
        <Link
          href={href}
          className="bg-ternory text-white py-3 px-6 rounded-lg w-fit hover:bg-white hover:text-ternory text-center description1 avenir mt-2"
        >
          {label}
        </Link>
      </div>
    </SectionWithContainer>
  );
};

export default Gallery;

"use client";
import { FeaturesDataProps } from "@/@types/types";
import FeatureCard from "@/component/cards/FeatureCard";
import MainHeading from "@/component/Heading/MainHeading";
import Paragraph from "@/component/Paragraph/Paragraph";
import { SectionWithContainer } from "@/component/sectionComponent";

import { Swiper, SwiperSlide } from "swiper/react";

const Features: React.FC<FeaturesDataProps> = ({
  title,
  desc,
  cards,
  icon,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-bg1 border-b-[24px] border-secondary"
      sectionId="features"
    >
      <div className="flex flex-col gap-2 w-full overflow-hidden">
        <div className="flex items-center justify-center gap-2 bg-secondary py-1 px-2 w-fit mx-auto">
          <span>{icon}</span>
          <MainHeading
            h2
            title={title}
            className="text-primary text-center md:text-base text-sm"
          />
        </div>
        <Paragraph text={desc} className="text-center text-primary font-semibold mendl md:text-[2.5rem] text-[2rem]/[2.5rem]" />
        <div className="lg:grid hidden lg:grid-cols-3  grid-cols-1 gap-20  mt-12 relative">
          {cards.map((card) => (
            <FeatureCard key={card.id} {...card} />
          ))}
        </div>
        <div className="w-full mt-12 lg:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
            className=""
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id}>
                <FeatureCard key={card.id} {...card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Features;

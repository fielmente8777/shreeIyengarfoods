// "use client";
import { FeaturesDataProps } from "@/@types/types";
import FeatureCard from "@/component/cards/FeatureCard";
import MainHeading from "@/component/Heading/MainHeading";
import Paragraph from "@/component/Paragraph/Paragraph";
import { SectionWithContainer } from "@/component/sectionComponent";
// import { Swiper, SwiperSlide } from "swiper/react";

const Features: React.FC<FeaturesDataProps> = ({ title, desc, cards }) => {
  return (
    <SectionWithContainer sectionClassName="box_shadow" sectionId="features">
      <div className="flex flex-col gap-2 w-full overflow-hidden">
        <MainHeading
          title={title}
          className="text-tertiary text-center mediumHeading thiket"
        />
        <Paragraph text={desc} className="text-center lg:heading1" />
        <div className="grid lg:grid-cols-3  grid-cols-1 gap-20  mt-12 relative">
          {cards.map((card) => (
            <FeatureCard key={card.id} {...card} />
          ))}
          <div className="border-t-2 border-tertiary border-dashed w-full absolute top-[4.5rem] lg:block hidden"/>
        </div>
        {/* <div className="w-full mt-12 lg:hidden">
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
        </div> */}
      </div>
    </SectionWithContainer>
  );
};

export default Features;

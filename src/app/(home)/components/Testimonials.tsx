"use client";

import { testimonialProps } from "@/@types/types";
import { TestimonialCard } from "@/component/cards";
import MainHeading from "@/component/Heading/MainHeading";
import { SectionWithContainer } from "@/component/sectionComponent";
import SliderSwip from "@/component/SliderSwip";
import { OutLineBtnNext, OutLineBtnPrev } from "@/utils/icons/icons";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Testimonials: React.FC<testimonialProps> = ({
  title,
  subTitle,
  cards,
  icon,
}) => {
  return (
    <SectionWithContainer sectionId="testimonials" sectionClassName="bg-bg1 border-b-[24px] border-secondary">
      <div className="flex flex-col lg:gap-10 gap-6">
        <div className="flex flex-col lg:gap-6 gap-2">
          <div className="flex items-center gap-2 bg-secondary py-1 px-2 w-fit mx-auto">
            <span className="">{icon}</span>
            <MainHeading
              h2
              title={title}
              className="text-center text-primary"
            />
          </div>
          <MainHeading
            h3
            title={subTitle}
            className="text-center lg:largeHeading text-3xl text-primary uppercase mendl"
          />
        </div>
        <div className="w-full relative commonSwiper">
          <SliderSwip
            data={cards}
            modules={[Autoplay, Pagination, Navigation]}
            pagination={{ clickable: true, el: ".pagination" }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            navigation={{
              nextEl: ".testimonials_next",
              prevEl: ".testimonials_prev",
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
          >
            {(item) => <TestimonialCard {...item} />}
          </SliderSwip>
          <button className="testimonials_prev shadow-xl hidden absolute -left-6 top-1/2 -translate-y-1/2 filter backdrop:blur-md w-12 aspect-square rounded-full bg-white text-clr2 lg:flex items-center justify-center disabled:opacity-0 z-10">
            <OutLineBtnPrev />
          </button>
          <button className="testimonials_next shadow-xl hidden absolute -right-6 top-1/2 -translate-y-1/2 filter backdrop:blur-md w-12 aspect-square rounded-full bg-white text-clr2 lg:flex items-center justify-center disabled:opacity-0 z-10">
            <OutLineBtnNext />
          </button>
          <div className="pagination flex items-center justify-center gap-1 mt-4"></div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Testimonials;

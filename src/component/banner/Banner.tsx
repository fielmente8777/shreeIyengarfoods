import { JSX } from "react";
import { SectionWithContainer } from "../sectionComponent";
import Image from "next/image";

interface BannerProps {
  title: string;
  subTitle: string;
  src: string;
  icon: JSX.Element;
}
const Banner: React.FC<BannerProps> = ({ title, subTitle, src, icon }) => {
  return (
    <SectionWithContainer sectionClassName="relative">
      <div className="w-full  grid md:grid-cols-2 grid-cols-1 g gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="">{icon}</span>
            <p className="capitalize tracking-wide artifex text-dark font-medium heading1">
              {title}
            </p>
          </div>
          <h3 className="uppercase mendl text-primary largeHeading font-semibold">
            {subTitle}
          </h3>
        </div>
        <div className="relative w-full aspect-[4/2.6]">
          <Image src={src} alt="alt" fill className="object-contain" />
        </div>
      </div>
      <div className="absolute inset-0 bg-primary opacity-10" />
    </SectionWithContainer>
  );
};

export default Banner;

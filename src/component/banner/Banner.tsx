import { JSX } from "react";
import { Container, Section } from "../sectionComponent";
import Image from "next/image";
import { ArrowIcon, FoodPe } from "@/utils/icons/icons";
import Link from "next/link";

interface BannerProps {
  title: string;
  subTitle: string;
  src: string;
  icon: JSX.Element;
}
const Banner: React.FC<BannerProps> = ({ title, subTitle, src, icon }) => {
  return (
    <Section className="relative bgclass w-full md:aspect-[4/1.6] aspect-[4/6.4] bg-bg">
      <Image src="/bg3.png" alt="alt" fill className="" />
      <div className="absolute inset-0 ">
        <Container>
          <div className="w-full  grid md:grid-cols-2 grid-cols-1 g gap-4 items-center">
            <div className="flex flex-col gap-4 max-md:pt-4">
              <div className="flex items-center gap-2 bg-secondary py-1 px-2 w-fit">
                <span className="">{icon}</span>
                <p className="text-primary font-medium md:text-base text-sm">
                  {title}
                </p>
              </div>
              <h3 className="uppercase mendl text-primary lg:text-[4.5rem]/[4rem] text-[2.5rem]/[2.5rem] font-semibold ">
                {subTitle}
              </h3>
              <div className="relative w-full aspect-[4/3] md:hidden block">
              <Image src={src} alt="alt" fill className="object-contain" />
            </div>
              <div className="flex items-center gap-3 max-md:flex-col">
                <p className="md:text-[1.625rem] text-[1.2rem] font-semibold text-primary">
                  Order Now On
                </p>
                <span className="mt-2 max-md:hidden block">
                  <ArrowIcon />
                </span>
                <Link
                  href=""
                  className="bg-ternory py-3 px-6 rounded-lg w-fit md:text-[1.625rem] text-[1.2rem] font-semibold text-primary"
                >
                  <FoodPe />
                </Link>
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] md:aspect-[4/3.5] md:block hidden">
              <Image src={src} alt="alt" fill className="object-contain" />
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default Banner;

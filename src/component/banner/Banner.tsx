import { JSX } from "react";
import { Container, Section } from "../sectionComponent";
import Image from "next/image";
// import { FoodPe } from "@/utils/icons/icons";
import Link from "next/link";

interface BannerProps {
  title: string;
  subTitle: string;
  src: string;
  icon: JSX.Element;
  links: {
    lable: string;
    icon: JSX.Element;
    href: string;
  }[];
}
const Banner: React.FC<BannerProps> = ({
  title,
  subTitle,
  src,
  icon,
  links,
}) => {
  return (
    <Section className="relative bgclass w-full md:aspect-[4/1.6] aspect-[4/7.5] bg-bg overflow-hidden">
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
              <h1 className="uppercase mendl text-primary lg:text-[4.5rem]/[4.8rem] text-[2.5rem]/[2.5rem] font-semibold ">
                {subTitle}
              </h1>
              <div className="relative w-full aspect-[4/3.5] md:hidden block">
                <Image src={src} alt="alt" fill className="object-contai" />
              </div>
              <div className="flex flex-col max-md:items-center gap-4">
                <p className="md:text-[1.625rem] text-[1.2rem] mendl font-medium text-primary">
                  Order Now On
                </p>

                {/* <Link
                  href="https://wa.me/918595058959"
                  target="_blank"
                  className="bg-ternory hover:bg-primary duration-300 ease-in-out transition-all flex items-center gap-2 md:py-3  md:px-6 py-2 px-4 rounded-lg w-fit md:text-[1.625rem] text-[1.2rem] font-semibold text-primary"
                >
                  <FoodPe className="max-md:w-[6rem]" />
                </Link> */}
                <ul className="flex items-center max-md:flex-col gap-2 md:gap-4">
                  {links.map((link) => (
                    <li key={link.lable} className="flex items-center gap-2">
                      
                      <Link
                        href={link.href}
                        target="_blank"
                        className="flex w-[9.5rem]  h-12 rounded-sm  bg-white  items-center justify-center hover:bg-ternory hover:text-white duration-300 ease-in-out transition-all  hover:shadow-lg"
                      >
                        {link.icon}
                        <span className="sr-only">{link.lable}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
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

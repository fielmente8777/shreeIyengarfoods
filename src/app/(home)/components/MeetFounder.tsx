import { meetOurFounder } from "@/@types/types";
import { Section, SectionWithContainer } from "@/component/sectionComponent";
import Image from "next/image";
import Link from "next/link";

const MeetFounder: React.FC<meetOurFounder> = ({
  title,
  subtleTitle,
  desc,
  image,
  icon,
}) => {
  return (
    <Section className="bg-bg lg:py-[15rem]">
      <SectionWithContainer sectionClassName="bg-bg1 relative after:absolute after:w-[150px] after:h-[224px] after:bg-no-repeat after:bg-[url('/bg2.webp')] after:top-[-3.5rem] after:right-[-0rem] after:bg-contain">
        <div className="grid md:grid-cols-9 grid-cols-1 gap-6 ">
          <div className="md:col-span-3 col-span-1 relative w-full ">
            <div className="absolute w-full rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-bg1">
              <div className="w-full relative md:aspect-[4/6] aspect-square rounded-lg">
                <Image
                  src={image}
                  fill
                  alt="alt"
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-6 col-span-1">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 bg-secondary px-2 py-1 w-fit">
                <span className="">{icon}</span>
                <h2 className="capitalize tracking-wide artifex text-dark font-medium heading1">
                  {title}
                </h2>
              </div>
              <h3 className="mendl md:text-[2.5rem] text-[2rem]/[2.5rem] text-primary font-semibold">
                {subtleTitle}
              </h3>
              <p className="text-dark text-lg avenir">{desc}</p>
              <Link href="#contact-us" className="bg-ternory hover:bg-primary duration-300 ease-in-out transition-colors py-3 px-6 rounded-lg w-fit font-semibold text-white">Contact Us</Link>
            </div>
          </div>
        </div>
      </SectionWithContainer>
    </Section>
  );
};

export default MeetFounder;

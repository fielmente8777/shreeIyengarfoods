import Image from "next/image";
import Paragraph from "./Paragraph/Paragraph";
import { AboutUsDataProps } from "@/@types/types";
import Link from "next/link";
import { FoodPe } from "@/utils/icons/icons";

const TwoColGridCard: React.FC<AboutUsDataProps> = ({
  title,
  subtitle,
  desc,
  image,
  buttons,
  icon,
}) => {
  return (
    <>
      <div className={`lg:grid grid-cols-2 lg:items-center gap-6 lg:gap-24`}>
        <div className={`col-span-1 w-full lg:block hidden`}>
          <div className="relative w-full aspect-[4/5.6]">
            <Image src={image} alt="alt" fill className={"object-cover"} />
          </div>
        </div>
        <div className={` flex flex-col gap-4 col-span-1  `}>
          {title && (
            <div className="flex flex-col gap-2  w-full">
              <div className="flex items-center gap-2 bg-secondary px-2 py-1 w-fit ">
                <span className="">{icon}</span>
                <h2 className="capitalize tracking-wide artifex text-dark font-medium heading1">
                  {title}
                </h2>
              </div>
              <h3 className="max-sm:text-center mendl md:text-[2.5rem] text-[2rem]/[2.5rem] text-primary font-semibold">
                {subtitle}
              </h3>
            </div>
          )}
          <div className="relative w-full aspect-[4/5.9] lg:hidden">
            <Image src={image} alt="alt" fill className={"object-cover"} />
          </div>
          {desc && (
            <>
              {desc.map((item, index) => (
                <Paragraph text={item} key={index} className="description1" />
              ))}
            </>
          )}
          <div className="flex flex-col gap-2">
            <Link
              href={buttons[0].href}
              className="text-white bg-ternory w-fit text-base capitalize py-3 px-6 rounded-lg font-medium  transition-all duration-300 ease-in-out hover:scale-[1.01] active:scale-100"
            >
              <FoodPe />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwoColGridCard;

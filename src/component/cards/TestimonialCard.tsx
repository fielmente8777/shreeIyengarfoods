import Image from "next/image";
import MainHeading from "../Heading/MainHeading";
import { testimonialProps } from "@/@types/types";
import Paragraph from "../Paragraph/Paragraph";

const TestimonialCard: React.FC<testimonialProps["cards"][0]> = ({
  user,
  desc,
  src,
}) => {
  return (
    <div className="w-full flex flex-col gap-6 rounded-lg py-8 px-6 shadow-md bg-bg">
      <div className="relative w-10 aspect-square">
        <Image
          src={src}
          alt="Image 1"
          className="object-cover object-top"
          sizes="100vw"
          fill
        />
      </div>
      <Paragraph className="text-xl avenir font-light" text={desc} />
      <MainHeading
        h4
        className="font-bold text-lg  text-primary"
        title={user}
      />
    </div>
  );
};

export default TestimonialCard;

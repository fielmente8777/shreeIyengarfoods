import Image from "next/image";
import MainHeading from "../Heading/MainHeading";
import { testimonialProps } from "@/@types/types";
import { useState } from "react";

const TestimonialCard: React.FC<testimonialProps["cards"][0]> = ({
  user,
  desc,
  src,
}) => {
  const [readMore, setReadMore] = useState(false);
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
      <p className="md:text-xl avenir font-light">
        {desc.slice(0, readMore ? desc.length : 100)}
        {desc.length > 100 ? (
          <span
            className="cursor-pointer font-medium text-primary capitalize"
            onClick={() => setReadMore(!readMore)}
          >
            ...{readMore ? "Read less" : "Read more"}
          </span>
        ) : (
          ""
        )}
      </p>
      <MainHeading
        h4
        className="font-bold text-lg  text-primary"
        title={user}
      />
    </div>
  );
};

export default TestimonialCard;

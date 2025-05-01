import { AboutUsDataProps } from "@/@types/types";
import { SectionWithContainer } from "@/component/sectionComponent";
import TwoColGridCard from "@/component/TwoColGridCard";

const About: React.FC<AboutUsDataProps> = ({
  title,
  subtitle,
  desc,
  image,
  buttons,
  icon
}) => {
  return (
    <SectionWithContainer sectionId="about">
      <TwoColGridCard
        title={title}
        subtitle={subtitle}
        desc={desc}
        image={image}
        buttons={buttons}
        icon={icon}
      />
    </SectionWithContainer>
  );
};

export default About;

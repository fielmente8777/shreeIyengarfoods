import { AboutUsDataProps } from "@/@types/types";
import { SectionWithContainer } from "@/component/sectionComponent";
import TwoColGridCard from "@/component/TwoColGridCard";

const About: React.FC<AboutUsDataProps> = ({
  title,
  subtitle,
  desc,
  image,
  buttons,
  list,
  listTitle,
  icon
}) => {
  return (
    <SectionWithContainer sectionId="about" sectionClassName="bg-bg">
      <TwoColGridCard
        title={title}
        subtitle={subtitle}
        desc={desc}
        image={image}
        buttons={buttons}
        icon={icon}
        list={list}
        listTitle={listTitle}
      />
    </SectionWithContainer>
  );
};

export default About;

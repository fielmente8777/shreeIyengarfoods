import Form from "@/component/forms/Form";
import LazyLoadedMap from "@/component/map/LazyLoadedMap";
import { SectionWithContainer } from "@/component/sectionComponent";

const ContactUs = () => {
  return (
    <SectionWithContainer sectionId="contact-us" sectionClassName="bg-bg">
      <div className="md:grid grid-cols-2 flex flex-col-reverse gap-6">
        <div className="w-full rounded-2xl border border-primary overflow-hidden max-sm:aspect-square">
          <LazyLoadedMap src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.87476302289!2d77.0720743!3d28.435215399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1899fd8e33ad%3A0x2fd2b6b73dcc7006!2sNamma%20Dosa%20by%20Shree%20Iyengar%20Foods!5e1!3m2!1sen!2sin!4v1746108349178!5m2!1sen!2sin" />
        </div>
        <div
          className="w-full rounded-2xl overflow-hidden"
          style={{ boxShadow: "0px 7px 29px 0px rgba(100, 100, 111, 0.20)" }}
        >
          <Form />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ContactUs;


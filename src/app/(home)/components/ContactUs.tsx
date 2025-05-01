import Form from "@/component/forms/Form";
import LazyLoadedMap from "@/component/map/LazyLoadedMap";
import { SectionWithContainer } from "@/component/sectionComponent";

const ContactUs = () => {
  return (
    <SectionWithContainer sectionId="contact-us">
      <div className="md:grid grid-cols-2 flex flex-col-reverse gap-6">
        <div className="w-full rounded-2xl border border-primary overflow-hidden max-sm:aspect-square">
          <LazyLoadedMap src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d213487.72175633098!2d76.92677600000002!3d28.407571!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2312efacbb25%3A0xa7ddb76fc716e4e3!2sMoets%20Elan%20Epic!5e1!3m2!1sen!2sin!4v1741859407878!5m2!1sen!2sin" />
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
import { Banner } from "@/component";
import { pageData } from "@/utils/data/pageData";
import {
  About,
  ContactUs,
  Gallery,
  Testimonials,
} from "./components";
import Features from "./components/Features";
export default function Home() {
  return (
    <main className="!bg-white">
      <Banner {...pageData.bannerData} />
      <About {...pageData.aboutUsData} />
      <Features {...pageData.features} />
      <Gallery {...pageData.gallery} />
      <Testimonials {...pageData.Testimonials} />
      <ContactUs  />
    </main>
  );
}

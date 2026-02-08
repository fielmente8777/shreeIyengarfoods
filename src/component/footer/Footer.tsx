import { imageUrl, SocialLink } from "@/utils/data/links";
import Image from "next/image";
import { SectionWithContainer } from "../sectionComponent";
import Link from "next/link";

const footerLinks = [
  {
    label:
      "Basement and Ground Floor, Highstreet-52, Plot No.DSS-39, Sector 52, Gurugram, Haryana 122003",
    href: "#",
  },
  {
    label: "Call: +91 85950 58959",
    href: "tel:+91 85950 58959",
  },
];
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="max_screen bg-bg1 relative after:absolute md:after:w-[150px] after:w-[100px] after:h-[224px] after:bg-no-repeat after:bg-[url('/bg2.webp')] md:after:top-[-2rem] after:top-[4rem] after:right-[-0rem] after:bg-contain">
      {/* curve line  */}
      <div className=" h-32 overflow-hidden relative rotate-[180deg] bg-bg1 ">
        <div className="w-[7800px] h-[7800px] rounded-full bg-bg absolute -top-0 left-1/2 -translate-x-1/2" />
      </div>
      <SectionWithContainer sectionClassName="bg-bg1 !pb-6">
        <div className="grid md:grid-cols-9 grid-cols-1 gap-11 items-start max-md:items-center">
          <div className="col-span-6 grid md:grid-cols-6 grid-cols-1 gap-6 items-center">
            <div className="md:col-span-1 col-span-4 w-full flex items-center">
              <div className="relative max-w-48 w-full max-md:mx-auto aspect-square">
                <Image
                  src={imageUrl + "logo.webp"}
                  alt="logo"
                  fill
                  className={"object-contain"}
                />
              </div>
            </div>
            <div className="md:col-span-5 col-span-4 w-full">
              <p className="avenir text-dark text-xl max-md:text-center">
                True taste of Iyengar cuisine, straight from the heart. Every
                bite that tells a story of love and tradition!
              </p>
            </div>
          </div>
          <div className="md:col-span-3 col-span-6">
            <h2 className="text-primary max-md:text-center font-medium mendl text-2xl">Get in Touch</h2>
            <ul className="flex flex-col max-md:items-center gap-3 mt-2">
              {footerLinks.map((link) => (
                <li key={link.label} className="max-md:text-center">
                  <Link href={link.href} className="avenir max-md:text-center text-dark text-xl">{link.label}</Link>
                </li>
              ))}
              <li className="avenir text-dark text-xl">Mon to Sun: 8AM - 10PM</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-t-primary" />
        <div className="flex items-center justify-between max-md:flex-col gap-4">
          <div className="flex gap-3 items-center text-primary max-md:flex-col">
            <p className="avenir">© {currentYear} Shree Iyengar Foods</p>
            <span className="max-lg:hidden block"> | </span>
            <p className="avenir">All rights reserved</p>
            <span className="max-lg:hidden block"> | </span>
            <p className="avenir">
              Designed & Developed by{" "}
              {/* <Link href="https://www.eazotel.com/" className="font-semibold">
                Eazotel
              </Link> */}
               <Link href="https://www.fielmente.com/" className="font-semibold" target="_blank">
                Fielmente
              </Link>
            </p>
          </div>

          <ul className="flex items-center gap-3">
            
            {SocialLink.map((link) => (
              <li key={link.href}>
                <Link href={link.href} target="_blank"  className="flex w-[34px] rounded-sm aspect-square bg-white text-ternory items-center justify-center hover:bg-ternory hover:text-white">{link.icon}
                
                <span className="sr-only">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SectionWithContainer>
    </footer>
  );
};

export default Footer;

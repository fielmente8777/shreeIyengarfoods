import { footerLinkProps, navLinkProps, socialLinkProps } from "@/@types/types";
import { FillFacebook, FillInstagram } from "@/utils/icons/icons";

export const imageUrl =
  "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/shree-iyengar-foods/";

export const NavLink: navLinkProps[] = [
  {
    id: 1,
    label: "home",
    href: "#",
  },
  {
    id: 2,
    label: "About us",
    href: "#about",
  },
  {
    id: 3,
    label: "gallery",
    href: "#gallery",
  },
  {
    id: 4,
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    id: 5,
    label: "Contact us",
    href: "#contact",
  },
];

export const SocialLink: socialLinkProps[] = [
  {
    id: 1,
    label: "instagram",
    icon: <FillInstagram />,
    href: "https://www.instagram.com/moets.elan_epic?igsh=anE5Z3Nrdjl6a2g2&utm_source=qr",
  },
  {
    id: 2,
    label: "facebook",
    icon: <FillFacebook />,
    href: "https://www.facebook.com/profile.php?id=61572585251692#",
  },
];

export const FooterLink: footerLinkProps[] = [
  {
    id: 1,
    title: "quick links",
    links: [
      {
        id: 1,
        label: "About us",
        href: "#about",
      },
      {
        id: 2,
        label: "Menu",
        href: "#menu",
      },
      {
        id: 3,
        label: "Testimonials",
        href: "#testimonials",
      },
      {
        id: 4,
        label: "Gallery",
        href: "#gallery",
      },
    ],
  },
  {
    id: 2,
    title: "get in touch",
    links: [
      {
        id: 1,
        title: "address",
        label:
          "LGF, Elan Epic, Southern Peripheral Rd, Opp. Tulip Voilet, Sector 70, Gurugram, Haryana - 122001",
        href: "#",
        // href: "https://maps.app.goo.gl/BoRStMAF63aWh4x79",
      },
      {
        id: 2,
        title: "email",
        label: "operations.elanmall@moets.com",
        href: "mailto:operations.elanmall@moets.com",
      },
      {
        id: 3,
        title: "call",
        label: "+91 96677 52735",
        href: "tel:+91 96677 52735",
        label2: "+91 12448 91938",
        href2: "tel:+91 12448 91938",
      },
    ],
  },
  {
    id: 3,
    title: "opening hours",
    links: [
      {
        id: 1,
        label: "Mon to Sun",
        href: "12PM – 12AM",
      },
    ],
  },
];

import { JSX } from "react";

export interface navLinkProps {
  id: number;
  label: string;
  href: string;
}

export interface socialLinkProps {
  id: number;
  label: string;
  icon: JSX.Element;
  href: string;
}

export interface footerLinkProps {
  id: number;
  title: string;

  links: {
    id: number;
    icon?: JSX.Element;
    title?: string;
    label: string;
    href: string;
    label2?: string;
    href2?: string;
  }[];
}

export interface meetOurFounder {
  title: string;
  subtleTitle: string;
  desc: string[];
  image: string;
  icon: JSX.Element;
  buttons: {
    label: string;
    href: string;
  }[];
}

export interface AboutUsDataProps {
  title: string;
  icon: JSX.Element;
  subtitle: string;
  desc: string[];
  image: string;
  buttons?: {
    label: string;
    href: string;
  }[];
  listTitle: string;
  list: string[];
}

export interface GalleryDataProps {
  title: string;
  icon: JSX.Element;
  subTitle: string;
  images: string[];
  label: string;
  href: string;
}

export interface testimonialProps {
  title: string;
  icon: JSX.Element;
  subTitle: string;
  cards: {
    id: number;
    src: string;
    user: string;
    desc: string;
  }[];
}
export interface FeatureCardProps {
  title: string;
  subtitle: string;
  icon: JSX.Element;
}
export interface FeaturesDataProps {
  title: string;
  desc: string;
  icon: JSX.Element;
  cards: {
    id: number;
    title: string;
    subtitle: string;
    icon: JSX.Element;
  }[];
}

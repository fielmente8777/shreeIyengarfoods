import { AuthenticIyengarCuisine, ExclusivelyHandcraftedDishes, FounderMeet, GalleryIcon, Gmb, HygieneHospitality, OutLineBook, Review, TestimonialsIcon } from "../icons/icons";
import { imageUrl } from "./links";

export const pageData = {
  bannerData: {
    title: "Rated 4.8 on Google My Business",
    subTitle: "HANDCRAFTED HERITAGE, ONE RECIPE AT A TIME",
    src: imageUrl + "bn1.webp",
    icon: <Gmb/>,
  },
  aboutUsData: {
    title: "Our Story & History",
    subtitle: "About Shree Iyengar Foods",
    icon:<OutLineBook/>,
    desc: [
      "At Shree Iyengar Foods, we bring the heart of South India to Delhi with authentic Iyengar-style vegetarian cuisine rooted in tradition, taste, and community. ",
      "Since 2017, what began as a humble home kitchen has grown into a beloved eatery known for its homestyle flavors, exceptional hospitality, and deep cultural roots. From rare, age-old recipes to empowering underprivileged women through meaningful employment, we serve more than just food — we serve purpose, passion, and pure authenticity on every plate.",
      `<b>Adding to trust of our customers, we’re now the highest rated South Indian restaurant in Gurgaon with stellar ratings of 4.7 on Swiggy and 4.5 on Zomato.</b>`
    ],
    image: imageUrl + "im1.webp",
    buttons: [
      {
        label: "boook on foodpe",
        href: "https://wa.me/918595058959",
      },
    ],
  },
  features: {
    title: "Our Features",
    desc: "Rooted in Tradition, Driven by Purpose",
    icon: <Review />,
    cards: [
      {
        id: 1,
        title: "Authentic Iyengar Cuisine",
        subtitle:
          "We offer a highly detailed menu focused on traditional Iyengar-style South Indian dishes.",
        icon: <AuthenticIyengarCuisine />,
      },
      {
        id: 2,
        title: "Exclusively Handcrafted Dishes",
        subtitle:
          "Savor the rarest flavors with our exclusive culinary treasures.",
        icon: <ExclusivelyHandcraftedDishes />,
      },
      {
        id: 3,
        title: "Hygiene & Hospitality",
        subtitle:
          "We take pride in our stringent hygiene standards and excellent customer service",
        icon: <HygieneHospitality />,
      },
    ],
  },
  meetOurFounder: {
    title: "Meet Our Founder",
    subtleTitle: "Shanti Narasimhan",
    desc: [
      "Born into a legacy of entrepreneurship, Mrs. Shanti Narasimhan brings a deep-rooted spirit of enterprise to Shree Iyengar Foods. Inspired by her father’s success in the trucking business and the accomplishments of her brother, she nurtured a long-standing dream — to build something of her own, something meaningful. With a heart full of tradition and a vision shaped by purpose, she founded Shree Iyengar Foods to celebrate authentic South Indian cuisine and empower communities in the process. What began as a small kitchen venture has grown into a beloved brand, thanks to her unwavering dedication and the overwhelming love of her patrons.",
    ],
    image: imageUrl + "im2.webp",
    icon: <FounderMeet />,
    buttons: [
      {
        label: "contact us",
        href: "tel",
      },
    ],
  },
  gallery: {
    title: "Explore Our Gallery",
    subTitle: "Visuals of our Flavors",
    icon: <GalleryIcon />,
    images: [
      imageUrl + "im3.webp",
      imageUrl + "im4.webp",
      imageUrl + "im5.webp",
      imageUrl + "im6.webp",
      imageUrl + "im7.webp",
      imageUrl + "im8.webp",
      imageUrl + "im9.webp",
      imageUrl + "im10.webp",
    ],
    label: "Visit instagram",
    href: "https://www.instagram.com/shreeiyengarfoods/?hl=en",
  },
  Testimonials: {
    title: "Testimonials",
    subTitle: "Appreciation from our beloved clients",
    icon: <TestimonialsIcon />,
    cards: [
      {
        id: 1,
        src: "/review.png",
        user: "Harshita",
        desc: "Absolutely brilliant food and we loved the new restaurant! Stunning South Indian themed decor, superfast food service, and warm, courteous hospitality. Can't recommend highly enough!",
      },
      {
        id: 2,
        src: "/review.png",
        user: "Guru",
        desc: "Food here makes me feel home. I have been ordering from this place for a while now but this time I decided to visit the restaurant. The owner is really nice to suggest best dishes they offer. kitchen is top notch in hygienic. We had ghee dosa, rava dosa, pongal and vada - everything was best in quality.",
      },
      {
        id: 3,
        src: "/review.png",
        user: "Rajat Prakash",
        desc: "One of the few places in Gurgaon where you get good, authentic South Indian food. The interior decoration is beautiful and gives it a unique feel.",
      },
      {
        id: 4,
        src: "/review.png",
        user: "Vivek Sagar Sareen",
        desc: "This is hands down the best South Indian food joint in Gurgaon, especially near Sector 51. The food is authentic, delicious, and consistently high in quality. It’s a must-visit spot for anyone craving real South Indian flavors. A special mention to the owner, Shanti, who is incredibly enterprising and clearly passionate about maintaining top-notch quality. Her attention to detail and dedication truly set this place apart. Highly recommended!",
      },
      {
        id: 5,
        src: "/review.png",
        user: "Shubha Ram",
        desc: "Very authentic and fresh southindian food. Enjoyed piping hot masala dosa and filter coffee !",
      },
    ],
  },
  contactNow: {
    title: "CRAFT UNFORGETTABLE CELEBRATIONS!",
    subTitle:
      "Turn your special moments into lasting memories at Moets! From birthdays to anniversaries and private celebrations, we’ve got it all covered with exceptional service!",
    label: "Call Us for Bookings",
    href: "tel:+91 96677 52735",
  },
};

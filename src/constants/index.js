import img1 from '../assets/kitsune.png';
import img2 from '../assets/elty.png';
import img3 from '../assets/ST.png';
import img4 from '../assets/Rebrandly.png';
import img5 from '../assets/Welkin CMP.png';
import img6 from '../assets/Mumati.png';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

// 🧭 Navigation links for the Navbar
export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
];

// 🖼️ Image cards data
export const imgData = [
  {
    id: 1,
    title: "The Hidden Shrine",
    img: img1,
    description:
      "A Travel Blog prototype made for an Irish travel blogger specialized in custom Japanese hikes.",
    button: "See Case Study",
    link: "/hiddenshrine", // 👈 internal route
    icon: <BsFillArrowRightCircleFill />,
  },
  {
    id: 2,
    title: "Elty Dashboard",
    img: img2,
    description:
      "This is a dashboard I prototyped for Elty, a platform that helps general practitioners plan their agenda.",
    button: "See Case Study",
    link: "/elty", // 👈 internal route
    icon: <BsFillArrowRightCircleFill />,
  },
  {
    id: 3,
    title: "Rebrandly",
    img: img4,
    description:
      "A link management platform built with Elementor Pro and used to help businesses transform long generic URLs.",
    button: "See Web Portal",
    link: "https://www.rebrandly.com/", // 👈 external
    icon: <BsFillArrowRightCircleFill />,
  },
  {
    id: 4,
    title: "ST Microelectronics",
    img: img3,
    description:
      "ST Microelectronics is a global company specialized in semiconductors. This is their main home page built with Elementor Pro.",
    button: "See Web Portal",
    link: "https://www.st.com/content/st_com/en.html", // 👈 external
    icon: <BsFillArrowRightCircleFill />,
  },
  {
    id: 5,
    title: "Welkin CMP",
    img: img5,
    description:
      "A platform created to manage different cloud connections with a prototype and its design system.",
    button: "See Case Study",
    link: "/CMP", // 👈 external
    icon: <BsFillArrowRightCircleFill />,
  },
  {
    id: 6,
    title: "Mumati",
    img: img6,
    description:
      "An Italy-based jewelry e-commerce built with WooCommerce and Elementor Pro.",
    button: "See Shop",
    link: "https://www.mumati.it/", // 👈 external
    icon: <BsFillArrowRightCircleFill />,
  },
];


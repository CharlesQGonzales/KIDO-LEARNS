import { BiSolidHomeSmile } from "react-icons/bi";
import { BiSolidInfoCircle } from "react-icons/bi";
import { BiSolidBookContent } from "react-icons/bi";
import { BiSolidUserVoice } from "react-icons/bi";
import { BiLogoBlogger } from "react-icons/bi";
import { BsFillTelephoneInboundFill } from "react-icons/bs";

export const navlinks = [
  {
    id: 0,
    name: "Home",
    link: "#home",
    page: true,
    icon: <BiSolidHomeSmile />,
  },
  {
    id: 1,
    name: "About",
    link: "#about",
    page: true,
    icon: <BiSolidInfoCircle />,
  },
  {
    id: 2,
    name: "Features",
    link: "#features",
    page: true,
    icon: <BiSolidBookContent />,
  },
  {
    id: 3,
    name: "Services",
    link: "#services",
    page: true,
    icon: <BiSolidUserVoice />,
  },
  {
    id: 4,
    name: "Blog",
    link: "#blog",
    page: true,
    icon: <BiLogoBlogger />,
  },
  {
    id: 5,
    name: "Contact",
    link: "contact",
    page: true,
    icon: <BsFillTelephoneInboundFill />,
  },
];

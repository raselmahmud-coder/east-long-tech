import carousel1 from "../public/assets/carousel/carousel (1).jpg";
import carousel2 from "../public/assets/carousel/carousel (2).jpg";
import carousel3 from "../public/assets/carousel/carousel (3).jpg";
import carousel4 from "../public/assets/carousel/carousel (4).jpg";
import carousel5 from "../public/assets/carousel/carousel (5).jpg";
import product1 from "../public/assets/demo1.png";
import EdgesensorHighRoundedIcon from "@mui/icons-material/EdgesensorHighRounded";
import ViewQuiltRoundedIcon from "@mui/icons-material/ViewQuiltRounded";
import image1 from "../public/assets/1.png";
import image2 from "../public/assets/2.png";
import { Avatar } from "@mui/material";


export const UserTestimonials = [
  {
    avatar: (
      <Avatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/1.jpg"
      />
    ),
    name: "Remy Sharp",
    occupation: "Senior Engineer",
    testimonial:
      "I absolutely love how versatile this product is! Whether I'm tackling work projects or indulging in my favorite hobbies, it seamlessly adapts to my changing needs. Its intuitive design has truly enhanced my daily routine, making tasks more efficient and enjoyable.",
  },
  {
    avatar: (
      <Avatar
        alt="Travis Howard"
        src="https://mui.com/static/images/avatar/2.jpg"
      />
    ),
    name: "Travis Howard",
    occupation: "Lead Product Designer",
    testimonial:
      "One of the standout features of this product is the exceptional customer support. In my experience, the team behind this product has been quick to respond and incredibly helpful. It's reassuring to know that they stand firmly behind their product.",
  },
  {
    avatar: (
      <Avatar
        alt="Cindy Baker"
        src="https://mui.com/static/images/avatar/3.jpg"
      />
    ),
    name: "Cindy Baker",
    occupation: "CTO",
    testimonial:
      "The level of simplicity and user-friendliness in this product has significantly simplified my life. I appreciate the creators for delivering a solution that not only meets but exceeds user expectations.",
  },
  {
    avatar: (
      <Avatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/4.jpg"
      />
    ),
    name: "Julia Stewart",
    occupation: "Senior Engineer",
    testimonial:
      "I appreciate the attention to detail in the design of this product. The small touches make a big difference, and it's evident that the creators focused on delivering a premium experience.",
  },
  {
    avatar: (
      <Avatar
        alt="Travis Howard"
        src="https://mui.com/static/images/avatar/5.jpg"
      />
    ),
    name: "John Smith",
    occupation: "Product Designer",
    testimonial:
      "I've tried other similar products, but this one stands out for its innovative features. It's clear that the makers put a lot of thought into creating a solution that truly addresses user needs.",
  },
  {
    avatar: (
      <Avatar
        alt="Cindy Baker"
        src="https://mui.com/static/images/avatar/6.jpg"
      />
    ),
    name: "Daniel Wolf",
    occupation: "CDO",
    testimonial:
      "The quality of this product exceeded my expectations. It's durable, well-designed, and built to last. Definitely worth the investment!",
  },
];

export const whiteLogos = [
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg",
];

export const darkLogos = [
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg",
];

export const hotProductsCollection = [
  {
    id: 1,
    image: image1,
    title: "SMT Pick and Place Machine RS-1R",
    description: "It will be describe in a brief of product quality",
    details: "It will be describe product full specification",
  },
  {
    id: 2,
    image: image1,
    title: "SMT Pick and Place Machine RS-1R",
    description: "It will be describe in a brief of product quality",
    details: "It will be describe product full specification",
  },
  {
    id: 3,
    image: image1,
    title: "SMT Pick and Place Machine RS-1R",
    description: "It will be describe in a brief of product quality",
    details: "It will be describe product full specification",
  },
  {
    id: 4,
    image: image1,
    title: "SMT Pick and Place Machine RS-1R",
    description: "It will be describe in a brief of product quality",
    details: "It will be describe product full specification",
  },
];

export const featureProducts = [
  {
    title: `Solder Paste Printing Machine`,
    list: [
      `Classic Z-axis lifting platform.`,
      `Adjustable size of stencil frame.`,
      `Printing cycle time 7s and Integrated molding structure of the entire machine frame`,
    ],
    imageLight: image1,
  },
  {
    title: "Lead-Free Hot Air Reflow Oven Machine",
    list: [`High heat energy.`, `Low energy consumption.`, `Thermal equalization`],
    imageLight: image2,
  },
];

export const products = [
  {
    title: "FOG Bonding Machine",
    description: [
      "The machine is designed for 0.96-7 inches LCD products automatic ACF auto attaching for single FPC, FPCalignment, FPC main-bonding requirements",
    ],
    img: product1,
  },
  {
    title: "COG Bonding Machine",
    description:
      "This machine is designed for 0.96-7-inch LCD products, automatic ACF attachment of a single lC, alignment, and main-bonding requirements.",
    img: product1,
  },
  {
    title: "Pick and Place Machine",
    description: `JUKl Fully Automatic High-speed intelligent Chip MounterRS-1R SMT pick and place machine for SMT FactoryPCB assembly machine.`,
    img: product1,
  },
  {
    title: "Wave soldering machine",
    description: `One section of infrared heating tube + two sections of micro hot air circulation, heavy-type double hook finger for conveying, draught hood of solder pot ,PCB width: 50mm-450mm`,
    img: product1,
  },
  {
    title: "Wave soldering machine1",
    description: `One section of infrared heating tube + two sections of micro hot air circulation, heavy-type double hook finger for conveying, draught hood of solder pot ,PCB width: 50mm-450mm`,
    img: product1,
  },
  {
    title: "Wave soldering machine2",
    description: `One section of infrared heating tube + two sections of micro hot air circulation, heavy-type double hook finger for conveying, draught hood of solder pot ,PCB width: 50mm-450mm`,
    img: product1,
  },
];

export const carouseImage = [
  {
    id: 1,
    image: carousel1,
  },
  {
    id: 2,
    image: carousel2,
  },
  {
    id: 3,
    image: carousel3,
  },
  {
    id: 4,
    image: carousel4,
  },
  {
    id: 5,
    image: carousel5,
  },
];
export const menuItems = [
  "products",
  "features",
  "highlights",
  "testimonials",
  "faq",
];

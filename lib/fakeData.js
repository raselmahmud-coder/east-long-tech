import carousel1 from "../public/assets/carousel/1.png";
import carousel2 from "../public/assets/carousel/2.png";
import carousel3 from "../public/assets/carousel/3.png";
import carousel4 from "../public/assets/carousel/4.png";
import carousel5 from "../public/assets/carousel/5.png";
import carousel6 from "../public/assets/carousel/6.png";
import carousel7 from "../public/assets/carousel/7.png";
import carousel8 from "../public/assets/carousel/8.png";
import image1 from "../public/assets/1.png";
import image2 from "../public/assets/2.png";
import { Avatar } from "@mui/material";
import waveSoldering from "@/public/assets/Wave soldering machine.png";

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
    image: carousel4,
    title: "Full automatic LCD feeding Machine",
    description: `The Automatic LCD Feeding Machine streamlines the production of LCD screens by efficiently feeding glass substrates into processing lines. Its automated system ensures continuous operation, reducing manual labor and increasing production efficiency, making it indispensable in modern LCD manufacturing plants.`,
    details: "It will be describe product full specification",
  },
  {
    id: 2,
    image: carousel7,
    title: "SMT Pick and Place Machine RS-1R",
    description: `The SMT (Surface Mount Technology) Pick and Place Machine RS-1R is a versatile, high-speed assembly machine for placing a wide range of components on PCBs (Printed Circuit Boards). With its precision placement and fast throughput, it is ideal for high-volume electronics manufacturing, ensuring efficiency and reducing production times.`,
    details: "It will be describe product full specification",
  },
  {
    id: 3,
    image: waveSoldering,
    title: "Wave soldering machine",
    description: `The Wave Soldering Machine is designed for efficient soldering of electronic components to PCBs in high-volume production. Utilizing a wave of molten solder, it ensures uniform, high-quality joints for through-hole components, enhancing the durability and performance of electronic assemblies.`,
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
    list: [
      `High heat energy.`,
      `Low energy consumption.`,
      `Thermal equalization`,
    ],
    imageLight: image2,
  },
];

export const products = [
  {
    title: "FOG Bonding Machine",
    description: [
      "A FOG Bonding Machine precisely aligns and attaches flat, flexible cables to glass substrates, enhancing connectivity in electronics. Streamlines the attachment of film on glass for LCDs, enhancing display assembly with precision and speed.",
    ],
    img: carousel6,
  },
  {
    title: "COG Bonding Machine",
    description:
      "The COG (Chip on Glass) Bonding Machine is crucial for attaching semiconductor chips directly onto the glass panel of displays. This advanced equipment guarantees accurate placement and secure bonding, significantly improving the display's quality and durability, particularly in smartphones and TVs.",
    img: carousel6,
  },
  {
    title: "SMT Pick and Place Machine RS-1R",
    description: `The SMT (Surface Mount Technology) Pick and Place Machine RS-1R is a versatile, high-speed assembly machine for placing a wide range of components on PCBs (Printed Circuit Boards). With its precision placement and fast throughput, it is ideal for high-volume electronics manufacturing, ensuring efficiency and reducing production times.`,
    img: carousel7,
  },
  {
    title: "Wave soldering machine",
    description: `The Wave Soldering Machine is designed for efficient soldering of electronic components to PCBs in high-volume production. Utilizing a wave of molten solder, it ensures uniform, high-quality joints for through-hole components, enhancing the durability and performance of electronic assemblies.`,
    img: waveSoldering,
  },
  {
    title: "SMT Pick and Place Machine RX-7R",
    description: `The SMT Pick and Place Machine RX-7R stands out for its exceptional speed and precision in placing components on PCBs. Tailored for high-mix, high-volume production environments, it features advanced technology for optimizing assembly processes, significantly boosting productivity and manufacturing quality.`,
    img: carousel8,
  },
  {
    title: "Automatic LCD Feeding Machine",
    description: `The Automatic LCD Feeding Machine streamlines the production of LCD screens by efficiently feeding glass substrates into processing lines. Its automated system ensures continuous operation, reducing manual labor and increasing production efficiency, making it indispensable in modern LCD manufacturing plants.`,
    img: carousel4,
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
  {
    id: 6,
    image: carousel6,
  },
  {
    id: 7,
    image: carousel7,
  },
  {
    id: 8,
    image: carousel8,
  },
];
export const menuItems = [
  "products",
  "features",
  "highlights",
  "testimonials",
  "faq",
];

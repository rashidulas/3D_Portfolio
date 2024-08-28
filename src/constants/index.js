import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  django,
  cs,
  cpp,
  java,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  aces,
  oit,
  shopify,
  datathon,
  lung,
  statefarm,
  library,
  pricespy,
  cam,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About Me",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
    external: true, // New field to indicate it's an external link
    url: "/RESUME.pdf", // URL for the resume
  }
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: html,
  },
  {
    name: "C",
    icon: css,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "C#",
    icon: cs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "NextJS",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Flutter",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Anaconda",
    icon: figma,
  },
  {
    name: "Android Studio",
    icon: docker,
  },
  {
    name: "HTML",
    icon: css,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: css,
  },
];

const experiences = [
  {
    title: "Technology Assistant",
    company_name: "Office of Information Technology - UTA",
    icon: oit,
    iconBg: "#383E56",
    date: "October 2022 – Present",
    points: [
      "Orchestrated campus-wide tech support services for over 42,000 users, managing installation, setup, and configuration of standard hardware and software",
      "Worked on the backend operations for university devices by deploying Adobe Intune, Microsoft Azure AD, and Jamf connect.",
      "Directed the optimization of 39,000+ customer records onto the Service-Now ticketing system, enhancing data accessibility.",
    ],
  },
  {
    title: "Undergraduate Research Assistant",
    company_name: "Abacus Cloud and Edge Systems Lab (ACES)",
    icon: aces,
    iconBg: "#E6DEDD",
    date: "May 2023 – Sept 2023",
    points: [
      "Directed projects focused on network architecture and design, utilizing Kubernetes for enhanced resource management; implemented load balancing mechanisms, resulting in a 35% increase in network speed and a 20% reduction in server response time.",
      "Architected and executed a cutting-edge data simulation system leveraging Raspberry Pis and K3s technology.",
      "Created a visually appealing web page illustrating weather data for 50+ counties through a map design sourced from a JSON file.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Trasva",
    description:
      "Spearheaded the development of a comprehensive social media platform, enabling users to share and track travel experiences with real-time location data and user-generated content, integrated Google API for location-based advanced search algorithm that enhanced trip discovery by 40%. Established an efficient data management framework by integrating UploadThing for image storage and MongoDB for data retrieval, enhancing users' ability to follow places and other travelers, making trip planning easier and more informed.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: datathon,
    source_code_link: "https://github.com/",
  },
  {
    name: "UTA Datathon Website",
    description:
      "Managed the development of the UTA Datathon 2024 website, utilizing Firebase backend and React.js frontend; established secure sign-in with unique QR code registration, streamlining entry for over 400 students.Leveraged Google Maps API to develop an interactive venue map, enabling users to easily locate venues and optimizing the user experience. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: datathon,
    source_code_link: "https://github.com/",
  },
  {
    name: "LunGuardian",
    description:
      "Led development of early lung cancer detection tool with wrist sensors, ML, and Apple’s HealthKit API; implemented Firebase Firestore, reducing late-stage diagnoses by 45%, increasing patient recovery by 20%, with 96% accuracy for 310 patients' data. Engineered a MATLAB algorithm to precisely identify coughing patterns, incorporating advanced data visualization techniques to generate detailed graphical representations, enhancing detection accuracy by 45%.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: lung,
    source_code_link: "https://github.com/",
  },
  {
    name: "StateFarm PWA",
    description:
      "Facilitated a mobile-responsive website modeled after the State Farm app, enabling seamless exploration of services. Architected a seamless and responsive user interface for the website through HTML, CSS, and Angular; leveraged AngularFire integrated with Firebase to handle user accounts and data storage, enhancing operational efficiency and user engagement metrics.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: statefarm,
    source_code_link: "https://github.com/",
  },
  {
    name: "Library Management System",
    description:
      "Engineered a Java-based GUI application adhering to OOP principles, streamlining library operations and boosting efficiency by automating cataloging processes, resulting in a 40% reduction in manual data entry tasks. Championed the deployment of an intricate set of SQL queries in the Library Management System, streamlining the process of adding, managing, and accessing loan information, contributing to improved functionality and user satisfaction metrics.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: library,
    source_code_link: "https://github.com/",
  },
  {
    name: "PriceSpy",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pricespy,
    source_code_link: "https://github.com/rashidulas/pricespy",
  },
  {
    name: "HomeSecurity",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: cam,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

import {
  sipiket,
  kelas,
  koperasi,
  undangan,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  github,
  threejs
} from "../assets";

export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "certificate",
      title: "Certificate",
    },
    {
      id: "project",
      title: "Project",
    },
    {
      id: "contact",
      title: "Contact",
    },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Website",
    icon: javascript,
    iconBg: "#383E56",
    date: "October 2023 - Now",
    points: [
      "Website Undangan Pernikahan.",
      "Website Portofolio.",
    ],
  },
  {
    title: "React Js Developer",
    company_name: "React js",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "Desember 2023 - Now",
    points: [
      "Website SIPIKET (Sistem Informasi Guru Piket).",
      "Website Kelas 11 PPLG 2.",
      "Website Portofolio.",
    ],
  },
  {
    title: "Nuxt Js Developer",
    company_name: "Nuxt js",
    icon: typescript,
    iconBg: "#383E56",
    date: "October 2023 - Now",
    points: [
      "Website E-commerce Koperasi Sekolah.",
    ],
  },
];

const projects = [
  {
    name: "Web SIPIKET",
    description:
      "is a platform for managing teachers' duty schedules, including features for schedule management, attendance, leave requests, and task information.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "orange-text-gradient",
      },
      {
        name: "bootstrap",
        color: "purple-text-gradient",
      },
    ],
    image: sipiket,
    source_code_link: "https://github.com/",
  },
  {
    name: "Web Kelas",
    description:
      "is a place where students access their projects with descriptions, images, and source code links to showcase their work and receive feedback.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "purple-text-gradient",
      },
    ],
    image: kelas,
    source_code_link: "https://github.com/",
  },
  {
    name: "Web Koperasi",
    description:
      "is an e-commerce platform that allows cooperative members to sell their products online. However, this website is not yet completed.",
    tags: [
      {
        name: "nuxtjs",
        color: "green-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: koperasi,
    source_code_link: "https://github.com/",
  },
  {
    name: "Web Undangan",
    description:
      "is an e-commerce platform that allows cooperative members to sell their products online. However, this website is not yet completed.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "yellow-text-gradient",
      },
    ],
    image: undangan,
    source_code_link: "https://github.com/",
  },
];

export { experiences, projects };
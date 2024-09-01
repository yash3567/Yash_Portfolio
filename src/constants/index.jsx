import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import { SiLeetcode } from "react-icons/si";


import Image1 from "../assets/image1.jpeg";
import Image2 from "../assets/image2.jpeg";
import Image3 from "../assets/image3.jpeg";
// import Image4 from "../assets/image4.jpg";
// import Image5 from "../assets/image5.jpg";
// import Image6 from "../assets/image6.jpg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

// export const HERO = {
//   name: "CARL FRANK",
//   greet: "",
//   description:
//     "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a decade.",
// };
export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;


export const PROJECTS = [
  {
    id: 1,
    name: "Collab-Hub",
    description:
      "CollabHub is a dynamic platform where entrepreneurs connect, collaborate, and innovate together. Discover like-minded partners, share ideas, and build successful ventures with ease.",
    image: Image1,
    githubLink: "https://github.com/yash3567/Collab-Hub",
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: Image2,
    githubLink: "https://github.com/yash3567/Web_Project",
  },
  {
    id: 3,
    name: "Project-Work-Station",
    description:
      "A platform showcasing student projects from Indian universities and colleges, fostering knowledge sharing, innovation, and collaboration among students and educators.",
    image: Image3,
    githubLink: "https://github.com/yash3567/ProjectStation",
  },
  // {
  //   id: 4,
  //   name: "Weather App",
  //   description:
  //     "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
  //   image: Image4,
  //   githubLink: "https://github.com/user/weather-app",
  // },
  // {
  //   id: 5,
  //   name: "Blog Platform",
  //   description:
  //     "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
  //   image: Image5,
  //   githubLink: "https://github.com/user/blog-platform",
  // },
  // {
  //   id: 6,
  //   name: "Chat Application",
  //   description:
  //     "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
  //   image: Image6,
  //   githubLink: "https://github.com/user/chat-application",
  // },
];

export const BIO = [
  "I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <DiRedis className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Redis",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
];

export const EXPERIENCES = [
  // {
  //   title: "Lead Frontend Developer",
  //   company: "Innovative Tech Solutions",
  //   duration: "July 2020 - Present",
  //   description:
  //     "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
  // },
  {
    title: "Full Stack Developer",
    company: " Intern  Edumix Technologies Pvt Ltd  ",
    duration: "February 2016 - June 2020",
    description:
      `Developed Full-Stack Application: Contributed to designing and developing full-stack applications using MongoDB, Express.js, React, and Node.js (MERN).
	                API Development and Integration: Built and integrated RESTful APIs, facilitating seamless communication between front-end and back-end system.
                  Front-End Development and Collaboration: Designed responsive user interfaces in React and collaborated with cross-functional teams to deliver high-quality software solutions.
                	Database Management and Troubleshooting: Managed MongoDB databases and resolved bugs and performance issues to maintain optional functionality.
	                Agile Methodologies and Version Control: Participated in Agile development processes and utilized Git and GitHub for version control and collaborative code reviews.
                  Learning and Development: Continuously learned and applied new technologies and best practice in MERN stack development.,`,
  },
  // {
  //   title: "Junior Web Developer",
  //   company: "Bright Future Technologies",
  //   duration: "January 2024 - Present  ",
  //   description:
  //     "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  // },
];

export const EDUCATION = [
  {
    degree: "Bachelor Of Technology In Computer Science And Engineering   ",
    institution: "Nagpur University",
    duration: " 2021 - 2025",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, ReactJs, NodeJs, MongoDB, ExpressJs, NextJs. Completed a senior project on developing an e-commerce platform.",
  },
  // {
  //   degree: "Bachelor of Science in Information Technology",
  //   institution: "University of California, Berkeley",
  //   duration: "September 2008 - June 2012",
  //   description:
  //     "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
  // },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/yash3567",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/yash-nandeshwar-880b18267/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://leetcode.com/u/yash106/",
    icon: <SiLeetcode fontSize={25} className="hover:opacity-80" />,
  },
];

import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 3 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.With a knack for problem-solving and a deep understanding of Data Structures and Algorithms (DSA), I thrive in dynamic environments where innovation and creativity are valued. My journey in software development has been marked by a relentless pursuit of excellence and a commitment to continuous learning.I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "April 2021 - June 2021",
    role: "Frontend Developer Intern",
    company: "TechAtom Pvt.Ltd",
    description: [
      "•Worked on the DashBoard, Navbar, and Different Sections of the Website Like Content Uploading Section of an Tutorial Website , Uploading Section of Tutorial Section of Website.",
      "• Worked with the team on the design, development, and Integration of API.",
      "• Optimised the Existing Code using React Hooks like useMemo Hook useCallback Hook.",
      "• Worked on Data Verification, API Integration, Designing and Creating New Components Using ReactJS, React Styled Components.",
      "• Collaborated with stakeholders to define project requirements and timelines.",
    ],
    technologies: ["Javascript", "React.js", "Next.js", "HTML", "CSS"],

    /*
    `
    •Worked on the DashBoard, Navbar, and Different Sections of the Website Like Content Uploading Section of an Tutorial Website , Uploading Section of Tutorial Section of Website.
    • Worked with the team on the design, development, and Integration of API.
    • Optimised the Existing Code using React Hooks like useMemo Hook useCallback Hook.
    • Worked on Data Verification, API Integration, Designing and Creating New Components Using ReactJS, React Styled Components
    • Collaborated with stakeholders to define project requirements and timelines.`,
    */
  },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "Home Rental Application",
    link:"https://github.com/tanush-agarkar/Home-Rental-Application",
    image: project1,
    description: `It is a user-friendly platform designed to streamline the process of renting residential properties. 
      Whether you’re a landlord looking to list your properties or a tenant searching for the perfect place to call
 home, this application provides a convenient and efficient solution.
      `,
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    link:"https://github.com/tanush-agarkar/task-manager-api",
    image: project2,
    description: `Project on managing task of the user build this app with best programming practices like using MVC
      Framework, integrated sending email services, used mongo dB database, pagination and sorting and
      Cryptography to make user secure .
      Module Consists of 4-5 different types of users with different functionalities`,
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing brif introduction projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Chatting Application",
    link:"https://github.com/tanush-agarkar/Chat-app",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "401 samyak appt, near YCCE college, Nagpur",
  phoneNo: "+91 8010 4472 85 ",
  email: "tanushpagarkar@gmail.com",
};

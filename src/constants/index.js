import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";

export const HERO_CONTENT = `I’m a passionate Full Stack Developer specializing in building robust, scalable, and high-performance web applications.
With 3 years of hands-on experience mastering React, Next.js, Node.js, MySQL, and MongoDB, I transform ideas into innovative digital solutions.
My mission? To deliver seamless user experiences that empower businesses to grow and succeed in the digital world.`;

export const ABOUT_TEXT = [
  "Hello! I’m Tanush Agarkar, a dedicated and versatile full stack developer passionate about crafting efficient, user-friendly web applications. My journey into programming started at a young age playing around with browser inspect elements, experimenting with code, and exploring the endless possibilities of the web. At 16, I turned this curiosity into a career, driven by a desire to bring innovative ideas to life through code.",
  "With strong problem-solving skills and a deep understanding of Data Structures and Algorithms (DSA), I thrive in dynamic, creative environments where innovation matters. Over the years, I have gained hands-on experience working with a broad tech stack, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB.",
  "I believe in continuous learning and growth, always seeking new challenges to sharpen my skills. From local software houses to freelancing on platforms like Fiverr and Upwork, and now collaborating with international clients, I have cultivated a global perspective and the ability to adapt to diverse teams and cultures.",
  "Outside of coding, I’m an avid movie enthusiast and traveler. Exploring new places and cultures broadens my horizons and inspires my creativity.",
  "I’m eager to join an environment where I can further develop my craft, tackle complex problems, and contribute meaningful solutions. If you’re looking for a passionate developer who’s observant, quick to solve challenging issues, and always ready to learn—let’s connect!",
];

export const EDUCATION = [
  {
    degree: "B.Tech in Computer Science and Design",
    institution: "Yeshwantrao Chavan College of Engineering (YCCE), Nagpur",
    duration: "2022 - 2025",
    cgpa: "8.6 CGPA",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTusoiNbXi6ArDy2ZhA92i6953SCWki3VbC2Q&s",
  },
  {
    degree: "Diploma in Computer Science and Engineering",
    institution: "Dr. Panjabrao Deshmukh Polytechnic, Amravati",
    duration: "2019 - 2022",
    cgpa: "9.06 CGPA",
    logo: "https://assets.collegedunia.com/public/college_data/images/logos/1598343432Logo111.png",
  },
];

export const EXPERIENCES = [
  {
    year: "January 2025 - June 2025",
    role: "Full Stack Developer Intern",
    company: "Gristip Software",
    description: [
      "•Developed and executed an extensible Inventory Management System utilized by more than 50 daily users in several locations with 98% accuracy in tracking the stock via modules for product management, barcode-based POS, Excel import, low stock warning, and stock audit reporting.",
      "• Designed intuitive React.js front-end using Formik and Yup, and a robust Node.js back-end, to allow for effortless user interaction with real-time data updates, which achieved a 30% gain in user efficiency and a 40% decrease in manual stock mistakes ",
      "• Worked with cross-functional teams to take business requirements to compelling features, such as a dynamic dashboard, mobile POS application (Flutter), and role-based access, resulting in 25% more user engagement and greater operational transparency.",
    ],
    technologies: [
      "MySQL",
      "React.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Material UI",
    ],
  },
  {
    year: "April 2021 - June 2021",
    role: "Frontend Developer Intern",
    company: "TechAtom Pvt.Ltd",
    description: [
      "•Created 3 elements of the website (console, navigation and content loading) using HTML, CSS, JavaScript, Bootstrap and style components, improved the design to increase user interaction by 25% and make the product responsive, reaching over 15,000 users",
      "• Collaborated with the backend team to integrate APIs to achieve efficient data transfer and 100% data accuracy, reduce data errors by 40%, and effectively improve the overall website experience, thereby increasing website trust and user confidence. ",
      "• Designed more than 10 reusable components to simplify deployment and increase efficiency, reducing loading times by 15%. By optimizing mobile product development, user satisfaction increased by 30% and the total number of service users exceeded 20,000.",
    ],
    technologies: [
      "Javascript",
      "React.js",
      "Next.js",
      "HTML",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Placement Cell",
    link: "https://github.com/tanush-agarkar/Home-Rental-Application",
    image: project2,
    description: [
      "Developed a scalable Job Search and Placement Management System (MERN stack) with sophisticated job search filters (location, salary, job type), an employer dashboard for easy job listing management, JWT authentication, and MongoDB for real-time notification and 100% data security.",
      "Created a completely responsive, trendy UI using ReactJS, supporting 99% device compatibility. Integrated Multer for secure resume uploads and Cloudinary for smooth profile image management, significantly increasing user interaction and accessibility.",
      "Developed a pioneering Exam Location Management module where placement officers can book exam locations, and students are empowered with interactive maps and directions to tests and interviews, enhancing transparency and logistics.",
    ],
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Home Rental Application",
    link: "https://youtu.be/G_07yZrBUhU",
    image: project1,
    description: [
      "Developed a scalable property rental platform using the MERN stack (MongoDB, Express.js, React.js, Node.js), offering landlords the ability to list properties with detailed descriptions, images, and terms, while enabling tenants to search, filter, request viewings, and schedule appointments, significantly streamlining the entire rental process.",
      "Implemented robust user authentication and profile management for over 500 users, using JWT for secure authentication and bcrypt for password encryption, ensuring data safety and seamless login. Enhanced user engagement through a Favorites List feature, allowing tenants to save and compare properties, facilitating better decision-making.",
      "Crafted a fully responsive and attractive user interface optimized for performance and cross-device accessibility, delivering a seamless experience across desktops, tablets, and mobile devices. Optimized backend APIs and database queries for faster load times and efficient data retrieval, ensuring smooth and reliable platform functionality.",
    ],
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
];

export const CONTACT = {
  address: "Nagpur, Maharashtra",
  phoneNo: "+91 - 8010447285 ",
  email: "tanushpagarkar@gmail.com",
};

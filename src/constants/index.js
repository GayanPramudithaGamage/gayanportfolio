import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";


export const HERO_CONTENT = `I am a Software Engineer with one year of professional experience in the field and a completed degree in Software Engineering. I utilize React, Vue.js, and Python to transform challenging issues into elegant, user-friendly applications with practical significance. I am passionate about innovation and technical excellence, which motivates me to deliver solutions that exceed the limits of technology.`;

export const ABOUT_TEXT = `I am a dedicated and adaptable Software Engineer with a passion for creating innovative applications. With one year of professional experience at Bluechip Technologies Asia and a degree in Software Engineering, I have developed expertise in React, Vue.js, Python, and Firebase, focusing on building user-centric applications. My journey in software development began with a strong foundation in computer science from IIT, and it has evolved into a career where I continuously embrace new technologies and challenges. I excel in both independent and collaborative environments, having successfully delivered projects ranging from crop management systems to travel planning applications. Beyond coding, I maintain a creative balance through my musical pursuits and playing guitar, which complements my analytical approach to problem-solving.`;

export const EXPERIENCES = [
  {
    year: "2022 - 2023",
    role: "Web Developer",
    company: "Bluechip Technologies Asia",
    description: 'During my internship as a Web Developer, I spearheaded the development of multiple web applications utilizing a modern tech stack including React.js, Firebase, and Vue.js. My portfolio of completed projects encompasses a diverse range of applications, including a Crop Management System, Taxi Web App, Netflix Clone, and Travel Planning Web App. I took ownership of implementing robust authentication systems using Firebase for secure user access across these applications. Additionally, I made significant contributions to open-source projects by enhancing GitHub repositories, particularly in developing NFT and decentralized marketplaces, where I implemented critical user authentication functionalities using Firebase.',
    technologies: ["Javascript", "React.js","VueJs", "Firebase", "mongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio WebsiteFood Delivery Website (On-going) ",
    image: project5,
    description:
      " Developed a responsive food delivery application with JWT authentication, advanced filtering options, and easy ordering process, along with a strong administrative dashboard for easy inventory and order management.",
    technologies: ["React.js", "Express.js", "JSON Web Tokens (JWT)", "MongoDB "],
  },  
  {
    title: "EduSphere - Educational Landing Page",
    image: project4,
    description:
      "Designed and developed a fully responsive educational landing page using Vue.js and Tailwind CSS. The page includes a structured layout with a navbar, hero section, course cards with pricing and discounts, services, categories, client testimonials, and a footer. While nonfunctional, the project showcases modern UI design principles and mobile-first responsiveness.",
    technologies: [" Vue.js", "Tailwind CSS"],
  },  
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
  },  
  {
    title: "Calorie Tracker",
    image: project2,
    description:
      "Nutri-Cal is a mobile app employing CNN technology to recognize Sri Lankan curries, offering users detailed calorie information. It also generates weekly calorie intake reports, aiding users in making informed dietary decisions.",
    technologies: ["Python", "Flutter", "Firebase"  ],
  },
  {
    title: "Mark Attendance System",
    image: project1,
    description:
      " A mobile application and a system to identify a person from a group of people and mark the attendance using facial recognition. Displaying daily, and monthly reports and notifying parents are other key features.",
    technologies: ["Python", "Flutter", "MongoDB"  ],
  },

  
];

export const CONTACT = {
  address: "Iriyagaha, Uluwitike, Galle, Sri Lanka",
  phoneNo: "+94 77 326 4441 ",
  email: "gayanpramudithag@gmail.com",
};

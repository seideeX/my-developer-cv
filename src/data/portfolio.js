import ibims from "../assets/ibims.png";
import cra from "../assets/cra.png";
import avatar from "../assets/me22.jpg";

export const profile = {
  name: "John Xedric B. Alejo",
  title: "Full-Stack Developer",
  avatar,
  intro:
    "I build responsive web applications with React, PHP, Laravel, and MySQL, from the user interface to backend logic and database design.",
  about: [
    "I'm a Bachelor of Science in Information Technology graduate from Isabela State University – Ilagan Campus, focused on database-driven web applications.",
    "I've worked on barangay and disaster-risk information systems, supported an ICT unit as an intern, and trained students in database design and SQL as a resource speaker.",
  ],
  goal: "Seeking an opportunity to apply my technical, leadership, and problem-solving skills while continuing to grow professionally.",
  location: "City of Ilagan, Isabela, Philippines",
  email: "johnxedricalejo07@gmail.com",
  phone: "(+63) 9063852906",
  github: "https://github.com/seideeX",
  linkedin: "", // add URL to show
  resumeUrl: "/JXA-Resume.pdf",
};

export const skills = [
  { cat: "Frontend", items: ["React", "JavaScript", "HTML", "CSS"] },
  {
    cat: "Backend",
    items: ["PHP", "Laravel", "Java", "C++", "Python", ".NET"],
  },
  { cat: "Database", items: ["MySQL", "SQL", "Database design"] },
  { cat: "Tools & Workflow", items: ["Git", "GitHub", "MS Office", "Canva"] },
  {
    cat: "Networking & Support",
    items: ["LAN setup", "Cisco Packet Tracer", "Hardware troubleshooting"],
  },
];

export const projects = [
  {
    id: "ibims",
    title: "iBIMS",
    description:
      "Ilagan City Barangay Information Management System for efficient barangay data management and reporting.",
    overview:
      "A full-stack web application that supports barangay data management and reporting for the City of Ilagan.",
    category: ["Full Stack", "React", "Laravel", "PHP"],
    technologies: ["Laravel", "React", "PHP", "GitHub"],
    features: ["Barangay data management", "Reporting"],
    contribution: "",
    challenges: [],
    image: ibims,
    screenshots: [],
    demoUrl: "",
    githubUrl: "", // add the real repo URL
    status: "Completed",
    featured: true,
  },
  {
    id: "cdrrmo-risk-assessment",
    title: "CDRRMO Risk Assessment",
    description:
      "Community Risk Assessment System for assessing disaster damages in barangays of the City of Ilagan.",
    overview:
      "A system that supports data collection, risk analysis, and reporting of disaster damages across barangays.",
    category: ["Full Stack", "Laravel", "PHP"],
    technologies: ["PHP", "Laravel", "MySQL", "GitHub"],
    features: ["Data collection", "Risk analysis", "Reporting"],
    contribution: "",
    challenges: [],
    image: cra,
    screenshots: [],
    demoUrl: "",
    githubUrl: "",
    status: "Completed",
    featured: true,
  },
];

export const experience = [
  {
    role: "President",
    org: "Philippine Information Technology of the North (PiTON)",
    period: "AY 2025–2026",
    text: "Led a student IT organization promoting technology education and innovation; organized programs, workshops, seminars, and events with faculty, industry professionals, and student leaders.",
  },
  {
    role: "Information Technology Intern (OJT)",
    org: "Schools Division Office – City of Ilagan, ICT Unit",
    period: "2025–2026",
    text: "Provided ICT support (troubleshooting, printer maintenance, software installation, network assistance) and helped develop Project TALA, covering database design, coding, testing, debugging, and biometric integration.",
  },
  {
    role: "Resource Speaker – Database Training",
    org: "Ifugao State University, Potia Campus",
    period: "2025",
    text: "Led lectures and hands-on sessions on database concepts, design, SQL, and application development.",
  },
  {
    role: "Resource Speaker – Database Training",
    org: "Isabela State University, Cabagan Campus",
    period: "2025",
    text: "Delivered database programming workshops on database management systems, data modeling, and database-driven applications.",
  },
  {
    role: "Research Presenter",
    org: "International Conference on Sustainable Health, Education, and Technology",
    period: "2025",
    text: "Presented a research paper at an international academic conference.",
  },
  {
    role: "Two-Time Champion – Database Application Development",
    org: "ICT Roadshow Competitions",
    period: "2024–2025",
    text: "Won consecutive championships by designing and developing database-driven applications.",
  },
];

export const education = [
  {
    degree: "BS in Information Technology",
    school: "Isabela State University – Ilagan Campus",
    period: "2022 – 2026",
  },
  {
    degree: "Senior High School – STEM",
    school: "Isabela National High School",
    period: "2020 – 2022",
  },
  {
    degree: "Junior High School",
    school: "San Antonio National Agro-Industrial and Vocational High School",
    period: "2016 – 2020",
  },
];

export const certificates = [
  "IT Specialist Certification in Databases (2024)",
  "2nd Place – TRON 2025 Cyber Defense",
  "Champion – 2024 CSSICT Roadshow (Database Application)",
  "Champion – 2025 CSSICT Roadshow (Database Application)",
  "Regional ITE Convention 2025",
  "National Certificate II – Computer Systems Servicing (2025)",
  "TCON 7 National IT Certificate 2023",
  "AI Ready ASEAN Certificate 2025",
];

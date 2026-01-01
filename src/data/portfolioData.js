// Portfolio Data - Update this file with your personal information

export const personalInfo = {
  name: "Dishant Nakrani",
  title: "Full Stack Developer",
  tagline: "Building modern web applications with clean code and creative solutions",
  email: "your.email@example.com",
  location: "Your City, Country",
  resume: "/resume.pdf", // Add your resume link
  social: {
    github: "https://github.com/dishant410",
    linkedin: "https://www.linkedin.com/in/dishant-nakrani-b63315298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    twitter: "https://twitter.com/yourusername", // Optional
  }
};

export const aboutMe = {
  description: `I'm a passionate Full Stack Developer with a strong foundation in modern web technologies. 
  I love creating user-friendly applications that solve real-world problems. As a fresher, I'm eager to learn, 
  grow, and contribute to innovative projects while writing clean, maintainable code.`,
  image: "/profile.jpg" // Add your profile image to public folder
};

export const skills = {
  frontend: [
    "React.js",
    "TypeScript",
    "Redux-Toolkit",
    "Tailwind CSS",
  ],
  backend: [
    "Node.js",
    "Express.js",
  ],
  databases: [
    "MongoDB",
    "PostgreSQL",
  ],
  tools: [
    "Git & GitHub",
    "VS Code",
    "Postman",
  ]
};

export const projects = [
  {
    id: 1,
    title: "E-learning Platform",
    description: "A full-stack course selling platform with user authentication, course catalog, video streaming, enrollment system, and payment integration for purchasing courses.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    github: "https://github.com/dishant410/Lerning-Management-System",
    live: "https://your-ecommerce-demo.com", // Optional
    image: "/E-learning.jpg" // Add project images to public/projects folder
  },
  {
    id: 2,
    title: "barber-queue-system",
    description: "A queue management system for barbershops with real-time queue tracking, appointment scheduling, and customer notification features.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    github: "https://github.com/dishant410/barber-queue-system",
    live: "https://your-task-app.com",
    image: "/barber.jpeg"
  },
  {
    id: 3,
    title: "Netflix",
    description: "A Netflix clone streaming platform with user authentication, movie browsing, search functionality, and video player integration.",
    technologies: ["React", "Redux", "Firebase", "TMDB API", "Tailwind CSS"],
    github: "https://github.com/dishant410/Netflix",
    live: "https://your-weather-app.com",
    image: "/netflix.png"
  },
  {
    id: 4,
    title: "ChatApp",
    description: "A real-time chat application with private messaging, group chats, user authentication, and online status indicators.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
    github: "https://github.com/dishant410/ChatApp",
    live: null,
    image: "/chatapp.jpeg"
  }
];

export const experience = [
  {
    id: 1,
    type: "education",
    title: "Bachelor of Technology in Information Technology",
    organization: "Charusat University of Science and Technology",
    location: "Gujarat, India",
    startDate: "Aug 2020",
    endDate: "Present",
    description: "Currently pursuing B.Tech in Information Technology with excellent academic performance. Relevant coursework: Data Structures, Algorithms, Web Development, Database Management, Software Engineering.",
    achievements: [
      "CGPA: 8.86/10",
      "Strong foundation in full-stack web development",
      "Built multiple real-world projects using MERN stack"
    ]
  },
  {
    id: 2,
    type: "internship",
    title: "Full Stack Development Intern",
    organization: "APPIFLY INFOTECH",
    location: "Surat, Gujarat",
    startDate: "May 2025",
    endDate: "Jun 2025",
    description: "Successfully completed 1.5 month internship as a Full Stack Development Intern. Worked on developing and maintaining web applications using React and Node.js. Demonstrated dedication, enthusiasm, and a strong work ethic throughout the internship.",
    achievements: [
      "Developed and contributed to full-stack web applications",
      "Worked with React and Node.js technologies",
      "Collaborated with the development team and learned industry best practices"
    ]
  },
  {
    id: 3,
    type: "certification",
    title: "MERN Stack Development",
    organization: "Self-Learning (YouTube & Online Resources)",
    location: "Online",
    startDate: "Jan 2024",
    endDate: "Present",
    description: "Self-taught full-stack development through comprehensive YouTube tutorials and online documentation. Mastered MERN stack (MongoDB, Express.js, React.js, Node.js), REST APIs, and modern web development practices through hands-on project building.",
    achievements: [
      "Built multiple full-stack projects including E-learning Platform, Chat Application, and Netflix Clone",
      "Implemented user authentication, database design, and RESTful APIs",
      "Gained expertise in React.js, Node.js, Express.js, and MongoDB through practical application"
    ]
  },
  {
    id: 4,
    type: "achievement",
    title: "Competitive Programming & Academic Excellence",
    organization: "LeetCode, GeeksforGeeks & Charusat University",
    location: "Online & University",
    startDate: "2023",
    endDate: "Present",
    description: "Demonstrated strong problem-solving skills through competitive programming and achieved academic excellence in university examinations.",
    achievements: [
      "Solved 400+ Data Structures and Algorithms problems on LeetCode and GeeksforGeeks",
      "Earned 4 badges on LeetCode for consistent problem-solving performance",
      "Secured 5th rank in academic 4th semester examinations"
    ]
  }
];

export const contactInfo = {
  email: "dishantnakrani410@gmail.com",
  phone: "+91 8154997758", // Optional
  address: "Surat,Gujarat",
  availability: "Available for full-time opportunities"
};

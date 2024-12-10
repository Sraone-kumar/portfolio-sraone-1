const info = {
  home: {
    name: "Sravan Kumar",
    designation: "Full stack developer",
    description:
      "Hi! Welcome to my page. I'm a full stack developer well experienced with react, node.js. I have experience and skill that you are looking for! contact me to collab or hire me!",
    social: {
      gmail: "sravan.mekala99@gmail.com",
      linkedIn: "https://www.linkedin.com/in/sravan-kumar-mekala-3297821b1",
      resume: "/resume/resume.pdf",
      x: "https://x.com/sraone_0119",
      github: "https://github.com/Sraone-kumar/",
    },
  },
  skills: {
    name: "SKILLS",
    languages: {
      name: "Programming languages",
      values: ["javascript", "python", "java"],
    },
    frameworks: {
      name: "Frameworks",
      values: ["react", "express", "django"],
    },
    databases: {
      name: "databases",
      values: ["Mysql", "postgreSQL", "MongoDB"],
    },
    cloud: {
      name: "Cloud Platforms",
      values: ["AWS", "GCB", "Azure"],
    },
    devops: {
      name: "devops",
      values: ["git", "github", "jira", "jenkins", "docker"],
    },
    other: {
      name: "other tools",
      values: ["vscode", "postman", "chrome dev tools"],
    },
  },
  projects: {
    name: "PROJECTS",
    values: [
      {
        name: "DealsDotCom",
        info: [
          "A fullstack ecommerce app built with mern stack with features like role based authentication, cart, messaging functionalities.",
          "Real time sales and order analysis, real time messaging and chat with admin.",
          "visit the git hub page of this repo for details. Please consider giving a star if you like the project!.",
        ],
        tags: ["react", "express", "mongodb", "socket.io"],
        livelink: "https://dealsdotcom.netlify.app",
        githublink: "https://github.com/Sraone-kumar/Ecommerce_sraone_website",
      },
      {
        name: "Portfolio page",
        info: [
          "This is my portfolio page that you are currently looking at.",
          "I have built this page using react/vite and utilized tailwindcss for styling and framer-motion library for cool animations.",
          "visit the git hub page of this repo for details. Please consider giving a star if you like the project!.",
        ],
        tags: ["react", "tailwind", "framer-motion"],
        livelink: "https://sraone-kumar.netlify.app/",
        githublink: "https://github.com/Sraone-kumar/portfolio-sraone-1",
      },
    ],
  },
  experience: {
    name: "EXPERIENCE",
    values: [
      {
        date: "MAR 2023-PRESENT",
        designation: "Programmer Analyst",
        company: "cognizant",
        details: [
          "Build and automated a real time a web dash board using react and node.js that provides health status based on the windows services running on a server. This has significantly reduced the work force required to manually check and maintain the servers.",
          "Build and developed a GenAI RAG application using react,node and python. Application consists of multiple features like rag chat bot, sentiment analysis, score estimation.",
        ],
      },
      {
        date: "SEP 2022- MAR 2023",
        designation: "Intern",
        company: "cognizant",
        details: [
          "Build a real time authentication system using node,express and react.",
          "Utilized JSON Webtoken and bcrypt libraries for sessioning and encryption.",
          "Maintained clean code and wrote tests and well documented the code.",
        ],
      },
    ],
  },
};

export default info;

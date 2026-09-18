export const skills = [
  { n: "JavaScript (ES6+)", d: "Core language" },
  { n: "Angular", d: "Primary framework" },
  { n: "React.js", d: "Growing depth" },
  { n: "HTML5 / CSS3", d: "Semantic, responsive" },
  { n: "MongoDB", d: "MERN stack" },
  { n: "Python", d: "Scripting & DSA" },
  { n: "Bootstrap", d: "Rapid UI layout" },
  { n: "Data Structures", d: "Problem solving" },
];

export const tagStrip = [
  "JavaScript (ES6+)", "Angular", "React.js", "HTML5", "CSS3",
  "MongoDB", "Python", "Bootstrap", "Data Structures", "REST APIs"
];

export const roots = [
  { tag: "// root 01", name: "Frontend Development", desc: "Architecting responsive, high-performance UI components.", stack: "Angular & React" },
  { tag: "// root 02", name: "Backend Basics", desc: "Building REST integrations and data-driven features.", stack: "Node.js & MongoDB" },
  { tag: "// root 03", name: "UI Engineering", desc: "Forms, validation, and cross-browser reliability.", stack: "JS & CSS3" },
  { tag: "// root 04", name: "Problem Solving", desc: "Structuring logic with clean, efficient data handling.", stack: "DSA & Python" },
];

export const experience = [
  {
    date: "Mar 2023 — Jun 2024", role: "Software Engineer", co: "Strokx Technologies, Cochin",
    points: [
      "Built and maintained responsive Angular applications aligned with client requirements and modern UI standards.",
      "Developed component-based front-end architecture using data binding, directives, pipes, and lifecycle hooks.",
      "Integrated REST APIs via Angular's HTTP Client and observables for real-time data display.",
      "Implemented form handling and validation to strengthen usability and data integrity.",
    ]
  },
  {
    date: "Apr 2022 — Jan 2023", role: "Junior Software Engineer", co: "Infolitz Software Pvt Ltd, Cochin",
    points: [
      "Developed dynamic, responsive web applications with Angular, HTML, CSS, and JavaScript.",
      "Designed Angular forms for efficient data collection and seamless user interaction.",
      "Managed tasks and tracked issues in Jira across a cross-functional team.",
    ]
  },
];

export const projects = [
  {
    tag: "AI / React",
    name: "Nova — AI Chat Assistant",
    desc: "An AI chat assistant built with React and the Google Gemini API, supporting multi-turn conversations, chat history, and a fully responsive interface. Deployed live on Vercel with secure environment-based API key handling.",
    stack: ["React", "Vite", "JavaScript", "Gemini API", "CSS3", "Vercel"],
    liveUrl: "https://gemini-clone-omega-jet.vercel.app",
    githubUrl: "https://github.com/kripakripz/gemini-clone",
  },
  {
    tag: "MERN / AI",
    name: "Job Application Tracker",
    desc: "A full-stack MERN app to track job applications with a drag-and-drop Kanban pipeline, real-time analytics, and AI-powered resume-to-job matching. Track and manage applications end-to-end with a visual pipeline and analytics dashboard, plus an AI feature that matches job descriptions against your resume to flag skill gaps.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS", "Recharts", "Gemini API"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

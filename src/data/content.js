export const profile = {
  name: 'Abitha M',
  title: 'Aspiring Software Developer | BE CSE III Year',
  email: 'abitha2712005@gmail.com',
  linkedin: 'https://linkedin.com/in/abitha-m-534981293',
  github: 'https://github.com/Abitha2701',
  resume:  '/assets/Abitha M(resume).pdf',
  intro: "Hi, I’m Abitha 👋 — I design and build clean, efficient web apps with modern stacks.",
  about: `I enjoy turning ideas into useful products and collaborating with teams. Recently built projects with React, Node, and MongoDB, focusing on performance and UX. Always learning and exploring new tools to improve developer productivity and user experience.`,
  //  image:  '/assets/profile.jpeg',
}
export const skills = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'],
  backend: ['Node.js', 'REST APIs', 'MongoDB'],
  tooling: ['Git', 'VS Code', 'Postman'],
  languages: ['C', 'Java']
}
export const projects = [
  {
    id: 'codelearn-ml',
    title: 'CodeLearn-ML',
    description: 'Personalized learning platform using ML to adapt content based on learner performance.',
    stack: ['React', 'Node', 'Express', 'MongoDB', 'ML'],
    repo: 'https://github.com/Abitha2701/CodeLearn',
    live: '#',
    image: '/assets/codelearn.jpeg'
  },
  {
    id: 'toycra',
    title: 'ToyCra',
    description: 'E-commerce platform to sell toys with cart, product filters, and admin dashboard.',
    stack: ['MERN', 'Bootstrap'],
    repo: 'https://github.com/Abitha2701/E-commerce-Toys-',
    live: '#',
    image: '/assets/toys.png'
  },
  {
    id: 'event-notify',
    title: 'Event Notification System',
    description: 'Notifies students about college events with schedule, reminders, and subscriptions.',
    stack: ['JavaScript', 'Node', 'MongoDB'],
    repo: 'https://github.com/Abitha2701/Event-Notification-System',
    live: '#',
    image: '/assets/event.gif'
  },
  {
    id: 'quiztopia',
    title: 'Quiztopia',
    description: 'Quiz app for CS core subjects with scoring, categories, and progress tracking.',
    stack: ['Flutter', 'Dart', 'SQLite'],
    repo: 'https://github.com/yourusername/quiztopia',
    live: '#',
    image: '/assets/quiztopia1.jpg'
  },
  {
    id: 'echoai',
    title: 'EchoAI — AI News Summarizer',
    description: 'EchoAI gathers and summarizes news from multiple sources using AI-powered NLP models. ',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI / Hugging Face'],
    repo: 'https://github.com/Abitha2701/ai_news_summarizer',
    live: '#',
    image: '/assets/echoai.jpeg'
  }
]

export const certifications = [
  {
    id: 'ml-basics',
    title: 'Java fundamentals',
    issuer: 'NPTEL',
    year: 2024,
    link: '/assets/nptel.png',
    image: '/assets/nptel.png'
  },
  {
    id: 'react-fundamentals',
    title: 'MERN Stack Development',
    issuer: 'App Innovations',
    year: 2023,
    link: '/assets/intern.png',
     image: '/assets/intern.png'
  }
]

/* default export kept for components that import default */
export default { profile, skills, projects, certifications }
import {
    mobile,     backend,     creator,
    web,        javascript,  html,       
    css,        reactjs,     redux,
    tailwind,   nodejs,      mongodb,    
    git,        docker,      carrent,
    jobit,      tripguide,  threejs,
    php,        postman,    job,
    app,         reactwebsite, bootstrap,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Mongoose Database",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "BootStrap CSS",
      icon: bootstrap,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Postman",
      icon: postman,
    },
    
  ];
  
  const experiences = [
    {
      title: "Web Developer Intern",
      company_name: "Makryot Innovation Pvt Ltd",
      // icon: vidyamantra,
      // iconBg: "#383E56",
      date: "Dec 2022 - Feb 2022",
      points: [
        "Developing and maintaining web applications using js,PHP and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "Web Developer Intern",
    //   company_name: "Makryot Innovation Pvt Ltd",
    //   // icon: vidyamantra,
    //   // iconBg: "#383E56",
    //   date: "Dec 2022 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Job Portal",
      description:
        "Web-based platform that allows users  to  jobs seekers find jobs and recuiter  to  post jobs ",
      tags: [
        {
          name: "HTML, CSS , Javascript, PHP",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "BootStrap",
          color: "pink-text-gradient",
        },
      ],
      image: job,
      source_code_link: "",
    },
    {
      name: " MERN Business Services Managment ",
      description:
        "Web application that enables  businessman to post and showcase the service.",
      tags: [
        {
          name: "node, express",
          color: "blue-text-gradient",
        },
        {
          name: "restapi, mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: reactwebsite,
      source_code_link: "https://github.com/Hariom-Ingle/Service-Management-React",
    },
    {
      name: "Appointment Booking Application",
      description:
        "Developed an Android-based appointment booking application using Java and Android SDK",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "XML",
          color: "green-text-gradient",
        },
        {
          name: "SQLite, Firebase ",
          color: "pink-text-gradient",
        },
      ],
      image: app,
      source_code_link: "https://www.linkedin.com/in/hariom-ingle/",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };

  
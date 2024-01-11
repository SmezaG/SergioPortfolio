import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    incom,
    panamajack,
    net,
    sap,
    cr,
    sql,
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
      title: ".Net Developer",
      icon: web,
    },
    {
      title: "SQL Databases",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Analist",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: ".Net",
      icon: net,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    /*{
      name: "JavaScript",
      icon: javascript,
    },*/
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Sap",
      icon: sap,
    },
    {
      name: "Crystal Reports",
      icon: cr,
    },
    {
      name: "SQL Server",
      icon: sql,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: ".Net Developer",
      company_name: "InCom",
      icon: incom,
      iconBg: "#383E56",
      date: "March 2020 - July 2020",
      points: [
        "Ensuring the proper functioning and maintenance of wind turbine blades to maximize efficiency and performance.",
        "Collaborating with cross-functional teams including technicians, engineers, and other maintenance personnel to ensure the optimal operation of wind turbine blades.",
        "Implementing regular inspections and maintenance procedures to identify and address any issues or damages in a timely manner.",
        "Participating in troubleshooting and repair activities to maintain the operational integrity of wind turbine blades.",
      ],
    },
    {
      title: ".Net Developer",
      company_name: "Panama Jack",
      icon: panamajack,
      iconBg: "#E6DEDD",
      date: "July 2020 - Present",
      points: [
        "Developing and maintaining .Net applications with a focus on data analysis and integrations with web services.",
        "Collaborating with cross-functional teams, including designers, product managers, and other developers, to create high-quality products.",
        "provide robust technical support and personalized training to ensure that end users fully leverage our technological solutions.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    /*{
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },*/
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to create such a powerful and functional .Net application. Sergio exceeded my expectations and delivered a high-quality product in record time.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Integrating our platform with external web services was a challenge, but Sergio showcased his expertise and provided us with a perfect solution. We now have a smooth and efficient connection with our business partners.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Data analysis was crucial for making strategic decisions, and Sergio handled it exceptionally well. Thanks to his skills, we gained valuable insights that helped us optimize our operations and achieve greater success.",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
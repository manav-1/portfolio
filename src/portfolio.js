// Website related settings
const settings = {
  isSplash: true,
  useCustomCursor: false,
};

//Home Page
const greeting = {
  title: "Hello ✌.",
  title2: "Manav",
  logo_name: "Manav",
  nickname: "Manav",
  full_name: "Manav Arora",
  subTitle:
    "Full Stack Developer, Data Science and Machine Learning Enthusiast",
  resumeLink:
    "https://docs.google.com/document/d/1nziLgQE06vxeZ785SMLEg_36zbLvFVNvlVmJRUTeyVI/edit?usp=sharing",
  mail: "mailto:manav81101@gmail.com",
};

const socialMediaLinks = {
  github: "https://github.com/manav-1",
  linkedin: "https://www.linkedin.com/in/manav81101/",
  gmail: "manav81101@gmail.com",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing mobile applications using React Native",
        "⚡ Creating application backend in Node, Express & Flask and Fast API",
        "⚡ Integration of third party services such as Firebase",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
      ],
    },
    {
      title: "Machine Learning Enthusiast",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Worked on Multiple Projects with many Machine Learning models",
        "⚡ Experience in developing a server with Flask",
        "⚡ Experience hosting and managing websites",
        "⚡ Creating a Bulk Emailing Application with Tkinter, SMTPlib",
      ],
      softwareSkills: [
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "logos:flask",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Keshav Mahavidyalaya, University of Delhi",
      subtitle: "BSc. Hons. Computer Science",
      logo_path: "keshav.png",
      alt_name: "Keshav Mahavidyalaya",
      duration: "2019 - Present",
      descriptions: [
        "⚡ I'm currently pursuing my Bachelors in Computer Science.",
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Science course. ",
      ],
      website_link: "http://keshav.du.ac.in",
    },
    {
      title: "Shaheed Sukhdev College of Business Studies",
      subtitle: "Business Analytics Course",
      logo_path: "sscbs.png",
      alt_name: "SSCBS",
      duration: "2019 - 2019",
      descriptions: [
        "⚡ I have studied core subjects like Business Analytics, Python, Data Wrangling",
        "⚡ I have also completed various projects on Data Analytics, Data Cleaning",
        "⚡ I have implemented several projects using various Machine Learning Models",
      ],
      website_link: "http://sscbs.du.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "The Complete 2021 Web Development BootCamp",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-ade11949-d41d-452e-b99a-f9f89eed7eb5/",
      alt_name: "The Complete 2021 Web Development BootCamp",
      color_code: "#b190b099",
    },
    {
      title: "Machine Learning by Andrew Ng",
      subtitle: "Coursera",
      logo_path: "coursera-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
      alt_name: "hackathon",
      color_code: "#C5E2EE",
    },
    {
      title: "Introduction to Programming Using Python",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      certificate_link: "https://www.udemy.com/certificate/UC-33E4VCVZ/",
      alt_name: "Udemy",
      color_code: "#ffbfae",
    },
    {
      title: "Data Analysis",
      subtitle: "Shaheed Sukhdev College Of Business Studies",
      logo_path: "sscbs.png",
      certificate_link:
        "https://drive.google.com/open?id=1cfo0rog0-7i5413eUc4CCvhaTpV7CJEx",
      alt_name: "Course",
      color_code: "#2AAFED66",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internships, Work Experience",
  description:
    "I've been doing 2 internships . I've mostly done projects on my own and I am actively looking for internships in Web Development.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Coding Instructor (Freelancer) ",
          company: "Toppr Educational Services",
          company_url: "https://toppr.com",
          logo_path: "toppr.png",
          duration: "July 2020 - Present",
          location: "Work from Home",
          description: `Teaching Students About Python, Web Development( React JS/React Native, Matter JS,Vanilla JS), Arduino UNO, Python Data Analysis, Game Dev, 
          `,
          color: "#0071C5",
        },
        {
          title: "Curriculum Associate (Freelancer)",
          company: "Toppr Educational Services",
          company_url: "https://toppr.com",
          logo_path: "toppr.png",
          duration: "July 2021 - Present",
          location: "Work from Home",
          description: ` Working Closely with the curriculumteam , developing Class Summaries, Assingments, Quizzes for Students`,
          color: "#ee3c26",
        },
        {
          title: "Coding Instructor (Freelancer) ",
          company: "Notchup",
          company_url: "https://www.notchup.co/",
          logo_path: "notchup.png",
          duration: "March 2020 - Sept 2020",
          location: "Work from Home",
          description: `Teaching Students About Game Dev, App Dev, 
          `,
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "manav.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Placement Portal",
      url: "https://github.com/manav-1/admin_console",
      description:
        "This is a portal that can be used by college placement cells, for circulating multiple placement Opportunities, maintaining data of all of them as well",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "1",
      name: "Placement Server with Express Server",
      url: "https://github.com/manav-1/express-server-Placement-Portal",
      description:
        "Express and NodeJS server for handling placement portal requests, like updating profile, retreiving data about Placements ",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Express JS",
          iconifyClass: "logos:express",
        },
      ],
    },
    {
      id: "9",
      name: "Food App ( In Development )",
      url: "https://github.com/manav-1/foodapp",
      description:
        "This is a Food App, Searching for Recipes, Random Recipes, Profile for saving Favorite Recipes",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Mongo DB",
          iconifyClass: "vscode-icons:file-type-mongo",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "10",
      name: "Food App Express Server ( In Development )",
      url: "https://github.com/manav-1/foodapp",
      description:
        "This is a Server for Food App, handling Authentication, Profile ( JWT )",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Express JS",
          iconifyClass: "logos:express",
        },
      ],
    },
    {
      id: "8",
      name: "QuizMania App",
      url: "https://github.com/manav-1/Quizmania",
      description:
        "This is a Quiz App with all features, creating MCQ Quizzes, giving MCQ Quizzes, managing a Profile",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },

    {
      id: "2",
      name: "Weather App",
      url: "https://github.com/manav-1/weatherapp",
      description:
        "Simple Weather Application using OpenweatherMap API for Weather and LocationIQ for Reverse Geocoding API.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "3",
      name: "Internship Fair Website",
      url: "https://github.com/manav-1/Internship-Fair-Website",
      description:
        "A website made for Virtual Internship Fair, hosted across India for students applying for internships  ",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "PHP",
          iconifyClass: "logos-php",
        },
      ],
    },
    {
      id: "4",
      name: "Breast Cancer Classification ( Malignant/ Benign )",
      url:
        "https://github.com/manav-1/Data-Analysis/tree/main/Breast%20Cancer%20Diagnostic%20Classification",
      description:
        "A Data Analysis Project , working on Breast cancer classification for detecting if the tumour is malignant or benign ",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "5",
      name: "Boston Housing Prices",
      url:
        "https://github.com/manav-1/Data-Analysis/tree/main/Boston%20Housing%20Prices",
      description:
        "A Data Analysis Project , working on Boston Housing Prices Regression Model for Predicting the housing Prices ",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "6",
      name: "Black Friday Sales Prediction",
      url:
        "https://github.com/manav-1/Data-Analysis/tree/main/BlackFridaySalesPrediction",
      description:
        "A Data Analysis Project , working on predicting the sales of a retail store  ",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "7",
      name: "Customer Churn Prediction",
      url:
        "https://github.com/manav-1/Data-Analysis/tree/main/Customer%20Churn%20Prediction",
      description:
        "A Data Analysis Project , working on predicting the churn rate of bank customers",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "12",
      name: "Driving License Flask Server",
      url: "https://github.com/manav-1/DrivingLicenseFlaskServer",
      description:
        "A Flask Server that accepts an image of Driving License, and sends back if the driving license is valid/not valid by checking the data in the image",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "logos:flask",
        },
      ],
    },
    {
      id: "13",
      name: "Computer Vision Projects",
      url: "https://github.com/manav-1/Computer-Vision-Projects",
      description: "A Repository of my Computer Vision Projects",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "logos:opencv",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};

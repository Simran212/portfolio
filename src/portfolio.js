/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import lnmiitlogo from "../src/assets/images/Lnmiit-jaipur.png";
import zubi from "../src/assets/images/zubi_org_logo.jpeg";
import revfinsure from "../src/assets/images/revfin..jpg";
import ecommerce from "../src/assets/images/ecommerce.png";
import PurposeofBlogging from "../src/assets/images/Purpose-of-Blogging.jpeg";
import restaurant from "../src/assets/images/restaurant.avif";
import OCR from "../src/assets/images/OCR.jpg";
import canva from "../src/assets/images/canva.png";
import quiz from "../src/assets/images/quiz.avif";
import weather from "../src/assets/images/weather.png";
import freecodecamp from "../src/assets/images/freecodecamp.png";
import revfin from "../src/assets/images/revfin.png";
import leetcode from "../src/assets/images/leetcode.png";
import GeeksforGeeks from "../src/assets/images/GeeksforGeeks.jpeg";
import demons from "../src/assets/images/demons.jpg";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Simran Purohit",
  title: "Hi All, I'm Simran Purohit",
  // subTitle: emoji(
  //   "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / NextJs / NestJs/ Tailwind CSS / and some other cool libraries and frameworks."
  // ),
  subTitle: (
    <span>
      A passionate Full Stack Software Developer
      <span style={{color: "#FF5733"}}></span> having an experience of building
      Web applications with{" "}
      <span style={{color: "#3498DB", fontWeight: "bold"}}>JavaScript</span> /{" "}
      <span style={{color: "#E74C3C", fontWeight: "bold"}}>Reactjs</span> /{" "}
      <span style={{color: "#1ABC9C", fontWeight: "bold"}}>Nodejs</span> /{" "}
      <span style={{color: "#9B59B6", fontWeight: "bold"}}>NextJs</span> /{" "}
      <span style={{color: "#F39C12", fontWeight: "bold"}}>NestJs</span> /{" "}
      <span style={{color: "#2980B9", fontWeight: "bold"}}>Tailwind CSS</span>{" "}
      and some other cool libraries and frameworks.
    </span>
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ZHhhvL29ms_3A8hUGFmF3w6MTChc1Ql9/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Simran212",
  linkedin: "https://www.linkedin.com/in/simran-purohit-5019a9192/",
  gmail: "officialsimran44@gmail.com",
  instagram: "https://www.instagram.com/simran._.212/",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    }
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "The LNM Institute of Information Technology",
      logo: lnmiitlogo,
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2019 - April 2023",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "Data Structures and Algorithms",
        "Operating Systems",
        "Computer Networks",
        "Database Management Systems",
        "Software Engineering",
        "Computer Architecture"
      ]
    },
    {
      schoolName: "The LNM Institute of Information Technology",
      logo: lnmiitlogo,
      subHeader: "Master of Science in Computer Science",
      duration: "August 2023 - May 2024",
      desc: "A Blockchain-Based Conditional Privacy-Preserving Authentication Scheme for Vehicular Communications",
      descBullets: [
        "Handling security and privacy issues} using Blockchain technology in Vehicular Ad-hoc Networks (VANETs) which potentially improves driver safety and traffic management efficiency through timely sharing of traffic status among vehicles."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "FullStack Developer",
      company: "Revfin",
      companylogo: revfin,
      date: "Feb 2024 – Present",
      desc: "Developed and deployed full-stack applications at Revfin, demonstrating proficiency in React, Next.js, NestJS, and AWS. Engineered robust solutions for leave management, including complex approval workflows and secure authentication.",
      descBullets: [
        "Built scalable backend systems using serverless functions and MongoDB.",
        "Optimized application performance and user experience through careful architecture and implementation.",
        "Contributed to front-end development for Revfin's insurance website."
      ]
    },
    {
      role: "Front-End Developer",
      company: "DeMons",
      companylogo: demons,
      date: "May 2017 – May 2018",
      desc: "Blockchain Explorer - ⁠Built a responsive blockchain explorer using Next.js, HTML, CSS, and JavaScript, allowing users to track transactions and blockchain data. ⁠Utilized Bootstrap and TailwindCSS to create a visually appealing and engaging user interface.⁠Implemented real-time updates using WebSockets, enabling users to track live blockchain data. ⁠Collaborated with backend developers to integrate API data and ensure seamless data flow."
    },
    {
      role: "Software Engineer Intern",
      company: "Zubi.io",
      companylogo: zubi,
      date: "Jan 2015 – Sep 2015",
      desc: " ⁠Contributed to the development of a web application using Next.js, React, and Node.js, gaining hands-on experience with modern web development technologies. ⁠Assisted in designing and implementing a RESTful API using Node.js and Express, understanding API design principles and development. ⁠Participated in Agile development methodologies, learning to collaborate with teams and manage project timelines."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle:
    "Innovative solutions, built with MERN stack and a passion for excellence.",
  projects: [
    {
      image: revfinsure,
      projectName: "Revfin",
      projectDesc: "Insurance website of revfin",
      footerLink: [
        {
          name: "Revfinsure",
          url: "https://revfinsure.in/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: ecommerce,
      projectName: "E-commerce Store",
      projectDesc: "",
      footerLink: [
        {
          name: "E-commerce Website",
          url: "https://mern-store-gold.vercel.app/#instagram"
        }
      ]
    },
    {
      image: PurposeofBlogging,
      projectName: "Blog Application",
      projectDesc: "",
      footerLink: [
        {
          name: "Blog Application",
          url: "https://bugblog.netlify.app/"
        }
      ]
    },
    {
      image: restaurant,
      projectName: "Restaurant Application",
      projectDesc: "",
      footerLink: [
        {
          name: "Restaurant Application",
          url: "https://bugblog.netlify.app/"
        }
      ]
    },
    {
      image: OCR,
      projectName: "OCR",
      projectDesc: "",
      footerLink: [
        {
          name: "OCR",
          url: "https://fascinating-dragon-a03024.netlify.app/"
        }
      ]
    },
    {
      image: canva,
      projectName: "Canva",
      projectDesc: "",
      footerLink: [
        {
          name: "Canva",
          url: "https://github.com/Simran212/canvas"
        }
      ]
    },
    {
      image: quiz,
      projectName: "Quiz Management System",
      projectDesc: "",
      footerLink: [
        {
          name: "Quiz Management System",
          url: "https://bugblog.netlify.app/"
        }
      ]
    },
    {
      image: weather,
      projectName: "Weather App",
      projectDesc: "",
      footerLink: [
        {
          name: "Weather App",
          url: "https://bugblog.netlify.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Coding Platforms And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "freeCodeCamp Certifications",
      subtitle: "",
      image: freecodecamp,
      imageAlt: "",
      footerLink: [
        {
          name: "JavaScript Algorithms and Data Structures",
          url: "https://www.freecodecamp.org/certification/simran212/javascript-algorithms-and-data-structures"
        },
        {
          name: "Responsive Web Design",
          url: "https://www.freecodecamp.org/certification/simran212/responsive-web-design"
        }
      ]
    },
    {
      title: "Leetcode",
      subtitle: "",
      image: leetcode,
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Coding Profile",
          url: "https://leetcode.com/u/simran44/"
        }
      ]
    },

    {
      title: "Geeks for Geeks",
      subtitle: "",
      image: GeeksforGeeks,
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Coding Profile",
          url: "https://www.geeksforgeeks.org/user/simran44priti/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9829488243",
  email_address: "officialsimran44@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

import {
  nmims,
  rotaryClub,
  infinix,
  stuco,
  projectDefault,
  presidency,
  pace,
  caradvice,
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiMicrosoftazure,
  SiExpress,
  SiNodedotjs,
  SiFirebase,
  SiHtml5,
  SiTensorflow,
  SiOpencv,
  SiFastapi
} from "react-icons/si";

import {
  IoIosNotificationsOutline
} from "react-icons/io";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/12WhOTdYUnO9AsF9_vUzTD4oxHI9yxBSW/view?usp=drive_link";
export const repoLink = "https://github.com/deepakrjain/portfolio";
export const callToAction = "https://www.linkedin.com/in/deepakrjain";

export const navLinks = [
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// academic experiences
export const educationList = [
  {
    id: "education-1",
    icon: nmims,
    title: "SVKM's NMIMS, Navi Mumbai",
    degree: "Bachelor of Technology",
    duration: "July 2022 - May 2026",
    content1: "Computer Engineering",
    content2: "3.85/4.0 CGPA",
  },
  {
    id: "education-2",
    icon: pace,
    title: "Pace Junior Science College, Thane",
    degree: "HSC",
    duration: "May 2020 - June 2022",
    content1: "Graduated with a distinction.",
    content2: "70%",
  },
  {
    id: "education-3",
    icon: presidency,
    title: "Presidency School, Bhiwandi",
    degree: "CISCE X",
    duration: "May 2009 - June 2020",
    content1: "Graduated with a distinction.",
    content2: "92.4%",
  },
];

// skills - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-3",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-4",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-5",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-6",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-7",
        icon: SiJavascript,
        name: "JavaScript",
      }
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-2",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-3",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-4",
        icon: SiJquery,
        name: "jQuery",
      }
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-2",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-3",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-4",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-5",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-6",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "t-7",
        icon: SiVite,
        name: "ViteJS",
      },
    ],
  },
];

//work experience here
// export const experiences = [
//   {
//     organisation: "Oracle, India",
//     logo: oracle,
//     link: "https://www.oracle.com/in/",
//     positions: [
//       {
//         title: "Member of Technical Staff - 1",
//         duration: "Jul 2024 - Present",
//         content: [
//           {
//             text: "Working in the DBaaS Control Plane team in the Database Unit.",
//             link: "",
//           },
//         ],
//       },
//       {
//         title: "Member of Technical Staff Intern",
//         duration: "May 2023 - Jul 2023",
//         content: [
//           {
//             text: "Worked with the Exadata Cloud@Customer team in the Database Unit.",
//             link: "",
//           },
//           {
//             text: "Wrote APIs in Java to help gracefully migrate a running ExaC@C infrastructure to a new region in the case of a region failure",
//             link: ""
//           }
//         ],
//       },
//     ],
//   },
//   {
//     organisation: "Averlon",
//     logo: averlon,
//     link: "https://averlon.ai/",
//     positions: [
//       {
//         title: "Software Developer Intern",
//         duration: "Sept 2023 - Feb 2024",
//         content: [
//           {
//             text: "Added support for the discoverability of Microsoft Azure assets utilising Go and Gremlin.",
//             link: ""
//           },
//           {
//             text: "Extended support for Azure for reachability analysis of assets for cloud security posture management.",
//             link: ""
//           }
//         ],
//       },
//     ],
//   },
//   {
//     organisation: "IRIS, NITK",
//     logo: iris,
//     link: "https://iris.nitk.ac.in/about_us",
//     positions: [
//       {
//         title: "Tech Lead",
//         duration: "Apr 2023 - Apr 2024",
//         content: [
//           {
//             text: "Led a team of 40+ students in digitizing administrative, academic and alumni-related work.",
//             link: "",
//           },
//           {
//             text: "Managed all phases of Software Development Life Cycle (SDLC) for 15+ modules.",
//             link: "",
//           },
//         ],
//       },
//       {
//         title: "Web Lead",
//         duration: "Apr 2022 - Present",
//         content: [
//           {
//             text: "Managed a team of 6 student developers while also overlooking multiple modules.",
//             link: "",
//           },
//         ],
//       },
//       {
//         title: "Web Developer",
//         duration: "Nov 2021 - Apr 2022",
//         content: [
//           {
//             text: "Added Conditional Fields support to the Forms Module.",
//             link: "",
//           },
//         ],
//       },
//       {
//         title: "Web Developer Intern",
//         duration: "Jun 2021 - Oct 2021",
//         content: [
//           {
//             text: "Developed a multi-role approval flow system to facilitate data collection and display on the Institute's Department Websites.",
//             link: "",
//           },
//         ],
//       },
//     ],
//   }
// ];

//information about projects
export const projects = [
  {
    id: "project-1",
    title: "SkillMaxxing: AI-Driven Adaptive Learning Platform",
    github: "https://github.com/jxxt/SkillMaxxing",
    link: "https://skillmaxxing.vercel.app",
    image: projectDefault,
    content:
      "AI-powered adaptive learning platform featuring Google Gemini-driven content generation, real-time proficiency assessment with dynamic difficulty adjustment, and personalized learning pathways with project-based reinforcement.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiFastapi,
        name: "FastAPI"
      },
      {
        id: "icon-3",
        icon: SiFirebase,
        name: "Firebase"
      },
      {
        id: "icon-4",
        icon: SiPython,
        name: "Python"
      },
    ],
  },
  {
    id: "project-2",
    title: "Real-Time Drowsiness Detection System",
    github: "https://github.com/deepakrjain/drowsiness-detection-dl",
    link: "https://github.com/deepakrjain/drowsiness-detection-dl",
    image: projectDefault,
    content:
      "Real-time monitoring system combining ResNet50V2 deep learning with behavioral signals (EAR/MAR) for drowsiness detection, featuring professional UI with live metrics visualization.",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-2",
        icon: SiTensorflow,
        name: "TensorFlow"
      },
      {
        id: "icon-3",
        icon: SiOpencv,
        name: "OpenCV"
      },
    ],
  },
  {
    id: "project-3",
    title: "QuizSphere",
    github: "https://github.com/deepakrjain/QuizSphere",
    link: "https://github.com/deepakrjain/QuizSphere",
    image: projectDefault,
    content:
      "Quiz creating and taking platform with firebase login and real time leaderboard.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiNextdotjs,
        name: "Next.js"
      },
      {
        id: "icon-4",
        icon: SiIpfs,
        name: "IPFS"
      },
      {
        id: "icon-5",
        icon: SiSolidity,
        name: "Solidity"
      },
      {
        id: "icon-6",
        icon: IoIosNotificationsOutline,
        name: "Push Protocol"
      },
    ],
  },
  {
    id: "project-4",
    title: "CarHub",
    github: "https://github.com/deepakrjain/CarHub_Website",
    link: "https://github.com/deepakrjain/CarHub_Website",
    image: projectDefault,
    content:
      "A web application for browsing and booking car rentals. It allows users to view car details, manage listings, and make reservations.",
    stack: [
      {
        id: "icon-1",
        icon: SiNodedotjs,
        name: "Node"
      },
      {
        id: "icon-2",
        icon: SiExpress,
        name: "Express"
      },
      {
        id: "icon-3",
        icon: SiMysql,
        name: "MySQL"
      }
    ],
  },
  {
    id: "project-5",
    title: "ToDoVault",
    github: "https://github.com/deepakrjain/ToDoVault",
    link: "https://github.com/deepakrjain/ToDoVault",
    image: projectDefault,
    content:
      "ToDo worklist application for task management by setting deadlines on calendar and firestore for data storage",
    stack: [
      {
        id: "icon-1",
        icon: SiFirebase,
        name: "Firebase"
      },
      {
        id: "icon-2",
        icon: SiHtml5,
        name: "HTML"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "Javascript"
      }
    ],
  },
  {
    id: "project-6",
    title: "WeatherNow",
    github: "https://github.com/deepakrjain/WeatherNow",
    link: "https://deepakrjain.github.io/WeatherNow/",
    image: projectDefault,
    content:
      "Web application to display the real-time weather data for any location using the Visual Crossing Weather API.",
    stack: [
      {
        id: "icon-1",
        icon: SiHtml5,
        name: "HTML"
      },
      {
        id: "icon-2",
        icon: SiJavascript,
        name: "Javascript"
      }
    ],
  },
  {
    id: "project-7",
    title: "ScoreKeeper",
    github: "https://github.com/deepakrjain/Scorekeeper",
    link: "https://github.com/deepakrjain/Scorekeeper",
    image: projectDefault,
    content:
      "A simple web-based scorekeeper application for a two-player table tennis game.",
    stack: [
      {
        id: "icon-1",
        icon: SiHtml5,
        name: "HTML"
      },
      {
        id: "icon-2",
        icon: SiJavascript,
        name: "Javascript"
      }
    ],
  },
]

// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

// List out the extra curricular activities you have induldged in like - student clubs, joining research groups etc.
export const extraCurricular = [
  {
    id: 1,
    organisation: "CarAdvice.in",
    title: "Automotive Content Writer",
    duration: "July 2025 - Present",
    content: [
      {
        text: "Write timely, well-researched articles on car launches, industry trends, and market insights for Indian readers.",
        link: "https://www.caradvice.in/author/deepak/",
      },
      {
        text: "Focus on creating accessible, neutral automotive content that engages and informs car buyers and enthusiasts.",
      },
      {
        text: "Collaborate with the editorial team to ensure content meets quality standards and deadlines.",
      },
    ],
    logo: caradvice,
  },
  {
    id: 2,
    organisation: "Infinix AI & ML Club, NMIMS",
    title: "Core Team",
    duration: "Aug 2023 - May 2024",
    content: [
      {
        text: "Hosted and managed IdeaHub (an ideathon on UnStop) during Ignite 6.0, 2019, NMIMS’ annual tech fest.",
        link: "https://www.linkedin.com/posts/deepakrjain_artificialintelligence-machinelearning-ugcPost-7094253187515228160-rNsw?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD1yvC0B93MIkkZ3Hs2GyG2UtrCBFrC-RX8",
      },
      {
        text: "Organised a hands-on workshop on use of various Python libraries such as TensorFlow, Pandas, etc.",
      },
    ],
    logo: infinix,
  },
  {
    id: 3,
    organisation: "Rotary Club of Bhandup",
    title: "Community Service",
    duration: "Jun 2023 - Jul 2023",
    content: [
      {
        text: "Assisted in organizing a free cataract and blood sugar checkup camp, managed patient forms, and supported medical staff with technology use.",
        link: "https://www.linkedin.com/posts/deepakrjain_communityservice-impactfulchange-rotaryimpact-activity-7097983421938872320-464-?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD1yvC0B93MIkkZ3Hs2GyG2UtrCBFrC-RX8",
      },
      {
        text: "Conducted a survey to identify underprivileged schools and areas for targeted resource allocation.",
        link: "",
      },
    ],
    logo: rotaryClub,
  },
  {
    id: 4,
    organisation: "Marketing Committee, NMIMS",
    title: "Member",
    duration: "Aug 2022 - May 2023",
    content: [
      {
        text: "Promoted events via social media and external marketing during Ignite 5.0 (NMIMS' flagship tech fest).",
        link: "",
      },
      {
        text: "Ensured active participation during workshops, seminars and fests.",
        link: "",
      },
    ],
    logo: stuco,
  },
  {
    id: 5,
    organisation: "NMIMS Navi Mumbai",
    title: "Class Representative",
    duration: "Feb 2024 - Dec 2024",
    content: [
      {
        text: "Managed a class of 60+ students for an academic year and coordinated with faculties for smooth conduct of the academics.",
      },
    ],
    logo: nmims,
  },
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/deepakrjain",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/deepakrjain",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:deepakrjain7@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://www.twitter.com/deepakjain_7",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/deepakjain_7",
  },
];

// Your professional summary
export const aboutMe = {
    name: "Deepak Jain",
    githubUsername: 'deepakrjain',
    tagLine: "Full Stack Developer | Content Writer @ CarAdvice.in | Ex-Core @ Infinix =AI & ML Club",
    intro: "Full Stack Developer from Thane, India who is always building something or thinking about the next big idea."
}

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format. 
export const includedRepos = ['publiclab/plots2', 'zulip/zulip', 'paritytech/polkadot-sdk'];
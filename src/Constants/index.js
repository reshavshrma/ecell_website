import {
  innobuzz,
  businessModel,
  c2,c1,b3,b2,b1,a1,a2,a3,
  jayshri,rachna,
  director,neel,aditi,reshav,darshan, monika, akshay, sujal, yadynee, harshada, tanmay, shubhangi,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "event",
    title: "Events",
  },
  {
    id: "gallery",
    title: "Gallery",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "/team",
    title: "Team",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// events updation
const events = [
  {
    title: "NEC Finals at E-Summit, IIT Bombay",
    icon: innobuzz,
    iconBg: "#383E56",
    date: "1st & 2nd February, 2025",
    points: [
      "Our E-Cell team was selected for the NEC Finals held at E-Summit 2025, IIT Bombay – one of Asia’s largest innovation summits.",
      "Events included Corporate Duel, IPL Auction, and Fish Tank – each focused on finance, management, and market simulation respectively.",
      "Speaker sessions featured industry giants like Anupam Mittal (Shaadi.com) and Nandan Nilekani (Infosys), offering deep insights into innovation, leadership, and digital transformation.",
      "Despite early elimination, the experience offered immense learning, networking, and exposure to business strategies and entrepreneurial thinking.",
    ],
    pdfLink: "https://drive.google.com/file/d/1EBaUkzcBw-o1mjRabvTQMdq6uvVYM9dt/view?usp=sharing" // Replace with actual media coverage or certificate link if available
  },  
  {
    title: "Guest Talk by Dr. Harjindar Singh Cheema",
    icon: businessModel, // replace with the appropriate icon variable if available
    iconBg: "#383E56",
    date: "January 22, 2025",
    points: [
      "E-Cell and IIC of SGGS hosted a guest talk at A4 Complex Hall by Dr. Harjindar Singh Cheema, founder of Cheema Boilers Ltd.",
      "Dr. Cheema shared his entrepreneurial journey, highlighting how persistence and innovation helped him build a successful business from scratch.",
      "He introduced the 5 C’s of Entrepreneurship – Confidence, Courage, Communication, Clarity, and Creativity.",
      "One impactful moment included his story of overcoming adversity — from affording only a guava to sealing a major deal and celebrating with paneer pakode.",
    ],
    pdfLink: "https://drive.google.com/file/d/1qppbU3nsHlUDO2uBV5OdyKxXu3KrOC05/view?usp=sharing" // Replace with actual event link or media if available
  },  
  {
    title: "Start-Up Showdown",
    icon: innobuzz, // replace with appropriate icon if needed
    iconBg: "#383E56",
    date: "October 1, 2024",
    points: [
      "The objective of the event was to help our students foster networking, mentorship, and collaboration, validate their ideas, gain exposure, and learn valuable skills within our institution.",
      "The winner received a fast-tracked evaluation to Eureka’s zonal round, a business model challenge by IITB.",
      "The event featured a Startup Pitching Competition inspired by Shark Tank with 14 teams and 41 participants across departments like CSE, EXTC, Civil, Production, IT, and Instrumentation.",
      "Judged by a distinguished panel: Mr. Harshad Shah, Mr. Gajanan Trikutkar, Dr. Jaishree Waghmare, and Prof. Rachana Potpelwar.",
    ],
    pdfLink: "https://drive.google.com/file/d/19JqnX4isETLL5Vu7ydxby_T-GE7Ctyy-/view?usp=sharing" // Replace with actual link if available
  }
  
];



const wings = [
 
];

const teams = {

  FactAdv:[
    {
      name: "Dr. Jaishri Waghmare",
      designation: "Dean (IIL), SGGSIE&T, Nanded",
      url: jayshri,
      ilink: "#",
      flink: "#",
      llink: "#",
      tlink: "#",
    },
    {
      name: "Ms. Rachna Potpelwar",
      designation: "Faculty Coordinator",
      url: rachna,
      ilink: "#",
      flink: "#",
      llink: "#",
      tlink: "#",
    }
  ],
  lead: [
    {
      name: "Aditi Khetan",
      designation: "President",
      url:aditi,
      ilink: "#",
      flink: "#",
      llink: "#",
      tlink: "#",
    },
    {
      name: "Neel Chavan",
      designation: "Secretary",
      url: neel,
      ilink: "#",
      flink: "#",
      llink: "#",
      tlink: "#",
    }
    
  ],

  member: [

    
    {
      name: "Akshay Mortale",
      designation: "Innovation Activities",
      url: akshay,
      ilink: "#",
      flink: "#",
      llink: "#",
      tlink: "#",
    },
    {
      name: "Monika Pal",
      designation: "Corporate Relations",
      url: monika,
      ilink: "#",
      flink: "#",
      llink: "#",
      tlink: "#",
    },
    {
      name: "Reshav Sharma",
      designation: "Research & Development",
      url: reshav,
      ilink: "#",
      flink: "#",
      llink: "#",
      tlink: "#",
    },
    {
      name: "Sujal Khandagle",
      designation: "Public Relation",
      url: sujal,
      ilink: "#",
      flink: "#",
      llink: "#",
      tlink: "#",
    },
   
    
  ],

  Jmember: [
    {
      name: "Shubhangi Pawar",
      designation: "General Operations",
      url: shubhangi,
      ilink: "#",
      flink: "#",
      llink: "#",
      tlink: "#",
    },
    {
      name: "Darshan Singh",
      designation: "Financial Activities",
      url: darshan,
      ilink: "#",
      flink: "#",
      llink: "#",
      tlink: "#",
    },
    {
      name: "Tanmay Khanorkar",
      designation: "Project Head",
      url: tanmay,
      ilink: "#",
      flink: "#",
      llink: "#",
      tlink: "#",
    },
    {
      name: "Harshada Vidhate",
      designation: "Media Head",
      url: harshada,
      ilink: "#",
      flink: "#",
      llink: "#",
      tlink: "#",
    },
    {
      name: "Yadynee Naik",
      designation: "Content Head",
      url: yadynee,
      ilink: "#",
      flink: "#",
      llink: "#",
      tlink: "#",
    },
    
    
    
  ]
};

const GalleryData = [
  {
      id:1,
      titile:"TedX",
      image:a1
  },
  {
      id:2,
      titile:"TedX",
      image:a2
  },
  {
      id:3,
      titile:"TedX",
      image:a3
  },
  {
      id:4,
      titile:"Innobuzz",
      image:b1
  },
  {
      id:5,
      titile:"Innobuzz",
      image:b2
  },
  {
      id:6,
      titile:"Innobuzz",
      image:b3
  },
  {
      id:7,
      titile:"Family",
      image:c1
  },
  {
      id:8,
      titile:"Family",
      image:c2
  },
]
 
const Testimonials = [
  {
    name: 'Dr. Manesh B. Kokare',
    url: director,
    caption: 'Director, SGGSIE&T, Nanded',
    details: `Dear Students, Entrepreneurs, and Innovators,\n
Welcome to the E-Cell website!\n
As the Director, I am thrilled to see the passion and drive that our students bring to the world of entrepreneurship. The eCell is a platform designed to fuel creativity and empower students to transform their innovative ideas into successful ventures.\n
I encourage you all to explore the various opportunities, events, and mentorship programs that E-Cell offers. It is our mission to support you on your entrepreneurial journey, helping you develop the skills and knowledge necessary to succeed in today’s fast-paced business world.\n
I look forward to seeing the impact you make, and together, we can shape the future of innovation and entrepreneurship.`
  },
  {
    name: 'Dr. Jaishri M. Waghmare',
    url: jayshri,
    caption: 'Dean IIL, SGGSIE&T, Nanded',
    details: `Dear E-Cell Team and Students,\n
As the Dean of IIL, I am incredibly proud of the work being done by the E-Cell team. Your commitment to fostering innovation and entrepreneurship within our institution is both inspiring and essential for creating a dynamic and forward-thinking ecosystem.\n
Entrepreneurship is more than just a career path—it’s a mindset, and the eCell provides the resources and guidance necessary to cultivate that mindset. I encourage you to actively engage with the opportunities and initiatives that eCell has to offer.\n
Together, let’s continue to build a strong foundation for entrepreneurship and ensure that our students are equipped to lead and innovate in an ever-changing world.`
  },
  {
    name: 'Rachana S. Potpelwar',
    url: rachna,
    caption: 'Faculty Coordinator',
    details: `Dear E-Cell Team and Aspirants,\n
As the Faculty Coordinator of E-Cell, it is my privilege to witness the growth and enthusiasm of our student entrepreneurs. The eCell serves as a vital hub where students can learn, collaborate, and bring their ideas to life.\n
Through various workshops, events, and mentoring sessions, we aim to provide practical exposure and help students navigate the challenges of entrepreneurship. I strongly encourage all of you to get involved, whether it’s by attending events, joining workshops, or contributing to ongoing projects.\n
Together, let’s continue to inspire, innovate, and empower the next generation of entrepreneurs.`
  }
];


const update = [
  {
    title: "CSS and TailWind Workshop",
    icon: innobuzz,
    iconBg: "#383E56",
    date: "23-24 April 2023",
    points: [
      "Jointly organized by IT department and CS by Mr. rutwik jadhav"
    ],
    site: "https://www.google.com/",
  },

]

export { events,  wings, teams,GalleryData, Testimonials,update };

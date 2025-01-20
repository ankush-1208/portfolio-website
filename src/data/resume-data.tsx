import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import avatarImage from "@/images/avatar.jpg";

export const RESUME_DATA = {
  name: "Ankush Kumar",
  initials: "AK",
  location: "India",
  locationLink: "https://www.google.com/maps/place/India",
  about: "Software Engineer specializing in backend development with Java and Spring Boot",
  summary: (
    <>
      I am a Software Engineer with expertise in building scalable, high-performance systems using Java, Spring Boot, 
      and cutting-edge technologies like AI and LLMs. I specialize in designing and implementing robust solutions that 
      enhance user experience and drive efficiency. Passionate about continuous learning, I enjoy exploring new tools, 
      programming languages, and hardware innovations to stay at the forefront of technology. My goal is to develop 
      impactful software that empowers people and organizations to achieve their best.
    </>
  ),
  avatarPath: avatarImage,
  contact: {
    email: "1208ankush@gmail.com",
    tel: "+918264895601",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ankush-1208",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/ankush-kr",
        icon: LinkedInIcon,
      },
      {
        name: "LeetCode",
        url: "https://leetcode.com/ankushkmr/",
        icon: ({ className }: { className: string }) => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={className}
            fill="currentColor"
          >
            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
          </svg>
        ),
      },
    ],
  },
  education: [
    {
      school: "Lovely Professional University",
      degree: "B.Tech. in Computer Science and Engineering",
      start: "2019",
      end: "2023",
      description: "CGPA: 8.11",
    },
  ],
  work: [
    {
      company: "Infrrd Private Ltd.",
      link: "https://infrrd.ai",
      badges: ["Java", "Spring Boot", "MongoDB", "RabbitMQ", "PostgreSQL", "MySQL", "Camunda"],
      title: "Software Engineer",
      start: "2023",
      end: "Present",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Contributed to the backend engineering of a document processing software handling more than 2 million
              documents per month across 40+ clients, including invoices, engineering diagrams, and property images.
            </li>
            <li>
              Integrated Large Language Models (LLMs) such as ChatGPT, Gemini, Claude, and Perplexity into data
              extraction pipelines, replacing legacy extractors and achieving 95% accuracy.
            </li>
            <li>
              Developed a module to select the most accurate field extraction among multiple LLMs by running a weekly
              scheduler that tracked corrections and adjusted model confidence, maintaining 95%+ accuracy.
            </li>
            <li>
              Built a high-accuracy document classification system combining machine learning and rule-based logic, processing
              300K documents weekly with 90% accuracy.
            </li>
            <li>
              Achieved a 50% reduction in resource usage for the image processing module by redesigning image processing
              calls with RabbitMQ RPC, reducing pod count from two to one while maintaining performance and reliability.
            </li>
            <li>
              Led the creation of a model configuration system with 20+ customizable parameters, enhancing product
              flexibility for diverse client needs.
            </li>
            <li>
              Engineered the backend architecture for a Trial Version of the product, contributing to a 20% increase in
              monthly user sign-ups.
            </li>
            <li>
              Optimized MongoDB queries and collection structures, reducing failures of very large documents by 40%.
            </li>
            <li>
              Developed and optimized unit tests using JUnit 5 and Mockito, achieving 90%+ code coverage for key
              services and ensuring high-quality, maintainable code.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Infrrd Private Ltd.",
      link: "https://infrrd.ai",
      badges: ["Java", "Spring Boot", "MongoDB", "RabbitMQ", "PostgreSQL", "MySQL", "Camunda"],
      title: "Trainee Software Engineer",
      start: "2022",
      end: "2023",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Built CRUD APIs and leveraged MongoDB aggregation queries for a Loan Application Dashboard
              contributing to a new product vertical.
            </li>
            <li>
              Implemented data extractors for various document types having an accuracy of over 90%.
            </li>
            <li>
              Enhanced ML model predictions by 40% through user feedback integration.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "Java",
    "Spring Boot",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "AWS (S3, EC2, Lambda)",
    "RESTful APIs",
    "Hibernate",
    "Apache Tomcat",
    "Microservices",
    "Event-Driven Architecture",
    "Serverless",
    "RabbitMQ",
    "Apache Kafka",
    "Docker",
    "Git",
    "Jenkins",
    "Maven",
    "Gradle",
    "JUnit",
    "OAuth",
    "JWT",
    "Data Encryption",
    "Agile",
    "Code Reviews",
    "DevOps Basics",
    "Design Patterns",
    "OOPS"
  ],
  projects: [
    {
      title: "JobSync",
      techStack: ["Java", "Spring Boot", "MongoDB"],
      description:
        "Job aggregator backend that fetches and consolidates job postings from multiple sources. Features include customized job searches and automated updates.",
      link: {
        label: "Coming Soon",
        href: "#",
      },
    },
    {
      title: "E-Libris",
      techStack: ["Java", "Spring Boot", "PostgreSQL", "AWS"],
      description:
        "A feature-rich E-Reader backend application with secure user authentication, e-book management, and reading progress tracking. Implemented using Spring Boot and PostgreSQL with JWT authentication.",
      link: {
        label: "github.com/ankush-1208/ereader-backend",
        href: "https://github.com/ankush-1208/ereader-backend",
      },
    },
    {
      title: "Redis Implementation",
      techStack: ["Java", "Data Structures", "Networking"],
      description:
        "Building a Redis-like in-memory data structure store from scratch. Implementing core Redis commands and data structures to better understand distributed systems.",
      link: {
        label: "In Progress",
        href: "#",
      },
    }
  ],
} as const;

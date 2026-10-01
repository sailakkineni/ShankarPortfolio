export const personalInfo = {
  name: "Sai Shankar",
  initials: "SS",
  title: "Senior Software Engineer",
  tagline: "Distributed Systems • High-Throughput Microservices • Cloud Architecture",
  location: "New York, NY",
  phone: "+1 8389109931",
  github: "https://github.com/sailakkineni",
  linkedin: "https://www.linkedin.com/in/shankarjavadev/",
  awsBadgeUrl: "https://www.credly.com/badges/509076f4-56c1-4b78-9bb5-62b16b5164b4/linked_in_profile",
  summary: `Senior Software Engineer with 5+ years of experience designing, building, and operating scalable backend and distributed systems using Java, Spring Boot, microservices, and cloud technologies. Experienced in developing high-throughput financial and transaction-processing platforms supporting payments, refunds, chargebacks, reconciliation, asset pricing, portfolio valuation, and investment workflows. Strong background in distributed systems, event-driven architectures, asynchronous processing, concurrency, API design, database optimization, fault tolerance, observability, and production reliability. Experienced with AWS, Apache Kafka, Oracle, MongoDB, Redis, Docker, and Kubernetes, with a focus on building secure, highly available, and maintainable services. Additionally experienced in conversational AI using Dialogflow and Python-based webhooks, integrating AI-driven workflows with enterprise Java services and APIs.`,
  stats: [
    { value: "5+", label: "Years Experience", desc: "Enterprise distributed systems" },
    { value: "10M+", label: "Daily Requests", desc: "Morgan Stanley pricing platform" },
    { value: "99.99%", label: "Platform Availability", desc: "Fault-tolerant architecture" },
    { value: "35%", label: "Query Latency Reduction", desc: "Database & query optimization" }
  ]
};

export const experiences = [
  {
    id: "morgan-stanley",
    company: "Morgan Stanley",
    role: "Senior Software Engineer",
    period: "May 2025 – Present",
    location: "New York, NY",
    type: "Full-Time",
    shortDesc: "Architecting large-scale distributed financial platform supporting real-time asset pricing, portfolio valuation, and trade execution handling 10M+ daily requests.",
    highlights: [
      "Architected and developed a large-scale distributed financial platform using Java, Spring Boot, Hibernate, Apache Kafka, Oracle, and MongoDB, supporting real-time asset pricing, portfolio valuation, trade execution, investment management, and downstream financial workflows while processing 10M+ daily requests.",
      "Designed and evolved an event-driven microservices architecture with independently scalable services, asynchronous processing, distributed communication, and resilient integration patterns.",
      "Led technical architecture and design initiatives across the platform, defining service boundaries, API contracts, data-access patterns, event flows, failure-handling strategies, and distributed communication mechanisms.",
      "Engineered platform reliability and high-availability capabilities through service redundancy, automated failover, graceful degradation, disaster-recovery strategies, and fault-tolerant processing, contributing to 99.99% availability.",
      "Designed and implemented enterprise-grade RESTful and GraphQL APIs secured with OAuth 2.0, OpenID Connect, JWT, and role-based access control (RBAC).",
      "Optimized high-volume Oracle and MongoDB workloads through indexing, partitioning, query optimization, connection tuning, reducing reporting latency by 35%.",
      "Built Kafka-based event-streaming and asynchronous processing pipelines for reliable financial event propagation, ordering guarantees, and resilient downstream processing.",
      "Implemented idempotent processing, retry and recovery mechanisms, transaction boundaries, and asynchronous processing patterns for consistent distributed workflows.",
      "Established automated quality and testing practices using JUnit, Mockito, integration testing, API validation, improving regression coverage and release confidence.",
      "Engineered CI/CD and containerized deployment workflows using Jenkins, Docker, and Kubernetes for repeatable builds and controlled deployments.",
      "Implemented comprehensive observability using Prometheus, Grafana, AWS CloudWatch, centralized logging, metrics, dashboards, and alerting for incident management.",
      "Led production operations, participating in on-call rotations, incident response, root-cause analysis, performance investigations, and service recovery.",
      "Collaborated closely with architects, product managers, business stakeholders, and engineering teams throughout requirements analysis and SDLC execution.",
      "Provided technical leadership through architecture reviews, code reviews, mentoring, engineering standards, and design discussions.",
      "Authored architecture documentation, API specifications, technical designs, operational runbooks, and implementation documentation.",
      "Applied AI-assisted engineering tools including GitHub Copilot to accelerate code generation, test creation, debugging, refactoring, and documentation."
    ],
    techStack: ["Java 17", "Spring Boot", "Hibernate", "Apache Kafka", "Oracle DB", "MongoDB", "GraphQL", "REST APIs", "OAuth 2.0", "JWT", "Prometheus", "Grafana", "AWS CloudWatch", "Docker", "Kubernetes", "Jenkins", "GitHub Copilot"],
    topology: {
      title: "Real-time Asset Pricing & Valuation Platform",
      nodes: [
        { title: "Ingress Gateway", tech: "GraphQL / REST (OAuth2)", role: "API Gateway & Auth" },
        { title: "Event Streaming", tech: "Apache Kafka Clusters", role: "10M+ Daily Reqs Broker" },
        { title: "Core Services", tech: "Spring Boot Microservices", role: "Asset Pricing & Valuation" },
        { title: "Resilient Storage", tech: "Oracle DB + MongoDB", role: "Partitioned Data Store" },
        { title: "Telemetry Stack", tech: "Prometheus & Grafana", role: "Real-time Incident Monitoring" }
      ]
    }
  },
  {
    id: "nys-its",
    company: "New York State ITS",
    role: "Software Engineer",
    period: "Aug 2023 – May 2025",
    location: "New York, NY",
    type: "Full-Time",
    shortDesc: "Engineered scalable customer-facing and enterprise backend services in Java and Spring Boot processing high-volume state digital payment transactions.",
    highlights: [
      "Designed and developed scalable customer-facing and enterprise backend services using Java, Spring Boot, Hibernate, and SQL, supporting payment, transaction-processing, validation, and digital-service workflows.",
      "Engineered transaction-processing services responsible for validating, processing, and tracking payment-related transactions while maintaining strict data integrity.",
      "Designed asynchronous and multithreaded processing mechanisms to handle concurrent requests and transaction-intensive workloads, boosting throughput and responsiveness.",
      "Built resilient services with robust exception handling, retry and recovery mechanisms, idempotent processing, and validation to prevent duplicate processing.",
      "Developed and integrated RESTful APIs using Java and Spring Boot to connect customer-facing workflows with backend services and enterprise legacy systems.",
      "Designed secure enterprise API integrations using OAuth 2.0 and JWT-based authentication and authorization for payment workflows.",
      "Developed full-stack application functionality using JavaScript, HTML5, CSS3, and enterprise web interfaces integrated with Spring Boot REST APIs.",
      "Managed multiple engineering initiatives in parallel across backend development, API enhancements, application releases, testing, and production improvements.",
      "Developed automated testing strategies using JUnit, Mockito, and Postman across backend services, REST APIs, and transaction workflows.",
      "Implemented centralized logging, monitoring, metrics, and alerting to improve visibility into service health, API performance, and incident handling.",
      "Participated in production operations and incident response, performing debugging, root-cause analysis, and preventive remediation.",
      "Contributed to technical design reviews and code reviews, collaborating with architects and engineers to establish maintainable Java standards."
    ],
    techStack: ["Java", "Spring Boot", "Hibernate", "SQL", "Multithreading", "REST APIs", "OAuth 2.0", "JWT", "JavaScript", "HTML5", "CSS3", "JUnit", "Mockito", "Postman"],
    topology: {
      title: "Statewide Concurrent Payment Validation Engine",
      nodes: [
        { title: "Public Portal UI", tech: "JavaScript / HTML5 / CSS3", role: "State User Interface" },
        { title: "Security Boundary", tech: "OAuth 2.0 / JWT", role: "Identity Verification" },
        { title: "Validation Engine", tech: "Java Async / Spring Boot", role: "Concurrent Txn Processing" },
        { title: "State Ledger DB", tech: "Relational SQL / JPA", role: "Persistent Audit Trail" },
        { title: "Telemetry & Logs", tech: "Centralized Monitoring", role: "Incident Alerting" }
      ]
    }
  },
  {
    id: "brane-enterprises",
    company: "Brane Enterprises",
    role: "Software Developer – Financial Platforms",
    period: "June 2020 – July 2022",
    location: "Hyderabad, India",
    type: "Full-Time",
    shortDesc: "Built cloud-native AWS microservices, Lambda automated reconciliation pipelines, and React operational monitoring dashboards.",
    highlights: [
      "Designed and developed cloud-native payment processing services using Java, Spring Boot, Node.js, and REST APIs supporting payments, refunds, chargebacks, and reconciliation.",
      "Architected and deployed AWS-based microservices using ECS, AWS Lambda, RDS, and S3, designing scalable transaction-processing components.",
      "Built event-driven reconciliation pipelines using AWS Lambda and distributed processing patterns to automate transaction reconciliation and reduce manual work.",
      "Engineered transaction-processing workflows with validation, exception handling, retry mechanisms, and recovery patterns across payment operations.",
      "Optimized Oracle and AWS RDS data stores through schema design, indexing, partitioning, query optimization, achieving ~30% database performance improvement.",
      "Improved application throughput through Redis caching, asynchronous communication, and service orchestration using Spring Integration and Apache Camel.",
      "Integrated fraud detection services into payment workflows and implemented secure authentication using OAuth 2.0 and JWT.",
      "Developed React.js operational dashboards providing real-time transaction monitoring, reporting, and reconciliation visibility.",
      "Implemented observability and monitoring using Prometheus and Grafana for proactive failure detection and SLA management.",
      "Developed automated testing and CI/CD workflows covering backend services, APIs, integrations, and deployment pipelines.",
      "Participated in production troubleshooting, root-cause analysis, and infrastructure performance optimization.",
      "Applied object-oriented design principles and design patterns to build reusable, maintainable Java components."
    ],
    techStack: ["Java", "Spring Boot", "Node.js", "AWS ECS", "AWS Lambda", "AWS RDS", "AWS S3", "Redis", "Apache Camel", "Spring Integration", "Oracle", "React.js", "Prometheus", "Grafana"],
    topology: {
      title: "AWS Payment & Event-Driven Reconciliation Pipeline",
      nodes: [
        { title: "Ops Dashboard", tech: "React.js / Redux", role: "Real-time Monitoring UI" },
        { title: "AWS Microservices", tech: "AWS ECS / Spring Boot", role: "Payment & Refund Processing" },
        { title: "Serverless Recon", tech: "AWS Lambda & S3 Events", role: "Automated Reconciliation" },
        { title: "In-Memory Speed", tech: "Redis Cache & Apache Camel", role: "Sub-millisecond Caching" },
        { title: "AWS RDS & Fraud", tech: "AWS RDS Oracle / OAuth2", role: "Secure Data Store" }
      ]
    }
  }
];

export const skillCategories = [
  {
    category: "Languages & CS Core",
    icon: "Code",
    skills: [
      { name: "Java (8 / 11 / 17)", level: 95 },
      { name: "Python", level: 85 },
      { name: "JavaScript / TypeScript", level: 88 },
      { name: "SQL & PL/SQL", level: 90 },
      { name: "Multithreading & Concurrency", level: 92 },
      { name: "Data Structures & Algorithms", level: 90 }
    ]
  },
  {
    category: "Backend & Microservices",
    icon: "Server",
    skills: [
      { name: "Spring Boot / Spring Framework", level: 96 },
      { name: "Apache Kafka", level: 92 },
      { name: "Microservices Architecture", level: 94 },
      { name: "Hibernate / JPA", level: 90 },
      { name: "Spring Integration & Apache Camel", level: 85 },
      { name: "Event-Driven Systems", level: 94 }
    ]
  },
  {
    category: "Financial & Security APIs",
    icon: "ShieldCheck",
    skills: [
      { name: "Payment & Refund Processing", level: 95 },
      { name: "Reconciliation & Chargebacks", level: 92 },
      { name: "Asset Pricing & Valuation", level: 90 },
      { name: "OAuth 2.0 / JWT / OpenID", level: 92 },
      { name: "RESTful & GraphQL APIs", level: 94 },
      { name: "Fraud Detection Integration", level: 88 }
    ]
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    skills: [
      { name: "AWS (ECS, Lambda, RDS, S3, EC2)", level: 92 },
      { name: "Docker & Kubernetes", level: 88 },
      { name: "Jenkins & CI/CD Pipelines", level: 88 },
      { name: "AWS CloudWatch & CodeDeploy", level: 86 }
    ]
  },
  {
    category: "Databases & Caching",
    icon: "Database",
    skills: [
      { name: "Oracle Database", level: 92 },
      { name: "MongoDB", level: 88 },
      { name: "Redis Caching", level: 90 },
      { name: "MySQL & MS SQL Server", level: 85 },
      { name: "Query Optimization & Indexing", level: 92 }
    ]
  },
  {
    category: "AI, Web & Testing",
    icon: "Sparkles",
    skills: [
      { name: "Dialogflow & Python Webhooks", level: 85 },
      { name: "GitHub Copilot & AI Development", level: 90 },
      { name: "React.js & Redux", level: 86 },
      { name: "Prometheus & Grafana", level: 90 },
      { name: "JUnit, Mockito & Postman", level: 92 }
    ]
  }
];

export const education = [
  {
    degree: "Master of Science, Computer and Information Science",
    institution: "University at Albany, State University of New York (SUNY)",
    location: "Albany, NY",
    year: "Graduated"
  },
  {
    degree: "Bachelor's, Computer Science and Engineering",
    institution: "Malla Reddy Engineering College",
    location: "India",
    year: "Graduated"
  }
];

export const certifications = [
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services (AWS)",
    year: "2025",
    link: "https://www.credly.com/badges/509076f4-56c1-4b78-9bb5-62b16b5164b4/linked_in_profile",
    verified: true,
    badge: "AWS Developer Associate"
  },
  {
    title: "Google Cloud Infrastructure – Essential Course Series",
    issuer: "Coursera / Google",
    year: "2024",
    link: "#",
    verified: true,
    badge: "GCP Infrastructure"
  }
];

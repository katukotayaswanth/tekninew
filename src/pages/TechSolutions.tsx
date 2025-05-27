// TechSolutions.tsx fully updated with all detailed card content from PDF

import { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import {
  Shield, Cloud, Brain, Code2, Layers, Server, Database, Smartphone, Zap, PackageSearch, Briefcase
} from 'lucide-react';

export default function TechSolutions() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded(prev => (prev === index ? null : index));
  };

  const solutions = [
    // Cybersecurity & Risk Management card inserted
    {
      icon: <Shield className="h-12 w-12 text-red-400" />,
      title: "Cybersecurity & Risk Management",
      description: "Protecting digital assets and mitigating cybersecurity threats.",
      features: [
        "IAM/IGA, PAM, SSO/MFA",
        "Threat Intelligence & Vulnerability Management",
        "Network & Endpoint Security",
        "Cloud Security & Data Protection",
        "Incident Response & Forensics",
        "Risk Assessment & Compliance",
        "Identity & Access Management (IAM)",
        "Security Operations Center (SOC)"
      ],
      details: {
        categoryContent: `In today’s evolving digital landscape, security threats are more sophisticated than ever. Teknismart provides cutting-edge Cybersecurity & Risk Management solutions designed to safeguard businesses from cyber threats, ensure regulatory compliance, and establish a resilient security posture.

Our solutions protect critical assets, minimize vulnerabilities, and enable businesses to operate confidently in a secure digital environment.`,
        subcategories: [
          {
            name: "IAM/IGA, PAM, SSO/MFA",
            content: `Identity & Access Security: IAM, IGA, PAM & Authentication

Effective identity and access security is the foundation of a robust cybersecurity strategy. Teknismart offers integrated solutions that safeguard user identities, control privileged access, and enforce secure authentication mechanisms.

✔ Identity & Access Management (IAM) / Identity Governance & Administration (IGA) – Streamline user identity management, automate provisioning and deprovisioning, and ensure regulatory compliance with strong governance controls.
✔ Privileged Access Management (PAM) – Protect high-risk accounts with strict privileged access controls, real-time monitoring, and session auditing to mitigate security threats.
✔ Single Sign-On (SSO) & Multi-Factor Authentication (MFA) – Enhance security with seamless authentication experiences, reducing reliance on passwords while adding layers of protection through adaptive MFA.

By implementing a zero-trust approach, Teknismart ensures that users, whether internal or external, have the right level of access—nothing more, nothing less—minimizing the risk of breaches and insider threats.`
          },
          {
            name: "Threat Intelligence & Vulnerability Management",
            content: `Cyber threats are evolving at an unprecedented pace, making it essential for businesses to stay ahead of potential risks. Teknismart’s Threat Intelligence & Vulnerability Management solutions provide real-time threat detection, proactive risk assessment, and strategic mitigation to safeguard your digital assets.

Proactive Threat Intelligence
✔ Detect emerging cyber threats and attack patterns.
✔ Provide actionable insights for proactive defense.
✔ Strengthen security measures with continuous monitoring.
✔ Enhance incident response with real-time threat analysis.

Comprehensive Vulnerability Management
✔ Conduct continuous vulnerability assessments to detect security gaps.
✔ Prioritize risks based on threat severity and impact analysis.
✔ Implement automated patch management to remediate vulnerabilities.
✔ Comply with industry regulations through robust security audits.`
          },
          {
            name: "Network & Endpoint Security",
            content: `With cyber threats becoming increasingly sophisticated, securing your network and endpoints is critical to protecting your organization’s data, applications, and infrastructure. Teknismart’s Network & Endpoint Security solutions provide robust protection against cyberattacks, unauthorized access, and data breaches, ensuring a secure and resilient IT environment.

Comprehensive Network Security
✔ Next-Generation Firewalls (NGFWs) to monitor and control network traffic.
✔ Intrusion Detection & Prevention Systems (IDS/IPS) for real-time threat detection.
✔ Zero Trust Network Access (ZTNA) to enforce strict security policies.
✔ DDoS Protection & Traffic Filtering to prevent service disruptions.

Advanced Endpoint Security
✔ Endpoint Detection & Response (EDR) to identify and respond to advanced threats.
✔ Anti-Malware & Ransomware Protection for proactive defense.
✔ Device & Application Control to prevent unauthorized software execution.
✔ Automated Threat Remediation to contain and neutralize attacks in real-time.`
          },
          {
            name: "Cloud Security & Data Protection",
            content: `Comprehensive Cloud Security
✔ Cloud Access Security Broker (CASB) – Monitor and control cloud application usage for enhanced security and compliance.
✔ Zero Trust Security for Cloud – Enforce strict authentication and least privilege access policies.
✔ Cloud Workload Protection (CWP) – Secure workloads across hybrid and multi-cloud environments.
✔ API & Container Security – Protect cloud-native applications with advanced security controls.

Data Protection & Compliance
✔ Data Loss Prevention (DLP) – Prevent accidental or malicious data leaks.
✔ End-to-End Encryption – Secure data in transit and at rest.
✔ Backup & Disaster Recovery – Ensure business continuity with automated backup and rapid recovery solutions.
✔ Regulatory Compliance Support – Align with GDPR, HIPAA, SOC 2, ISO 27001, and other industry standards.`
          },
          {
            name: "Incident Response & Forensics",
            content: `Proactive Incident Response
✔ 24/7 Incident Monitoring & Threat Detection – Real-time identification of cyber threats.
✔ Rapid Containment & Mitigation – Isolating affected systems to prevent further damage.
✔ Automated Response & Remediation – Leveraging AI-driven tools to counter threats effectively.
✔ Post-Incident Analysis & Reporting – Delivering actionable insights to strengthen security posture.

Cyber Forensics & Attack Investigation
✔ Digital Evidence Collection & Preservation – Ensuring a comprehensive and legally defensible investigation.
✔ Malware & Root Cause Analysis – Identifying the origin and method of attack.
✔ Threat Actor Attribution – Determining whether the attack was internal or external.
✔ Regulatory & Legal Support – Assisting with compliance and legal reporting requirements.`
          },
          {
            name: "Risk Assessment & Compliance",
            content: `Comprehensive Risk Assessment
✔ Security Posture Assessment – Identifying vulnerabilities across IT environments.
✔ Threat Modeling & Risk Analysis – Evaluating potential attack vectors and their impact.
✔ Business Impact Assessments (BIA) – Measuring risks to critical business operations.
✔ Continuous Risk Monitoring – Using AI-driven analytics for real-time threat detection.

Regulatory & Compliance Management
✔ Industry Standards Alignment – Ensuring adherence to GDPR, HIPAA, ISO 27001, SOC 2, PCI DSS, NIST, and other regulations.
✔ Policy & Framework Implementation – Establishing security frameworks tailored to your business.
✔ Audit & Reporting Support – Generating detailed compliance reports for regulators and stakeholders.
✔ Third-Party & Vendor Risk Management – Assessing security risks across external partnerships.`
          },
          {
            name: "Identity & Access Management (IAM)",
            content: `Comprehensive IAM Solutions
✔ Identity Lifecycle Management – Automate user provisioning, role-based access, and deprovisioning.
✔ Access Control & Policy Enforcement – Define and enforce granular access policies based on least privilege principles.
✔ Federated Identity & Single Sign-On (SSO) – Enable secure, one-click access across multiple applications.
✔ Multi-Factor Authentication (MFA) – Strengthen authentication with adaptive and biometric security.

Identity Governance & Compliance
✔ User Access Reviews & Certifications – Conduct periodic audits to validate user permissions.
✔ Privileged Access Management (PAM) – Secure high-risk accounts with advanced monitoring and session control.
✔ Compliance & Risk Management – Align with GDPR, HIPAA, SOC 2, ISO 27001, and other regulatory standards.
✔ Behavioral Analytics & Anomaly Detection – Detect suspicious activity with AI-driven monitoring.`
          },
          {
            name: "Security Operations Center (SOC)",
            content: `Next-Generation SOC Services
✔ 24/7 Threat Monitoring & Incident Detection – Constant surveillance of IT environments for suspicious activities.
✔ Threat Intelligence & Risk Analysis – Leveraging AI-driven analytics and global threat intelligence feeds.
✔ Automated Response & Threat Mitigation – Real-time containment of security incidents before damage occurs.
✔ Forensic Investigation & Post-Incident Reporting – Identifying root causes and preventing future breaches.

Advanced SOC Capabilities
✔ Security Information & Event Management (SIEM) – Aggregating and analyzing security events for early threat detection.
✔ User & Entity Behavior Analytics (UEBA) – Detecting anomalies and insider threats with AI-driven insights.
✔ Endpoint Detection & Response (EDR) – Securing endpoints against ransomware and malware threats.
✔ Compliance & Regulatory Alignment – Ensuring adherence to industry standards like NIST, ISO 27001, GDPR, HIPAA, and SOC 2.`
          }
        ]
      }
    },
    // Please refer to your structured card data and paste each object here with icon, title, description,
    // features, and details including categoryContent and subcategories[].
    {
  icon: <Cloud className="h-12 w-12 text-blue-400" />,
  title: "Cloud Solutions",
  description: "Secure, scalable cloud architecture & compliance.",
  features: [
    "Cloud Infrastructure & Architecture (AWS, Azure, GCP)",
    "Cloud Migration & Optimization",
    "Serverless Computing",
    "Cloud Security & Compliance",
    "Multi-cloud & Hybrid-cloud Solutions"
  ],
  details: {
    categoryContent: `In an era where businesses demand scalability, agility, and security, cloud technology has become the foundation of digital transformation. Organizations must adopt robust cloud strategies to stay competitive, ensuring high availability, cost efficiency, and compliance in an increasingly complex IT landscape. Teknismart’s Cloud Solutions provide end-to-end services, from cloud infrastructure design and migration to security, compliance, and multi-cloud management. Whether you are looking to modernize legacy systems, enhance performance, or implement a hybrid-cloud strategy, our expert team helps you seamlessly navigate the cloud journey while optimizing cost and security.`,
    subcategories: [
      {
        name: "Cloud Infrastructure & Architecture (AWS, Azure, GCP)",
        content: `✔ Cloud-Native Architecture Design – Building scalable, resilient, and high-performance cloud environments.
✔ Infrastructure as Code (IaC) – Automating deployments with Terraform, CloudFormation, and ARM templates.
✔ High-Availability & Disaster Recovery – Designing fault-tolerant architectures with multi-region failover.
✔ Performance & Cost Optimization – Ensuring efficient resource utilization and cloud spending.`
      },
      {
        name: "Cloud Migration & Optimization",
        content: `✔ Cloud Migration Strategy & Assessment – Analyzing workloads to define the best migration path.
✔ Data & Application Migration – Securely transferring applications, databases, and workloads to the cloud.
✔ Hybrid & Multi-Cloud Transition – Enabling smooth integration across AWS, Azure, and Google Cloud.
✔ Cost & Performance Optimization – Refining cloud resources for maximum efficiency post-migration.`
      },
      {
        name: "Serverless Computing",
        content: `✔ Event-Driven Serverless Architectures – Deploying highly responsive applications without provisioning servers.
✔ API Gateway & Microservices Integration – Enhancing application scalability and connectivity.
✔ Optimized Execution Models – Reducing costs by executing workloads only when needed.
✔ Security & Governance in Serverless – Implementing robust access controls and monitoring solutions.`
      },
      {
        name: "Cloud Security & Compliance",
        content: `✔ Security Posture & Risk Assessment – Identifying vulnerabilities and securing cloud workloads.
✔ Identity & Access Management (IAM) – Implementing zero-trust security models.
✔ Compliance with Industry Standards – Aligning with GDPR, HIPAA, ISO 27001, SOC 2, PCI DSS, and NIST.
✔ Threat Detection & Incident Response – Providing AI-driven monitoring and real-time risk mitigation.`
      },
      {
        name: "Multi-cloud & Hybrid-cloud Solutions",
        content: `✔ Multi-Cloud Orchestration – Seamlessly managing workloads across AWS, Azure, and Google Cloud.
✔ Hybrid Cloud Integration – Connecting on-premises infrastructure with cloud services for smooth operations.
✔ Workload Balancing & Interoperability – Ensuring seamless connectivity between different cloud environments.
✔ Cloud Cost & Performance Management – Optimizing cloud spend while maintaining high availability.`
      }
    ]
  }
},
{
  icon: <Brain className="h-12 w-12 text-emerald-400" />,
  title: "AI & ML Services",
  description: "Harnessing AI to optimize operations and decision-making.",
  features: [
    "Natural Language Processing (NLP)",
    "Computer Vision & Image Recognition",
    "Predictive Analytics",
    "Reinforcement Learning",
    "AI-driven Automation & Chatbots",
    "AI Model Development & Deployment"
  ],
  details: {
    categoryContent: `In today’s data-driven world, organizations need AI-powered solutions to gain actionable insights, enhance automation, and improve decision-making. Teknismart’s AI & ML services empower businesses to leverage advanced algorithms, automate processes, and drive intelligent transformation. Whether you seek to integrate AI-powered chatbots, computer vision, or predictive analytics, our expert team provides end-to-end solutions to develop, deploy, and scale AI models tailored to your business needs.`,
    subcategories: [
      {
        name: "Natural Language Processing (NLP)",
        content: `✔ Text & Sentiment Analysis – Understanding customer sentiment from emails, reviews, and social media.
✔ Speech Recognition & Processing – Converting audio to text for virtual assistants and transcription services.
✔ Chatbots & Virtual Assistants – Developing AI-powered bots for customer support and business automation.
✔ Automated Document Processing – Extracting insights from unstructured text using AI-driven NLP models.`
      },
      {
        name: "Computer Vision & Image Recognition",
        content: `✔ Object Detection & Recognition – Identifying and classifying objects in real-time video streams.
✔ Facial Recognition & Biometric Authentication – Enhancing security with AI-driven face-matching technology.
✔ Medical Image Analysis – Assisting healthcare professionals in diagnosing diseases through AI-powered scans.
✔ Visual Quality Inspection – Automating defect detection in manufacturing and industrial processes.`
      },
      {
        name: "Predictive Analytics",
        content: `✔ Customer Behavior & Sales Forecasting – Analyzing historical data to predict future consumer trends.
✔ Financial & Risk Analysis – Detecting fraud and managing financial risks with AI-powered insights.
✔ Operational Efficiency Optimization – Improving supply chain management and resource allocation.
✔ AI-Driven Demand Forecasting – Helping businesses optimize inventory and production planning.`
      },
      {
        name: "Reinforcement Learning",
        content: `✔ Autonomous Systems Development – Training AI agents for robotics and automation.
✔ Game AI & Simulation Modeling – Enhancing gaming experiences with intelligent decision-making.
✔ Dynamic Pricing & Market Optimization – Adjusting pricing strategies using AI-driven decision models.
✔ Self-Optimizing AI Algorithms – Enabling AI to learn from real-world interactions and continuously improve.`
      },
      {
        name: "AI-driven Automation & Chatbots",
        content: `✔ AI-Powered Chatbots & Virtual Agents – Deploying conversational AI for 24/7 customer support.
✔ Robotic Process Automation (RPA) with AI – Automating business processes for improved efficiency.
✔ AI-Powered Workflow Optimization – Enhancing business operations with intelligent automation.
✔ Voice Assistants & Interactive AI Agents – Integrating speech recognition for seamless user interactions.`
      },
      {
        name: "AI Model Development & Deployment",
        content: `✔ Custom AI Model Development – Designing AI solutions tailored to specific business needs.
✔ Model Training & Optimization – Fine-tuning AI algorithms for accuracy and performance.
✔ Cloud & Edge AI Deployment – Deploying AI models on-premise, in the cloud, or at the edge.
✔ MLOps & AI Lifecycle Management – Automating model retraining and monitoring for continuous improvement.`
      }
    ]
  }
},

{
  icon: <Code2 className="h-12 w-12 text-purple-400" />,
  title: "NextGen Technologies",
  description: "Explore the frontier of tech for business innovation.",
  features: [
    "Internet of Things (IoT)",
    "Augmented Reality (AR) & Virtual Reality (VR)",
    "5G Integration",
    "Edge Computing"
  ],
  details: {
    categoryContent: `As technology evolves, businesses must embrace next-generation innovations to stay ahead in a highly competitive landscape. From intelligent IoT ecosystems and immersive AR/VR experiences to ultra-fast 5G networks and edge computing, Teknismart’s NextGen Technology solutions empower organizations to enhance connectivity, improve user experiences, and optimize performance. Our expertise enables businesses to leverage cutting-edge advancements and create future-ready solutions that drive digital transformation.

Teknismart’s NextGen Technology solutions help businesses unlock new opportunities, improve efficiency, and deliver transformative experiences in the digital age.`,
    subcategories: [
      {
        name: "Internet of Things (IoT)",
        content: `✔ IoT Strategy & Implementation – Designing and deploying IoT solutions for smart environments.
✔ Sensor & Device Integration – Connecting IoT-enabled devices for seamless data exchange.
✔ Real-Time Monitoring & Analytics – Gaining insights from IoT data for smarter decision-making.
✔ Industrial IoT (IIoT) & Smart Infrastructure – Optimizing manufacturing, logistics, and smart cities.`
      },
      {
        name: "Augmented Reality (AR) & Virtual Reality (VR)",
        content: `✔ AR for Retail & E-Commerce – Enabling virtual try-ons and interactive shopping experiences.
✔ VR Training & Simulation – Developing realistic training modules for enterprises and education.
✔ AR for Industrial Applications – Enhancing maintenance and remote assistance with AR overlays.
✔ Immersive Customer Experiences – Creating engaging AR/VR-powered marketing and brand interactions.`
      },
      {
        name: "5G Integration",
        content: `✔ 5G Network Deployment & Optimization – Enabling high-performance connectivity for enterprises.
✔ IoT & 5G Convergence – Powering smart cities, autonomous vehicles, and connected industries.
✔ Ultra-Low Latency Applications – Supporting real-time gaming, telemedicine, and industrial automation.
✔ Secure & Scalable 5G Solutions – Ensuring secure data transmission and scalable network architecture.`
      },
      {
        name: "Edge Computing",
        content: `✔ Distributed Edge Infrastructure – Reducing cloud dependency for improved performance.
✔ AI & Machine Learning at the Edge – Deploying intelligent algorithms for real-time analytics.
✔ Edge Security & Data Governance – Ensuring compliance and secure processing at the edge.
✔ Optimized Cloud-Edge Hybrid Solutions – Balancing workloads between cloud and edge environments.`
      }
    ]
  }
},
{
  icon: <Layers className="h-12 w-12 text-yellow-400" />,
  title: "Technology Modernization",
  description: "Modernizing legacy systems and building cloud-native solutions.",
  features: [
    "Legacy System Migration",
    "Cloud-Native Development",
    "Microservices Architecture",
    "API Integration & Management"
  ],
  details: {
    categoryContent: `As businesses evolve, outdated systems can become roadblocks to agility, scalability, and innovation. Teknismart’s Technology Modernization services help organizations transition from legacy systems to modern, cloud-native architectures that enhance performance, security, and efficiency. Whether it’s migrating legacy applications, adopting microservices, or enabling seamless API integrations, we ensure a future-proof technology landscape that drives business growth.`,
    subcategories: [
      {
        name: "Legacy System Migration",
        content: `✔ Assessment & Roadmap Development – Evaluating existing systems and defining a migration strategy.
✔ Application Reengineering & Refactoring – Optimizing outdated applications for modern environments.
✔ Cloud Migration & Containerization – Moving legacy applications to cloud-based and containerized architectures.
✔ Minimal Downtime & Risk Mitigation – Ensuring smooth transitions with minimal business disruption.`
      },
      {
        name: "Cloud-Native Development",
        content: `✔ Serverless Computing & Containers – Developing applications that leverage Kubernetes, Docker, and AWS Lambda.
✔ Agile & DevOps-Driven Development – Implementing continuous integration & deployment (CI/CD) pipelines.
✔ Resilient & Auto-Scaling Applications – Ensuring applications dynamically scale to meet demand.
✔ Security-First Approach – Embedding cloud security best practices into development lifecycles.`
      },
      {
        name: "Microservices Architecture",
        content: `✔ Monolith to Microservices Transition – Splitting large applications into independent services.
✔ Containerized & Scalable Deployments – Leveraging Docker and Kubernetes for efficient workload management.
✔ Service-Oriented Development – Enabling independent service updates without system downtime.
✔ Event-Driven & API-Centric Design – Enhancing system responsiveness and interoperability.`
      },
      {
        name: "API Integration & Management",
        content: `✔ Custom API Development – Designing secure and scalable APIs for business applications.
✔ API Gateway & Lifecycle Management – Managing API security, access control, and versioning.
✔ Enterprise System & SaaS Integration – Connecting ERP, CRM, and cloud platforms through APIs.
✔ API Security & Compliance – Implementing best practices to protect sensitive data and prevent breaches.`
      }
    ]
  }
},
{
  icon: <Smartphone className="h-12 w-12 text-cyan-400" />,
  title: "Mobile Application Development",
  description: "Designing and securing intuitive mobile experiences.",
  features: [
    "Native Mobile Apps",
    "Cross-Platform Development",
    "Mobile UX/UI Design",
    "Mobile App Security & Maintenance"
  ],
  details: {
    categoryContent: `In today’s mobile-first world, businesses need high-performance, user-friendly, and secure mobile applications to stay connected with their customers. Teknismart’s Mobile Application Development services help businesses build scalable, intuitive, and feature-rich apps for iOS, Android, and cross-platform environments. From concept to deployment, we ensure seamless user experiences and robust security for long-term success.`,
    subcategories: [
      {
        name: "Native Mobile Apps",
        content: `✔ iOS App Development (Swift, Objective-C) – Building seamless, Apple-optimized experiences.
✔ Android App Development (Kotlin, Java) – Creating scalable, feature-rich Android apps.
✔ Device-Specific Optimization – Ensuring smooth performance across all smartphones and tablets.
✔ App Store & Google Play Compliance – Guaranteeing apps meet publishing guidelines for approval.`
      },
      {
        name: "Cross-Platform Development",
        content: `✔ Flutter, React Native, and Xamarin Development – Building apps with shared codebases for efficiency.
✔ Performance Optimization – Ensuring near-native speed and responsiveness.
✔ Consistent UI/UX Across Platforms – Delivering uniform branding and user experience.
✔ Seamless Cloud Integration – Connecting mobile apps with cloud databases and backend services.`
      },
      {
        name: "Mobile UX/UI Design",
        content: `✔ User-Centered Design (UCD) – Creating intuitive and engaging user interfaces.
✔ Interactive Prototyping & Wireframing – Visualizing the user journey before development.
✔ Motion Design & Microinteractions – Enhancing user engagement with smooth animations.
✔ Accessibility & Usability Testing – Ensuring apps cater to diverse user needs.`
      },
      {
        name: "Mobile App Security & Maintenance",
        content: `✔ End-to-End App Security – Implementing encryption, authentication, and data protection measures.
✔ Regular Updates & Performance Optimization – Ensuring apps stay fast, secure, and compatible with new OS versions.
✔ Bug Fixes & Crash Analytics – Continuously improving app stability.
✔ Ongoing Support & Feature Enhancements – Keeping your app competitive in a dynamic market.`
      }
    ]
  }
},
{
  icon: <Database className="h-12 w-12 text-indigo-400" />,
  title: "Big Data & Analytics",
  description: "Leveraging data for insights, intelligence, and strategy.",
  features: [
    "Data Warehousing & ETL",
    "Real-Time Analytics",
    "Data Visualization",
    "Predictive Analytics & AI-Driven Insights"
  ],
  details: {
    categoryContent: `Data is the new fuel for business success, and leveraging it effectively can drive innovation, efficiency, and competitive advantage. Teknismart’s Big Data and Data Analytics solutions empower organizations to collect, process, and analyze vast amounts of data, transforming raw information into actionable insights. From real-time analytics and predictive modeling to advanced data visualization, we help businesses make data-driven decisions with confidence.`,
    subcategories: [
      {
        name: "Data Warehousing & ETL",
        content: `✔ Data Warehousing Solutions – Designing and implementing scalable data storage architectures.
✔ ETL (Extract, Transform, Load) Pipelines – Automating data integration from multiple sources.
✔ Cloud Data Lakes & Hybrid Storage – Optimizing storage for structured and unstructured data.
✔ Data Governance & Quality Assurance – Ensuring accuracy, consistency, and compliance.`
      },
      {
        name: "Real-Time Analytics",
        content: `✔ Streaming Data Processing – Using Kafka, Apache Flink, and Spark for real-time analytics.
✔ IoT & Sensor Data Analysis – Monitoring and analyzing machine-generated data.
✔ Anomaly Detection & Alerts – Identifying issues and security threats as they occur.
✔ Personalized Customer Insights – Enabling dynamic, data-driven marketing strategies.`
      },
      {
        name: "Data Visualization",
        content: `✔ Custom Dashboards & Reports – Building real-time, role-based analytics dashboards.
✔ BI Tools Integration – Leveraging Power BI, Tableau, Looker, and D3.js for visualization.
✔ Geo-Spatial & Predictive Visualizations – Mapping trends and forecasting future patterns.
✔ User-Friendly UI/UX for Data Interpretation – Making analytics accessible to all stakeholders.`
      },
      {
        name: "Predictive Analytics & AI-Driven Insights",
        content: `✔ Machine Learning & AI-Driven Forecasting – Developing predictive models for various industries.
✔ Customer Behavior & Sentiment Analysis – Understanding and anticipating customer needs.
✔ Risk & Fraud Detection – Identifying patterns of fraudulent activity in financial transactions.
✔ Data-Driven Business Optimization – Enhancing operations, marketing, and supply chain strategies.`
      }
    ]
  }
},

{
  icon: <Zap className="h-12 w-12 text-orange-400" />,
  title: "DevOps & CI/CD",
  description: "Streamlined development and deployment automation.",
  features: [
    "Automated Testing & Deployment",
    "Infrastructure as Code (IaC)",
    "Continuous Monitoring & Logging",
    "Containerization (Docker, Kubernetes)"
  ],
  details: {
    categoryContent: `Modern software development demands speed, reliability, and efficiency. Teknismart’s DevOps and CI/CD solutions help businesses automate software delivery, enhance collaboration, and accelerate time-to-market. By leveraging automated testing, Infrastructure as Code (IaC), continuous monitoring, and containerization, we enable organizations to streamline development workflows, reduce errors, and deploy high-quality applications faster.`,
    subcategories: [
      {
        name: "Automated Testing & Deployment",
        content: `✔ CI/CD Pipeline Automation – Implementing Jenkins, GitLab CI/CD, and Azure DevOps for streamlined workflows.
✔ Automated Unit, Integration & Performance Testing – Reducing human errors with test automation.
✔ Blue-Green & Canary Deployments – Ensuring smooth rollouts with zero downtime.
✔ Rollback & Recovery Strategies – Minimizing risks during deployments.`
      },
      {
        name: "Infrastructure as Code (IaC)",
        content: `✔ Terraform & AWS CloudFormation – Managing infrastructure with code-driven automation.
✔ Configuration Management – Using Ansible, Puppet, and Chef for repeatable system setups.
✔ Environment Consistency – Avoiding manual configuration errors across dev, test, and production.
✔ Scalable & Self-Healing Infrastructure – Implementing auto-scaling and fault-tolerant architectures.`
      },
      {
        name: "Continuous Monitoring & Logging",
        content: `✔ End-to-End Application Monitoring – Using Prometheus, Grafana, and New Relic for system health checks.
✔ Log Aggregation & Analysis – Leveraging ELK Stack (Elasticsearch, Logstash, Kibana) for log centralization.
✔ Security & Compliance Monitoring – Detecting vulnerabilities and ensuring regulatory adherence.
✔ Automated Incident Response – Reducing downtime with AI-driven alerting and remediation.`
      },
      {
        name: "Containerization (Docker, Kubernetes)",
        content: `✔ Docker-Based Microservices – Breaking monolithic applications into manageable services.
✔ Kubernetes Orchestration – Automating deployment, scaling, and management of containerized apps.
✔ Hybrid & Multi-Cloud Deployments – Running containers seamlessly across cloud environments.
✔ Service Mesh Implementation – Using Istio and Linkerd for better service-to-service communication.`
      }
    ]
  }
},

{
  icon: <PackageSearch className="h-12 w-12 text-teal-400" />,
  title: "Blockchain Solutions",
  description: "Decentralized and secure blockchain technologies.",
  features: [
    "Smart Contracts Development",
    "Decentralized Applications (dApps)",
    "Cryptography & Blockchain Security",
    "NFT & Digital Asset Solutions"
  ],
  details: {
    categoryContent: `Blockchain is transforming industries by enhancing security, transparency, and decentralization. Teknismart’s Blockchain Technology Solutions empower businesses to build secure, scalable, and efficient blockchain applications that drive innovation in finance, healthcare, supply chain, and beyond. From smart contract development to decentralized applications (dApps) and digital asset solutions, we help businesses leverage blockchain’s full potential.`,
    subcategories: [
      {
        name: "Smart Contracts Development",
        content: `✔ Custom Smart Contract Development – Writing Ethereum (Solidity), Hyperledger, and Polkadot contracts.
✔ Automated & Transparent Transactions – Reducing third-party involvement with secure automation.
✔ Audit & Security Testing – Ensuring contracts are free of vulnerabilities before deployment.
✔ Smart Contract Upgradability – Implementing modular and upgradeable contracts for flexibility.`
      },
      {
        name: "Decentralized Applications (dApps)",
        content: `✔ End-to-End dApp Development – From ideation to deployment on Ethereum, Solana, and Binance Smart Chain.
✔ DeFi (Decentralized Finance) Solutions – Enabling crypto lending, staking, and decentralized exchanges.
✔ Interoperability & Cross-Chain Integration – Allowing seamless interaction across multiple blockchains.
✔ User-Friendly Wallet & UI/UX Design – Creating intuitive experiences for blockchain users.`
      },
      {
        name: "Cryptography & Blockchain Security",
        content: `✔ Zero-Knowledge Proofs & Secure Authentication – Enhancing privacy while maintaining data integrity.
✔ Multi-Signature & Hardware Wallet Integration – Strengthening asset protection.
✔ Consensus Mechanism Implementation – Supporting PoW, PoS, and hybrid models for network security.
✔ Smart Contract Audits & Penetration Testing – Identifying and mitigating vulnerabilities in blockchain systems.`
      },
      {
        name: "NFT & Digital Asset Solutions",
        content: `✔ NFT Marketplace Development – Creating platforms for buying, selling, and trading NFTs.
✔ Tokenization of Real-World Assets – Converting physical assets into digital tokens.
✔ Smart Contract-Backed Royalties & Ownership – Enabling automated creator payouts.
✔ Integration with Metaverse & Gaming – Enhancing digital economies with NFT-based utilities.`
      }
    ]
  }
},
{
  icon: <Server className="h-12 w-12 text-pink-400" />,
  title: "IT Infrastructure Management",
  description: "Ensuring optimal IT performance and resilience.",
  features: [
    "Cloud Infrastructure Management (AWS, Azure, GCP)",
    "Network & Server Optimization",
    "Disaster Recovery & Backup Solutions",
    "Performance Monitoring & Load Balancing"
  ],
  details: {
    categoryContent: `In a rapidly evolving digital landscape, maintaining a highly efficient and resilient IT infrastructure is essential for business success. Teknismart’s IT Infrastructure Management and Optimization services help businesses streamline their IT operations, enhance performance, and ensure scalability. By leveraging cloud infrastructure management, network optimization, disaster recovery, and performance monitoring, we ensure your IT systems run seamlessly and are protected against downtime and data loss.`,
    subcategories: [
      {
        name: "Cloud Infrastructure Management (AWS, Azure, GCP)",
        content: `✔ AWS, Azure, & GCP Cloud Solutions – Designing and managing cloud infrastructures that meet business needs.
✔ Cloud Cost Optimization – Reducing operational costs by managing cloud resources efficiently.
✔ Cloud Architecture & Design – Ensuring robust architecture for optimal cloud performance and security.
✔ Cloud Migration – Seamlessly migrating workloads to the cloud with minimal disruption.`
      },
      {
        name: "Network & Server Optimization",
        content: `✔ Network Performance Tuning – Enhancing data transfer speeds and reducing latency.
✔ Server Load Balancing – Distributing workloads across multiple servers for better reliability.
✔ Server Virtualization & Resource Allocation – Maximizing hardware utilization and flexibility.
✔ Proactive Monitoring & Support – Maintaining network and server health with round-the-clock monitoring.`
      },
      {
        name: "Disaster Recovery & Backup Solutions",
        content: `✔ Backup Strategy Design & Implementation – Creating secure, redundant backups for essential data.
✔ Disaster Recovery Planning – Developing recovery plans to minimize downtime and data loss.
✔ Cloud-Based Backup Solutions – Ensuring seamless backup management across distributed cloud environments.
✔ Automated Recovery Testing – Verifying the effectiveness of your recovery strategy through regular testing.`
      },
      {
        name: "Performance Monitoring & Load Balancing",
        content: `✔ Real-Time Performance Monitoring – Using advanced tools to track and optimize performance metrics.
✔ Application & Database Monitoring – Keeping applications and databases running efficiently.
✔ Automated Load Balancing – Dynamically distributing traffic across servers to prevent overloading.
✔ Proactive Alerts & Incident Response – Quickly detecting and addressing performance issues.`
      }
    ]
  }
},
{
  icon: <Zap className="h-12 w-12 text-orange-300" />,
  title: "Automation & Process Improvement",
  description: "Streamlining operations with smart automation.",
  features: [
    "Robotic Process Automation (RPA)",
    "Intelligent Process Automation (IPA)",
    "Business Process Management (BPM)",
    "Workflow Automation Solutions"
  ],
  details: {
    categoryContent: `In today’s competitive business environment, automation is the key to efficiency, accuracy, and scalability. Teknismart’s Automation Tools and Process Improvement solutions help organizations streamline operations, reduce manual workloads, and improve business processes. From Robotic Process Automation (RPA) to Intelligent Process Automation (IPA), Business Process Management (BPM), and Workflow Automation, we help businesses automate repetitive tasks, enhance decision-making, and accelerate time-to-market.`,
    subcategories: [
      {
        name: "Robotic Process Automation (RPA)",
        content: `✔ RPA Strategy & Implementation – Identifying processes for automation and implementing RPA solutions.
✔ Bot Development & Management – Designing intelligent bots to handle repetitive tasks.
✔ End-to-End Process Automation – Integrating bots with existing systems for seamless automation.
✔ Monitoring & Analytics – Tracking bot performance and optimizing processes for improved productivity.`
      },
      {
        name: "Intelligent Process Automation (IPA)",
        content: `✔ AI-Enhanced Automation – Combining RPA with Artificial Intelligence (AI) and Machine Learning (ML) for smarter decision-making.
✔ Document Processing & OCR – Automating data extraction from structured and unstructured documents.
✔ Process Discovery & Optimization – Identifying areas for automation and continuous improvement.
✔ Cognitive Automation – Enabling systems to adapt and make decisions based on historical data.`
      },
      {
        name: "Business Process Management (BPM)",
        content: `✔ BPM Strategy & Consulting – Defining process management goals and developing strategies to achieve them.
✔ Process Mapping & Optimization – Visualizing workflows to identify inefficiencies and streamline operations.
✔ End-to-End BPM Implementation – Deploying tools like BPMN (Business Process Model and Notation) for better process control.
✔ Continuous Improvement & Governance – Monitoring processes for ongoing optimization and compliance.`
      },
      {
        name: "Workflow Automation Solutions",
        content: `✔ Automated Task Routing – Automatically routing tasks based on rules and priorities.
✔ Collaboration & Communication Tools Integration – Streamlining communication and task assignment across teams.
✔ Multi-Platform Workflow Solutions – Integrating automation tools across diverse platforms like Slack, Microsoft Teams, and Jira.
✔ Real-Time Analytics & Reporting – Providing actionable insights from automated workflows for data-driven decision-making.`
      }
    ]
  }
},
{
  icon: <Briefcase className="h-12 w-12 text-lime-400" />,
  title: "Professional Services",
  description: "Comprehensive IT consulting & delivery services.",
  features: [
    "IT Consulting & Advisory",
    "System Integration",
    "Managed Services",
    "Custom Software Development",
    "IT Support & Maintenance",
    "Training & Enablement"
  ],
  details: {
    categoryContent: `In the fast-paced digital world, businesses need strategic guidance, seamless system integration, and ongoing support to stay competitive. Teknismart’s Professional Services offer tailored solutions that drive growth, efficiency, and innovation across your IT landscape. From IT consulting and system integration to managed services and custom software development, we ensure your technology stack is aligned with your business objectives.`,
    subcategories: [
      {
        name: "IT Consulting & Advisory",
        content: `✔ IT Strategy Development – Aligning technology initiatives with your long-term business goals.
✔ Cloud & Infrastructure Consulting – Optimizing cloud resources and IT infrastructure for scalability.
✔ Digital Transformation Advisory – Guiding your journey toward automation, modernization, and innovation.
✔ Risk & Security Consulting – Addressing cybersecurity risks and ensuring regulatory compliance.`
      },
      {
        name: "System Integration",
        content: `✔ Enterprise Application Integration (EAI) – Integrating disparate systems for seamless communication.
✔ Data Integration & Migration – Ensuring smooth data flow and migration across applications and platforms.
✔ ERP & CRM Integration – Connecting enterprise solutions like SAP, Salesforce, and Microsoft Dynamics.
✔ Cloud & On-Premises Integration – Bridging the gap between cloud and legacy systems for greater flexibility.`
      },
      {
        name: "Managed Services",
        content: `✔ IT Infrastructure Management – Managing and optimizing your servers, networks, and cloud environments.
✔ End-User Support & Help Desk – Offering fast, reliable support for all your end users.
✔ Network Security & Monitoring – Protecting your organization from cyber threats with real-time monitoring.
✔ Disaster Recovery & Backup Solutions – Implementing strategies to ensure data protection and business recovery.`
      },
      {
        name: "Custom Software Development",
        content: `✔ End-to-End Software Development – From concept to delivery, ensuring your software meets business requirements.
✔ Web & Mobile App Development – Building responsive, scalable, and user-friendly applications.
✔ Legacy System Modernization – Upgrading and refactoring outdated systems for better performance.
✔ Software Testing & Quality Assurance – Ensuring your software is bug-free and meets industry standards.`
      },
      {
        name: "IT Support & Maintenance",
        content: `✔ Proactive Monitoring & Issue Resolution – Preventing problems before they affect business operations.
✔ Software & System Updates – Keeping your software up-to-date with the latest features and security patches.
✔ Hardware & Network Maintenance – Ensuring your hardware and network systems are always operational.
✔ Performance Optimization – Regularly optimizing systems to maximize uptime and efficiency.`
      },
      {
        name: "Training & Enablement",
        content: `✔ Customized Training Programs – Tailored sessions for your team, covering everything from software tools to security protocols.
✔ Technical Enablement – Providing in-depth training for IT staff to enhance system performance and management.
✔ Change Management Support – Ensuring smooth transitions during system upgrades or digital transformation projects.
✔ Certification & Skill Development – Offering certifications and courses in relevant IT and business technologies.`
      }
    ]
  }
},


  ];

  const industries = [
    "Lifesciences",
    "Banking & Insurance",
    "Healthcare",
    "Retail",
    "Government",
    "Travel & Leisure",
    "Telecommunications",
    "Energy & Utilities"
  ];

  return (
    <div className="min-h-screen bg-[#020817]">
      <PageHeader
        title="Tech Solutions"
        subtitle="Innovative Technology Solutions for Modern Businesses"
        image="images/technology.jpg"
      />

      <section className="py-20 bg-[#0a1225] text-white">
        <div className="section-container max-w-5xl mx-auto px-6 text-center">
          <p className="text-gray-300 text-lg leading-relaxed">
            At <span className="text-blue-400 font-medium">Teknismart</span>, we understand that technology is the
            cornerstone of modern business success. Our mission is to provide innovative and scalable technology
            solutions that address your unique challenges and enable your organization to thrive in a rapidly evolving
            digital world...
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-center text-blue-500 mb-12">
            Our Comprehensive Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="tech-card group hover:bg-blue-900/10">
                <div className="flex items-start gap-6">
                  <div className="p-3 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                    {solution.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{solution.description}</p>
                    <ul className="grid grid-cols-1 gap-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-400">
                          <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full mr-2 shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => toggleExpand(index)}
                      className="mt-4 text-blue-400 hover:underline text-sm"
                    >
                      {expanded === index ? 'Show Less' : 'Read More'}
                    </button>
                    {expanded === index && solution.details && (
                      <div className="mt-4 text-sm text-gray-300 whitespace-pre-line transition-all duration-500 ease-in-out">
                        <p className="mb-4">{solution.details.categoryContent}</p>
                        {solution.details.subcategories.map((sub, subIndex) => (
                          <div key={subIndex} className="mb-4">
                            <h4 className="font-semibold text-blue-400 mb-1">{sub.name}</h4>
                            <p className="text-gray-400 whitespace-pre-line">{sub.content}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a1225]">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-center text-blue-500 mb-12">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="text-center bg-[#0a1225] p-6 rounded-lg shadow-lg border border-blue-500/20 hover:shadow-blue-500/20 transition-transform duration-300 hover:-translate-y-2"
              >
                <h3 className="text-lg font-bold text-white">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

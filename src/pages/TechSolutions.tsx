// pages/TechSolutions.tsx
import { PageHeader } from '../components/PageHeader';
import {
  Shield, Cloud, Brain, Code2, Layers, Server, Database, Smartphone, Zap, PackageSearch, Briefcase
} from 'lucide-react';

export default function TechSolutions() {
  const solutions = [
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
      ]
    },
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
    }
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
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

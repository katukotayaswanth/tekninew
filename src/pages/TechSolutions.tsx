import { PageHeader } from '../components/PageHeader';
import { Cloud, Shield, Brain, Code2, Layers, Server, Database, Smartphone, Zap, PackageSearch } from 'lucide-react';

export default function TechSolutions() {
  const solutions = [
    {
      icon: <Shield className="h-12 w-12 text-red-400" />,
      title: "Cybersecurity & Risk Management",
      description: "Protecting digital assets and mitigating cybersecurity threats with advanced solutions.",
      features: [
        "IAM/IGA, PAM, SSO/MFA",
        "Threat Intelligence",
        "Cloud Security",
        "Incident Response & Forensics"
      ]
    },
    {
      icon: <Cloud className="h-12 w-12 text-blue-400" />,
      title: "Cloud Solutions",
      description: "Empowering businesses with secure, scalable, and compliant cloud infrastructures.",
      features: [
        "AWS, Azure, GCP",
        "Cloud Migration & Optimization",
        "Serverless Computing",
        "Multi-cloud Solutions"
      ]
    },
    {
      icon: <Brain className="h-12 w-12 text-emerald-400" />,
      title: "AI & ML Services",
      description: "Harnessing the power of AI to optimize business processes and improve decision-making.",
      features: [
        "NLP & Chatbots",
        "Computer Vision",
        "Predictive Analytics",
        "AI-driven Automation"
      ]
    },
    {
      icon: <Code2 className="h-12 w-12 text-purple-400" />,
      title: "NextGen Technologies",
      description: "Exploring cutting-edge technologies to drive innovation and business growth.",
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
      description: "Transforming legacy systems into modern architectures.",
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
      description: "Crafting intuitive and secure mobile apps for Android and iOS.",
      features: [
        "Native Mobile Apps",
        "Cross-Platform Development",
        "Mobile UX/UI Design",
        "App Security & Maintenance"
      ]
    },
    {
      icon: <Database className="h-12 w-12 text-indigo-400" />,
      title: "Big Data & Analytics",
      description: "Leveraging data to derive actionable insights and business intelligence.",
      features: [
        "Data Warehousing & ETL",
        "Real-Time Analytics",
        "Data Visualization",
        "AI-Driven Insights"
      ]
    },
    {
      icon: <Zap className="h-12 w-12 text-orange-400" />,
      title: "Automation & Process Improvement",
      description: "Automating workflows to boost operational efficiency.",
      features: [
        "Robotic Process Automation (RPA)",
        "Intelligent Process Automation (IPA)",
        "Business Process Management",
        "Workflow Automation"
      ]
    },
    {
      icon: <Server className="h-12 w-12 text-pink-400" />,
      title: "IT Infrastructure Management",
      description: "Ensuring optimal performance and security of IT infrastructures.",
      features: [
        "Cloud Infrastructure Management",
        "Network & Server Optimization",
        "Disaster Recovery & Backup",
        "Performance Monitoring"
      ]
    },
    {
      icon: <PackageSearch className="h-12 w-12 text-teal-400" />,
      title: "Blockchain Solutions",
      description: "Innovative blockchain technologies for secure and decentralized solutions.",
      features: [
        "Smart Contracts Development",
        "dApps",
        "Cryptography & Blockchain Security",
        "NFT & Digital Assets"
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
{/*  Introduction Section */}
<section className="relative py-24 bg-[#0a1225] text-white overflow-hidden">
  {/* Subtle Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#0a1225] via-[#111c36] to-[#0a1225] opacity-90" />

  <div className="section-container relative z-10 max-w-5xl mx-auto text-center px-6 sm:px-12">
    {/* Decorative Subtle Line Accent */}
    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-blue-500 via-white/30 to-purple-500 rounded-full opacity-20" />

    <div className="bg-white/5 backdrop-blur-md rounded-xl shadow-lg px-8 py-14 sm:px-16 border border-white/10 transition-all duration-300">
      <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-gradient bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Empowering Businesses Through Technology
      </h2>

      <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
        At <span className="text-blue-400 font-medium">Teknismart</span>, we recognize that
        <span className="text-purple-400 font-medium"> technology</span> is the backbone of modern business success.
        We deliver <span className="text-blue-400 font-medium">innovative</span> and
        <span className="text-purple-400 font-medium"> scalable</span> solutions that meet unique challenges and
        drive growth in today’s fast-evolving digital landscape.
      </p>
    </div>
  </div>

  {/* Soft Ambient Glows */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute w-32 h-32 bg-blue-500 rounded-full blur-[100px] opacity-10 top-1/4 left-1/5" />
    <div className="absolute w-40 h-40 bg-purple-500 rounded-full blur-[100px] opacity-10 bottom-1/4 right-1/4" />
  </div>
</section>


      {/* Technology Solutions */}
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
                    <ul className="grid grid-cols-2 gap-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
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

      {/* Industries We Serve */}
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

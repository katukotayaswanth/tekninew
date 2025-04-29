// pages/TalentSolutions.tsx
import { PageHeader } from '../components/PageHeader';
import { Users, Target, Layers, Compass, Search, MapPin, Globe, Award } from 'lucide-react';

export default function TalentSolutions() {
  const services = [
    {
      icon: <Users className="h-12 w-12 text-blue-400" />,
      title: 'Contingent Staffing',
      description: 'Flexible, temporary staffing solutions to meet immediate business needs.',
      features: [
        "Project-based Staffing",
        "Seasonal Workforce Augmentation",
        "Short-term Contract Talent"
      ]
    },
    {
      icon: <Target className="h-12 w-12 text-purple-400" />,
      title: 'Full-time Staffing',
      description: 'Secure top-tier talent with permanent placement solutions.',
      features: [
        "Permanent Hiring",
        "Direct Placement Services",
        "Talent Acquisition Strategy"
      ]
    },
    {
      icon: <Layers className="h-12 w-12 text-emerald-400" />,
      title: 'Contract-to-Hire Staffing',
      description: 'Evaluate candidates through a trial period before making a full-time commitment.',
      features: [
        "Try-before-you-hire",
        "Reduced Hiring Risk",
        "Flexible Hiring Process"
      ]
    },
    {
      icon: <Compass className="h-12 w-12 text-yellow-400" />,
      title: 'Executive Search',
      description: 'Identifying high-impact leaders to drive business growth.',
      features: [
        "Leadership Recruitment",
        "C-level Placements",
        "Succession Planning"
      ]
    },
    {
      icon: <Search className="h-12 w-12 text-pink-400" />,
      title: 'Specialized Staffing',
      description: 'Recruitment for niche roles requiring specialized expertise.',
      features: [
        "IT Specialists",
        "Healthcare Staffing",
        "Financial & Legal Experts"
      ]
    },
    {
      icon: <MapPin className="h-12 w-12 text-cyan-400" />,
      title: 'Talent Mapping & Workforce Planning',
      description: 'Strategic insights to align talent acquisition with business objectives.',
      features: [
        "Workforce Analysis",
        "Talent Pipeline Development",
        "Market Intelligence"
      ]
    },
    {
      icon: <Globe className="h-12 w-12 text-blue-300" />,
      title: 'Onshore Staffing',
      description: 'Domestic staffing support tailored to regional and cultural needs.',
      features: [
        "Local Recruitment",
        "Regional Compliance",
        "Cultural Fit Hiring"
      ]
    },
    {
      icon: <Globe className="h-12 w-12 text-indigo-400" />,
      title: 'Offshore Staffing',
      description: 'Scale with global talent while optimizing costs and availability.',
      features: [
        "Global Talent Access",
        "Cost-effective Staffing",
        "Offshore Team Management"
      ]
    },
    {
      icon: <Globe className="h-12 w-12 text-green-400" />,
      title: 'Nearshore Staffing',
      description: 'Time-zone friendly outsourcing solutions for seamless collaboration.',
      features: [
        "Time-zone Aligned Talent",
        "Cultural Proximity",
        "Nearshore Delivery Centers"
      ]
    },
    {
      icon: <Award className="h-12 w-12 text-indigo-400" />,
      title: 'PARLEY',
      description: 'Engaging discussions and collaboration to optimize talent solutions.',
      features: [
        "Consultative Hiring",
        "Strategic Workforce Planning",
        "HR Advisory Services"
      ]
    }
  ];

  const industries = [
    "Information Technology",
    "Healthcare",
    "Finance & Banking",
    "Retail & E-commerce",
    "Telecommunications",
    "Energy & Utilities",
    "Manufacturing",
    "Government & Public Sector"
  ];

  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <PageHeader
        title="Talent Solutions"
        subtitle="Bridging the Gap Between Talent & Business Excellence"
        image="/images/talent.jpg"
      />

      <section className="py-20 bg-[#0a1225] text-white">
        <div className="section-container max-w-5xl mx-auto px-6 text-center">
          <p className="text-gray-300 text-lg leading-relaxed">
            At <span className="text-blue-400 font-medium">Teknismart</span>, we connect exceptional talent with forward-thinking businesses.
            Our tailored staffing services ensure you have access to the right people to drive your success in an ever-evolving landscape...
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-center text-blue-500 mb-12">
            Our Comprehensive Talent Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="tech-card group hover:bg-blue-900/10">
                <div className="flex items-start gap-6">
                  <div className="p-3 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-3">{service.title}</h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <ul className="grid grid-cols-1 gap-2">
                      {service.features.map((feature, idx) => (
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

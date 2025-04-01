import { motion } from 'framer-motion';
import { Users, Target, Layers, Compass, Search, Globe, MapPin, Award } from 'lucide-react';
import { ParallaxBanner } from 'react-scroll-parallax';

// Talent Services with Icons
const services = [
  {
    title: 'Contingent Staffing',
    description: 'Flexible, temporary staffing solutions to meet immediate business needs.',
    icon: <Users className="h-12 w-12 text-blue-400" />
  },
  {
    title: 'Full-time Staffing',
    description: 'Secure top-tier talent with permanent placement solutions.',
    icon: <Target className="h-12 w-12 text-purple-400" />
  },
  {
    title: 'Contract-to-Hire Staffing',
    description: 'Evaluate candidates through a trial period before making a full-time commitment.',
    icon: <Layers className="h-12 w-12 text-emerald-400" />
  },
  {
    title: 'Executive Search',
    description: 'Identifying high-impact leaders to drive business growth.',
    icon: <Compass className="h-12 w-12 text-yellow-400" />
  },
  {
    title: 'Specialized Staffing',
    description: 'Recruitment for niche roles requiring specialized expertise.',
    icon: <Search className="h-12 w-12 text-pink-400" />
  },
  {
    title: 'Talent Mapping & Workforce Planning',
    description: 'Strategic insights to align talent acquisition with business objectives.',
    icon: <MapPin className="h-12 w-12 text-cyan-400" />
  },
  {
    title: 'Onshore, Offshore & Nearshore Staffing',
    description: 'Flexible models to scale your workforce globally.',
    icon: <Globe className="h-12 w-12 text-teal-400" />
  },
  {
    title: 'PARLEY',
    description: 'Engaging discussions and collaboration to optimize talent solutions.',
    icon: <Award className="h-12 w-12 text-indigo-400" />
  }
];



export default function TalentSolutions() {
  return (
    <div className="min-h-screen bg-[#020817] text-white">
      {/* Parallax Hero Section */}
      <ParallaxBanner
        layers={[
          { image: '/images/talent.jpg', speed: -20 },
          {
            children: (
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="text-5xl sm:text-6xl font-extrabold text-white text-center drop-shadow-2xl"
                >
                  Talent Solutions
                </motion.h1>
              </div>
            ),
            speed: -10
          }
        ]}
        className="h-[70vh] w-full bg-cover bg-center"
      />

      {/* Introduction Section */}
      <section className="py-20 bg-[#0a1225] text-center">
        <div className="section-container max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-6">
            Bridging the Gap Between Talent & Business Excellence
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Teknismart is committed to connecting exceptional talent with businesses. Our staffing solutions
            are designed to connect companies with highly skilled professionals who align perfectly with
            their technical and cultural requirements. Whether you need short-term contract talent, long-term
            hires, or hybrid models, we provide flexible staffing solutions to empower your organization.
          </p>
        </div>
      </section>

      {/* Talent Services Section */}
      <section className="py-20 bg-[#0f1c3b]">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-center text-blue-500 mb-12">
            Our Comprehensive Talent Solutions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card group p-8 rounded-2xl bg-gradient-to-r from-[#0a1225] to-[#1a237e]/60 backdrop-blur-lg border border-white/10 shadow-lg transition-all hover:-translate-y-2 hover:shadow-blue-500/30"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-6 mb-4">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-[#0a1225]">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-center text-blue-500 mb-12">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Enterprise Transformation',
                company: 'Fortune 500 Tech Company',
                image:
                  'https://images.unsplash.com/photo-1556761175-129418cb2dfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
              },
              {
                title: 'Startup Scale-up',
                company: 'Innovative FinTech',
                image:
                  'https://images.unsplash.com/photo-1559526324-593bc073d938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
              },
              {
                title: 'Digital Transformation',
                company: 'Healthcare Provider',
                image:
                  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{story.title}</h3>
                  <p className="text-gray-300">{story.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#1a237e] via-[#0a1225] to-[#3B82F6] text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Talent Strategy?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Let Teknismart help you unlock the full potential of your workforce by aligning top-tier talent
            with your organizational goals.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="#explore"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-transform hover:scale-105"
            >
              Explore Solutions
            </a>
            <a
              href="#contact"
              className="bg-transparent border border-white/20 hover:bg-white/10 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

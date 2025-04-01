import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { AnimatedNumber } from './AnimatedNumber';
import { motion } from 'framer-motion';

export function HomePage() {
  const [, setIsScrolled] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);
  
  const images = [
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80', // Modern office
   
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80'  // Data center
  ];

  const words = ['INNOVATIVE', 'POWERFUL', 'SCALABLE'];

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => {
      clearInterval(imageInterval);
      clearInterval(wordInterval);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const animatedElements = document.querySelectorAll('.fade-up, .fade-in, .scale-up');
      animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);
        element.classList.toggle('visible', isVisible);
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#020817]">
      <section className="relative min-h-screen w-full flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-[#020817] to-purple-950 opacity-90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)] opacity-30"></div>
        </div>

        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="text-left space-y-8"
            >
              <motion.div className="space-y-4">
                <motion.h1 
                  className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.1] tracking-tight"
                >
                  <motion.span
                    variants={item}
                    className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600"
                  >
                    TRANSFORMING
                  </motion.span>
                  <motion.span
                    variants={item}
                    className="block text-white"
                  >
                    BUSINESSES WITH
                  </motion.span>
                  <motion.div
                    variants={item}
                    className="h-[1.1em] overflow-hidden"
                  >
                    <motion.span
                      key={words[currentWord]}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -50, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600"
                    >
                      {words[currentWord]}
                    </motion.span>
                  </motion.div>
                  <motion.span
                    variants={item}
                    className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600"
                  >
                    TECH SOLUTIONS
                  </motion.span>
                </motion.h1>

                <motion.p
                  variants={item}
                  className="text-l text-gray-400 max-w-xl leading-relaxed"
                >
                  Transform your business with our cutting-edge technology solutions. 
                  We combine innovation, expertise, and creativity to deliver 
                  exceptional results that drive your success forward.
                </motion.p>
              </motion.div>

              <motion.div
                variants={item}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link
                  to="/contact"
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-[2px]"
                >
                  <div className="relative bg-[#020817] rounded-full px-8 py-4 transition-all duration-300 group-hover:bg-transparent">
                    <span className="relative flex items-center justify-center text-white text-lg font-medium">
                      Get Started
                      <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
                <Link
                  to="/tech-solutions"
                  className="group relative overflow-hidden rounded-full border border-blue-500/30 px-8 py-4 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative flex items-center justify-center text-white text-lg font-medium">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Image Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] hidden lg:block"
            >
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 rounded-2xl overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 mix-blend-overlay"></div>
                  <img
                    src={image}
                    alt={`Tech Solution ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent opacity-80"></div>
                </motion.div>
              ))}
              
              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="w-full py-20 bg-[#020817] relative overflow-hidden">
        <div className="section-container relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-500 mb-16">WHAT WE PROVIDE</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Software Development",
                description: "Tailored applications designed to fit your business needs, timeline, and budget perfectly.",
                image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80",
                color: "blue"
              },
              {
                title: "IT Staffing",
                description: "Connect with industry leaders who collaborate with your team to elevate your company.",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
                color: "purple"
              },
              {
                title: "Professional Consulting",
                description: "Expert guidance to integrate technology and achieve your business goals effectively.",
                image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
                color: "emerald"
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="service-card bg-[#1E0B33] rounded-3xl p-6 transform hover:-translate-y-2 transition-all duration-500"
              >
                <div className="flex flex-col h-full">
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="mb-4">
                    <h3 className={`text-xl text-${service.color}-400 font-semibold`}>{service.title}</h3>
                  </div>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Are We */}
      <section className="w-full py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#020817] via-blue-900/20 to-[#020817]"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80')] opacity-5 bg-cover bg-center"></div>
        </div>
        <div className="section-container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 mb-4 fade-up">WHO ARE WE</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent fade-up leading-tight max-w-4xl mx-auto">
              Empowering Businesses With Tailored Tech Solutions
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: 310, suffix: "k+", label: "Employees placed" },
              { number: 120, suffix: "k+", label: "Revenue generated" },
              { number: 100, suffix: "%", label: "Client satisfaction" },
              { number: 15, suffix: "+", label: "Years of excellence" }
            ].map((stat, index) => (
              <div key={index} className="stat-card fade-up" style={{transitionDelay: `${index * 0.1}s`}}>
                <div className="bg-[#0a1225]/90 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 text-center">
                  <AnimatedNumber end={stat.number} suffix={stat.suffix} />
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Resources */}
      <section className="w-full py-20 bg-[#0a1225]">
        <div className="section-container">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-500 mb-16">OUR RESOURCES</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'BLOGS', image: 'photo-1633356122102-3fe601e05bd2' },
              { title: 'RESOURCES', image: 'photo-1550751827-4bd374c3f58b' },
              { title: 'STORIES', image: 'photo-1451187580459-43490279c0fa' },
              { title: 'INSIGHTS', image: 'photo-1639322537228-f710d846310a' },
              { title: 'RESEARCH', image: 'photo-1620712943543-bcc4688e7485' },
              { title: 'TRENDS', image: 'photo-1571171637578-41bc2dd41cd2' }
            ].map((item, i) => (
              <div key={i} className="resource-card fade-up group" style={{transitionDelay: `${i * 0.1}s`}}>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=400&q=80`}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1225] to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-blue-400 mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">
                    Discover the latest insights and trends in technology and business.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partnerships */}
      <section className="w-full py-20 bg-[#020817] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')] opacity-5 bg-cover bg-center"></div>
        <div className="section-container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 mb-4">Technology Partnerships</h2>
            <p className="text-xl text-gray-400">Powered by industry leaders in technology</p>
          </div>
          <div className="overflow-hidden">
            <div className="partners-container">
              {[...Array(2)].map((_, trackIndex) => (
                <div key={`track-${trackIndex}`} className="partners-track">
                  {[...Array(3)].map((_, groupIndex) => (
                    <React.Fragment key={`group-${trackIndex}-${groupIndex}`}>
                      <div className="flex justify-center items-center p-8 bg-[#0a1225]/50 rounded-xl">
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
                          alt="Microsoft"
                          className="partner-logo h-12"
                        />
                      </div>
                      <div className="flex justify-center items-center p-8 bg-[#0a1225]/50 rounded-xl">
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"
                          alt="Oracle"
                          className="partner-logo h-12"
                        />
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
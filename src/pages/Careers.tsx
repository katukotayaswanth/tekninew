import { PageHeader } from '../components/PageHeader';
import { Briefcase, Star, Users, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

// Benefits Section
const benefits = [
  {
    icon: <Star className="h-12 w-12 text-blue-400" />,
    title: 'Innovative Environment',
    description:
      'Work with cutting-edge technologies and collaborate with experts across industries to build impactful solutions.'
  },
  {
    icon: <Briefcase className="h-12 w-12 text-purple-400" />,
    title: 'Career Growth',
    description:
      'We’re invested in your development with training, mentorship, and hands-on experience to advance your skills and career.'
  },
  {
    icon: <Users className="h-12 w-12 text-emerald-400" />,
    title: 'Inclusive Culture',
    description:
      'We foster a culture of inclusivity, respect, and teamwork where diversity is our strength.'
  },
  {
    icon: <Layers className="h-12 w-12 text-red-400" />,
    title: 'Meaningful Work',
    description:
      'Your contributions will have a direct impact on our clients’ success, making a real difference in transforming businesses.'
  }
];



export default function Careers() {
  return (
    <div className="min-h-screen bg-[#020817]">
      {/* Page Header Section */}
      <PageHeader
        title="Careers"
        subtitle="Shape the Future of Technology with Us"
        image="https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Why Work With Us */}
      <section className="py-20 bg-[#0a1225]">
        <div className="section-container text-center max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-400 mb-6 animate-fade-in">
            Why Work With Us?
          </h2>
          <p className="text-gray-400 mb-12 leading-relaxed text-lg">
            At Teknismart, we believe in the power of talent, innovation, and
            collaboration. We offer a dynamic environment where you can thrive,
            learn, and grow.
          </p>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="glass-card bg-gradient-to-r from-[#0a1225]/80 to-[#1a237e]/60 rounded-2xl p-8 border border-white/10 shadow-xl hover:shadow-blue-500/30 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  {benefit.icon}
                  <h3 className="text-2xl font-bold text-white">{benefit.title}</h3>
                </div>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* Open Positions Section */}
<section className="py-20 bg-[#0a1225] text-white">
  <div className="section-container max-w-6xl mx-auto px-6 lg:px-12">
    {/* Section Title */}
    <h2 className="text-3xl font-bold text-center text-blue-500 mb-12">
      Open Positions
    </h2>

    {/* Job Openings Grid */}
    <div className="grid gap-8 lg:grid-cols-2">
      {[
        {
          title: 'Senior Full Stack Developer',
          type: 'Full-time',
          mode: 'Remote',
          experience: '5+ years',
          skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
        },
        {
          title: 'DevOps Engineer',
          type: 'Full-time',
          mode: 'Hybrid',
          experience: '3+ years',
          skills: ['Docker', 'Kubernetes', 'CI/CD', 'Cloud Platforms'],
        },
        {
          title: 'UI/UX Designer',
          type: 'Full-time',
          mode: 'On-site',
          experience: '4+ years',
          skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
        },
        {
          title: 'Data Scientist',
          type: 'Full-time',
          mode: 'Remote',
          experience: '3+ years',
          skills: ['Python', 'Machine Learning', 'SQL', 'Data Visualization'],
        },
      ].map((job, index) => (
        <div
          key={index}
          className="bg-[#0a1225] rounded-xl p-6 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
        >
          {/* Job Title & Icon */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-blue-400">{job.title}</h3>
            <svg
              className="h-6 w-6 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-3-3v6m6 4H6a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2z"
              />
            </svg>
          </div>

          {/* Job Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm flex items-center gap-1">
              🕒 {job.type}
            </span>
            <span
              className={`${
                job.mode === 'Remote'
                  ? 'bg-purple-600/20 text-purple-400'
                  : 'bg-green-600/20 text-green-400'
              } px-3 py-1 rounded-full text-sm flex items-center gap-1`}
            >
              🌍 {job.mode}
            </span>
            <span className="bg-emerald-600/20 text-emerald-400 px-3 py-1 rounded-full text-sm flex items-center gap-1">
              📅 {job.experience}
            </span>
          </div>

          {/* Required Skills */}
          <p className="text-gray-300 mb-4">Required Skills:</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {job.skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-[#1a2234] text-gray-300 px-3 py-1 rounded-full text-sm flex items-center gap-1"
              >
                ✅ {skill}
              </span>
            ))}
          </div>

          {/* Apply Button */}
          <button
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:brightness-110 transition-all duration-300"
          >
            Apply Now
          </button>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Join Our Team */}
      <section className="py-24 bg-gradient-to-br from-[#1a237e] via-[#0a1225] to-[#3B82F6] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Join Our Team
          </motion.h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Ready to take the next step in your career and be part of a team
            that values innovation, growth, and collaboration? Apply today and
            make an impact with Teknismart!
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://example.com/submit-resume"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all"
            >
              Submit Your Resume
            </a>
            
          </div>
        </div>
      </section>
    </div>
  );
}

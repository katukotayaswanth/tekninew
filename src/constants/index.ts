// Constants used across the application
export const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }
};

export const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80'
];

export const HERO_WORDS = ['INNOVATIVE', 'POWERFUL', 'SCALABLE'];

export const SERVICES: ServiceCard[] = [
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
];

export const STATS: StatCard[] = [
  { number: 310, suffix: "k+", label: "Employees placed" },
  { number: 120, suffix: "k+", label: "Revenue generated" },
  { number: 100, suffix: "%", label: "Client satisfaction" },
  { number: 15, suffix: "+", label: "Years of excellence" }
];

export const RESOURCES: ResourceCard[] = [
  { title: 'BLOGS', image: 'photo-1633356122102-3fe601e05bd2' },
  { title: 'RESOURCES', image: 'photo-1550751827-4bd374c3f58b' },
  { title: 'STORIES', image: 'photo-1451187580459-43490279c0fa' },
  { title: 'INSIGHTS', image: 'photo-1639322537228-f710d846310a' },
  { title: 'RESEARCH', image: 'photo-1620712943543-bcc4688e7485' },
  { title: 'TRENDS', image: 'photo-1571171637578-41bc2dd41cd2' }
];
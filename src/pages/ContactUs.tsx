import { PageHeader } from '../components/PageHeader';
import { Building2, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-[#020817]">
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in Touch with Our Team"
        image="https://source.unsplash.com/random/1920x1080?office,contact"
      />

      <section className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-blue-500 mb-6">Let's Connect</h2>
              <p className="text-gray-400 mb-8">
                Have questions about our services? Ready to start your next project? 
                We're here to help!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-blue-500/10">
                    <Building2 className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Office Address</h3>
                    <p className="text-gray-400">520 Central Parkway East, Ste 212, Plano, TX, 75074</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-purple-500/10">
                    <Phone className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Phone</h3>
                    <p className="text-gray-400">972-905-7431</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-emerald-500/10">
                    <Mail className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <p className="text-gray-400">info@teknismart.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-red-500/10">
                    <Clock className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Business Hours</h3>
                    <p className="text-gray-400">Mon–Fri (9:00 AM – 5:00 PM)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="tech-card">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 mb-2">First Name</label>
                    <input 
                      type="text"
                      className="w-full bg-[#1a2234] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Last Name</label>
                    <input 
                      type="text"
                      className="w-full bg-[#1a2234] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-400 mb-2">Email</label>
                  <input 
                    type="email"
                    className="w-full bg-[#1a2234] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-400 mb-2">Subject</label>
                  <input 
                    type="text"
                    className="w-full bg-[#1a2234] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-400 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-[#1a2234] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
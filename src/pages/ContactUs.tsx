// ContactUs.tsx
// Remove the duplicate React import - only need one import statement
import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Building2, Phone, Mail, Clock } from 'lucide-react';

export default function ContactUs() {
  return (
    <>
      {/* Page Header */}
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in Touch with Our Team"
        image="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Contact Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Side - Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-blue-500 mb-6">Let's Connect</h2>
              <p className="text-gray-400 mb-8">
                Have questions about our services? Ready to start your next project? We're here to help!
              </p>

              <div className="space-y-6">
                <ContactDetail 
                  icon={<Building2 className="h-6 w-6 text-blue-400" />} 
                  title="Office Address" 
                  text="520 Central Parkway East, Ste 212, Plano, TX, 75074" 
                />
                <ContactDetail 
                  icon={<Phone className="h-6 w-6 text-purple-400" />} 
                  title="Phone" 
                  text="972-905-7431" 
                />
                <ContactDetail 
                  icon={<Mail className="h-6 w-6 text-emerald-400" />} 
                  title="Email" 
                  text="info@teknismart.com" 
                />
                <ContactDetail 
                  icon={<Clock className="h-6 w-6 text-red-400" />} 
                  title="Business Hours" 
                  text="Mon–Fri (9:00 AM – 5:00 PM)" 
                />
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white/5 rounded-xl p-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <InputField placeholder="First Name *" />
                  <InputField placeholder="Last Name *" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <InputField placeholder="Phone Number *" />
                  <InputField placeholder="Email *" />
                </div>
                <InputField placeholder="Subject *" />
                <TextAreaField placeholder="Enter Your Message *" />
                <SubmitButton />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Small Components
function ContactDetail({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="p-3 rounded-lg bg-blue-500/10">{icon}</div>
      <div>
        <h3 className="text-white font-semibold">{title}</h3>
        <p className="text-gray-400">{text}</p>
      </div>
    </div>
  );
}

function InputField({ placeholder }: { placeholder: string }) {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-[#1a2234] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

function TextAreaField({ placeholder }: { placeholder: string }) {
  return (
    <div>
      <textarea
        placeholder={placeholder}
        rows={4}
        className="w-full bg-[#1a2234] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
    </div>
  );
}

function SubmitButton() {
  return (
    <button 
      type="submit"
      className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
    >
      Send
    </button>
  );
}
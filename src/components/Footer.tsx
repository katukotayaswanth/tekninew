import { Building2, Phone, Mail, Clock, Send, Facebook, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-[#0a1225] py-12">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Have Any Questions?</h2>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center">
                <Building2 className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                <span>520 Central Parkway East, Ste 212, Plano, TX, 75074</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                <span>972-905-7431</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                <span>info@teknismart.com</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                <span>Mon–Fri (9:00 AM – 5:00 PM)</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 rounded-xl p-6">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="First Name *"
                    className="w-full bg-[#1a2234] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name *"
                    className="w-full bg-[#1a2234] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    className="w-full bg-[#1a2234] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email *"
                    className="w-full bg-[#1a2234] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject *"
                  className="w-full bg-[#1a2234] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
                />
              </div>
              <div>
                <textarea
                  placeholder="Enter Your Message *"
                  rows={4}
                  className="w-full bg-[#1a2234] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
              >
                Send
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 py-8 border-t border-gray-800">
          {/* Newsletter Subscription */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-4 text-blue-400">Subscribe to Get Our Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#1a2234] text-white px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
              <button className="bg-blue-500 px-6 py-2 rounded-r-lg hover:bg-blue-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-bold mb-4 text-blue-400">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400 pt-8 border-t border-gray-800">
          <p>©2025 Teknismart Solutions Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Touch</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Looking for opportunities, collaborations, or just want to say hi? My inbox is always open.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 flex items-start space-x-4">
              <div className="bg-cyan-500/10 p-4 rounded-full text-cyan-400 mt-1">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Email Me</h3>
                <a href="mailto:mohammadshayan04824@gmail.com" className="text-slate-300 hover:text-cyan-400 transition-colors">
                  mohammadshayan04824@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 flex items-start space-x-4">
              <div className="bg-blue-500/10 p-4 rounded-full text-blue-400 mt-1">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Call Me</h3>
                <a href="tel:+919012589435" className="text-slate-300 hover:text-blue-400 transition-colors">
                  +91-9012589435
                </a>
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 flex items-start space-x-4">
              <div className="bg-teal-500/10 p-4 rounded-full text-teal-400 mt-1">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Location</h3>
                <p className="text-slate-300">
                  Phagwara, Punjab / Muzaffarnagar, UP
                </p>
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <a href="https://github.com/Mohdshayan234" target="_blank" rel="noreferrer" className="bg-slate-800 p-4 rounded-full text-slate-300 hover:text-white hover:bg-slate-700 transition-all shadow-lg hover:shadow-cyan-500/20">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/mohdshayan" target="_blank" rel="noreferrer" className="bg-slate-800 p-4 rounded-full text-slate-300 hover:text-white hover:bg-slate-700 transition-all shadow-lg hover:shadow-blue-500/20">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 rounded-2xl border border-slate-700 p-8 shadow-xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                  <input type="text" id="name" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Your Email</label>
                  <input type="email" id="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                <input type="text" id="subject" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all" placeholder="Hello there!" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea id="message" rows="4" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none" placeholder="I'd like to work with you..."></textarea>
              </div>
              <button type="button" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

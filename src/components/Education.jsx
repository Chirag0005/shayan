import { motion } from 'framer-motion';

const educationData = [
  {
    institution: 'Lovely Professional University',
    degree: 'Bachelor of Technology in Computer Science',
    date: 'Apr 23 – Present',
    location: 'Phagwara, Punjab',
    details: 'CGPA: 6.4'
  },
  {
    institution: 'MG Public School',
    degree: 'Intermediate (PCM)',
    date: 'Apr 22 – Mar 23',
    location: 'Muzaffarnagar, UP',
    details: 'Percentage: 67%'
  },
  {
    institution: 'MG Public School',
    degree: 'Matriculation',
    date: 'Apr 20 – Mar 21',
    location: 'Muzaffarnagar, UP',
    details: 'Percentage: 84%'
  }
];

const certificatesData = [
  { title: 'Web Development', issuer: 'SkillCraft', date: 'June 25' },
  { title: 'Public Speaking with Canva', issuer: 'Coursera', date: 'Nov 23' },
  { title: 'Poultry Diseases', issuer: 'Udemy', date: 'Nov 23' },
];

const achievementsData = [
  {
    title: 'Smart India Hackathon',
    desc: 'Successful completion of the project within 36 hours.'
  },
  {
    title: 'NeoColab',
    desc: 'Completed a 76-hour course in C++ and Java.'
  }
];

const Education = () => {
  return (
    <section id="experience" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education Timeline */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-3xl font-bold text-white mb-2 flex items-center">
                <span className="text-cyan-400 mr-3">🎓</span> Education
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-transparent rounded-full"></div>
            </motion.div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
              {educationData.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="hidden md:block w-[calc(50%-2.5rem)]"></div>
                  
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-cyan-500 text-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/50 transition-colors shadow-lg shadow-slate-900/20">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                      <h3 className="font-bold text-lg text-white">{edu.degree}</h3>
                      <time className="text-sm font-medium text-cyan-400 mt-1 sm:mt-0">{edu.date}</time>
                    </div>
                    <div className="text-slate-300 font-medium mb-2">{edu.institution}</div>
                    <div className="flex justify-between items-center text-sm text-slate-400">
                      <span>{edu.location}</span>
                      <span className="bg-slate-900/80 px-2 py-1 rounded text-cyan-300 font-semibold">{edu.details}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certificates & Achievements */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-3xl font-bold text-white mb-2 flex items-center">
                <span className="text-blue-400 mr-3">🏆</span> Certifications & Achievements
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-transparent rounded-full"></div>
            </motion.div>

            <div className="space-y-6 mb-12">
              {certificatesData.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 flex items-center justify-between hover:border-blue-500/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                      📜
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{cert.title}</h4>
                      <p className="text-slate-400 text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-blue-400">{cert.date}</div>
                </motion.div>
              ))}
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">Milestones</h3>
              {achievementsData.map((ach, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-cyan-500 before:rounded-full"
                >
                  <h4 className="text-white font-semibold">{ach.title}</h4>
                  <p className="text-slate-400 text-sm mt-1">{ach.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;

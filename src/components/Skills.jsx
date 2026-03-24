import { motion } from 'framer-motion';

const skillsData = [
  { category: 'Languages', items: ['C', 'C++', 'Python', 'Java'] },
  { category: 'Frameworks', items: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'React', 'Node.js'] },
  { category: 'Tools/Platforms', items: ['MySQL', 'MongoDB', 'Git', 'GitHub'] },
  { category: 'Soft Skills', items: ['Problem-Solving', 'Team Leader', 'Adaptability'] },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative bg-slate-950">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 inline-block mb-4">
            Technical Arsenal
          </h2>
          <div className="h-1 w-24 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-colors group"
            >
              <h3 className="text-xl font-semibold text-white mb-6 group-hover:text-cyan-400 transition-colors">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, i) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm font-medium border border-slate-700 hover:bg-slate-700 hover:text-white transition-all cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projectsData = [
  {
    title: 'Volunteer Management System',
    date: 'Mar 25 – April 25',
    description: 'A comprehensive platform for organizations to post opportunities, manage registrations, track participation, and coordinate events efficiently.',
    tech: ['MERN Stack', 'Clerk Auth', 'REST APIs', 'Tailwind'],
    link: 'https://github.com/Mohdshayan234',
    features: [
      'Role-based access for admins and volunteers',
      'Real-time updates & event scheduling',
      'Fully responsive UI'
    ]
  },
  {
    title: 'Deadlock Detection and Prevention',
    date: 'Feb 25 – April 25',
    description: 'System simulating process execution and resource allocation to identify and demonstrate deadlock situations in operating systems.',
    tech: ['Banker\'s Algorithm', 'RAG', 'C++ / Java'],
    link: 'https://github.com/Mohdshayan234',
    features: [
      'Visual resource allocation graph analysis',
      'Deadlock avoidance techniques',
      'Step-by-step computation display'
    ]
  },
  {
    title: 'Volcano Engine',
    date: 'Jul 25 – Jul 25',
    description: 'Simulation-based model to understand geological processes including magma flow, pressure buildup, and environmental impact.',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript'],
    link: 'https://github.com/Mohdshayan234',
    features: [
      'Magma pressure calculation logic',
      'Heat-flow simulation',
      'Real-time parameter adjustments'
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative bg-slate-900 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span></h2>
          <p className="text-slate-400 max-w-2xl text-lg">Showcasing my technical expertise through real-world applications and complex system simulations.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 group flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)]"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-2xl group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  {index === 0 ? '💻' : index === 1 ? '🔄' : '🌋'}
                </div>
                <div className="flex space-x-3">
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-cyan-500 font-medium mb-4">{project.date}</p>
              
              <p className="text-slate-300 text-sm mb-6 flex-grow">
                {project.description}
              </p>

              <div className="mt-auto">
                <ul className="mb-6 space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-slate-400 text-sm flex items-start">
                      <span className="text-cyan-400 mr-2 mt-0.5">▹</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-mono text-slate-300 bg-slate-900 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

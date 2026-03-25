import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const AnimatedSphere = () => {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      <Sphere visible args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <AnimatedSphere />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left"
          >
            <motion.h2 
              className="text-cyan-400 font-semibold tracking-wide uppercase mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Full Stack Developer
            </motion.h2>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                Mohd Shayan
              </span>
            </motion.h1>
            <motion.p 
              className="text-slate-300 text-lg mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              I build interactive, high-performance digital experiences. Passionate about problem-solving and modern web technologies.
            </motion.p>

            <motion.div 
              className="flex items-center space-x-4 flex-wrap gap-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <a href="#projects" className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:scale-105 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.4)] whitespace-nowrap">
                View My Work
              </a>
              <a href="/CV.pdf" download className="px-6 py-3 rounded-full bg-slate-800 border border-slate-700 text-white font-medium hover:bg-slate-700 hover:scale-105 transition-all flex items-center whitespace-nowrap">
                <span className="mr-2">Download CV</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              </a>
              <div className="flex space-x-4 ml-2">
                <a href="https://github.com/Mohdshayan234" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/mohd-shayan-10a540392/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:mohammadshayan04824@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Avatar / Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, type: 'spring' }}
            className="flex justify-center relative"
          >
            {/* Decorative circles */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl scale-150 animate-pulse"></div>
            
            <motion.div 
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-cyan-400 to-blue-600"
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-4 border-slate-900 absolute top-0 left-0">
                <img 
                  src="/shayan.png" 
                  alt="Mohd Shayan" 
                  className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x400.png?text=shayan.jpg";
                  }}
                />
              </div>
              
              {/* Floating badges */}
              <motion.div 
                className="absolute -right-4 -bottom-4 bg-slate-800/80 backdrop-blur-md p-4 rounded-2xl border border-slate-700/50 shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1, ease: "easeInOut" }}
              >
                <span className="text-3xl">🚀</span>
              </motion.div>
              <motion.div 
                className="absolute -left-8 top-12 bg-slate-800/80 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-700/50 shadow-xl"
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              >
                <span className="text-cyan-400 font-bold">MERN Stack</span>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-slate-400 text-sm mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

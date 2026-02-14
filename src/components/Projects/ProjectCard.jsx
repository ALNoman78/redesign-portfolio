import React, { useRef, useState, useEffect } from 'react';

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div ref={cardRef} style={{ top: `calc(100px + ${index * 30}px)` }} className={`sticky flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center mb-24 last:mb-0 transform transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} bg-[#161616] border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl`}>
      {/* Image Section */}
      <div className="w-full lg:w-1/2 group relative perspective-1000">
        <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-50 transition duration-500"></div>
        <div className="relative rounded-xl overflow-hidden border border-white/10 bg-gray-900 shadow-2xl transform transition-transform duration-500 group-hover:-translate-y-2">
          {/* Browser Bar */}
          <div className="h-8 bg-gray-800/80 backdrop-blur-md border-b border-white/5 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          {/* Project Image */}
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:h-[430px] object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <span className="text-cyan-400 font-mono text-xl font-bold">{project.number}</span>
          <div className="h-[1px] w-12 bg-cyan-500/50"></div>
          <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase">{project.category || 'Web Development'}</span>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          {project.title}
        </h3>

        <p className="text-gray-400 text-lg leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 my-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6 pt-2">
          <a
            href={project.liveSite}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Live Demo</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <span className="border-b border-transparent group-hover:border-white">Source Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

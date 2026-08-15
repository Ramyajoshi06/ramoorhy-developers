import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Eye, X, ImageOff, Filter } from 'lucide-react';

const filters = ['All', 'Residential', 'Construction', 'Renovation', 'Materials'];

const projectPlaceholders = [
  { id: 1, category: 'Residential', label: 'Residential Project', subLabel: 'Project image coming soon', color: '#f59e0b' },
  { id: 2, category: 'Construction', label: 'New Construction', subLabel: 'Project image coming soon', color: '#60a5fa' },
  { id: 3, category: 'Renovation', label: 'Renovation Work', subLabel: 'Project image coming soon', color: '#34d399' },
  { id: 4, category: 'Residential', label: 'House Project', subLabel: 'Project image coming soon', color: '#f59e0b' },
  { id: 5, category: 'Construction', label: 'Building Project', subLabel: 'Project image coming soon', color: '#60a5fa' },
  { id: 6, category: 'Materials', label: 'Materials Supply', subLabel: 'Project image coming soon', color: '#c084fc' },
  { id: 7, category: 'Renovation', label: 'Home Renovation', subLabel: 'Project image coming soon', color: '#34d399' },
  { id: 8, category: 'Residential', label: 'Residential Build', subLabel: 'Project image coming soon', color: '#f59e0b' },
];

function PlaceholderCard({ project, onView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="relative rounded-xl overflow-hidden cursor-pointer group aspect-[4/3]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onView(project)}
    >
      {/* Placeholder background */}
      <div
        className="absolute inset-0 transition-transform duration-700"
        style={{
          background: `linear-gradient(135deg, rgba(15,23,42,0.9), rgba(10,15,30,0.95))`,
          border: `1.5px solid ${hovered ? project.color + '40' : 'rgba(255,255,255,0.08)'}`,
          borderRadius: '12px',
          transform: hovered ? 'scale(1.03)' : 'scale(1)',
        }}
      >
        {/* Pattern */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(${project.color} 1px, transparent 1px),
              linear-gradient(90deg, ${project.color} 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
          }}
        />

        {/* Center icon */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300"
            style={{ background: project.color + '20', border: `1.5px solid ${project.color}40` }}
          >
            <ImageOff size={28} style={{ color: project.color }} strokeWidth={1.5} />
          </div>
          <span className="text-white/30 text-xs font-medium tracking-wider uppercase px-4 text-center">
            {project.subLabel}
          </span>
          <span
            className="text-xs mt-2 font-semibold px-3 py-1 rounded-full"
            style={{ background: project.color + '20', color: project.color }}
          >
            {project.category}
          </span>
        </div>
      </div>

      {/* Hover overlay */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex flex-col items-center justify-end p-5 rounded-xl"
            style={{ background: `linear-gradient(to top, ${project.color}30, transparent)` }}
          >
            <div className="flex items-center gap-2 text-white font-semibold text-sm">
              <Eye size={16} />
              View Details
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        className="relative w-full max-w-lg rounded-2xl border border-white/15 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0f1729, #1a2540)' }}
      >
        <div className="flex items-center justify-between px-7 py-5 border-b border-white/10">
          <div>
            <h3 className="text-white font-bold text-xl font-serif">{project.label}</h3>
            <span
              className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold mt-1"
              style={{ background: project.color + '20', color: project.color }}
            >
              {project.category}
            </span>
          </div>
          <button onClick={onClose} className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center text-white/60 hover:text-white" id="project-modal-close-btn">
            <X size={16} />
          </button>
        </div>

        <div className="p-7">
          {/* Placeholder */}
          <div
            className="w-full h-48 rounded-xl flex flex-col items-center justify-center mb-5"
            style={{ background: project.color + '10', border: `1.5px dashed ${project.color}40` }}
          >
            <ImageOff size={40} style={{ color: project.color + '80' }} strokeWidth={1} />
            <p className="text-white/30 text-sm mt-3">Project photo will be added soon</p>
          </div>

          <p className="text-white/60 text-sm leading-relaxed">
            This is a placeholder for a future project photo and description. Actual project details,
            photos, and information can be added here when available.
          </p>

          <div className="mt-5 flex gap-3">
            <a
              href="https://wa.me/919672100707?text=Hello%20Ramoorhy%20Construction%20%26%20Development%2C%20I%20would%20like%20to%20discuss%20a%20similar%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-3 flex-1 justify-center"
              id="project-modal-whatsapp-btn"
            >
              <span>Discuss Similar Project</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' });

  const filtered = activeFilter === 'All'
    ? projectPlaceholders
    : projectPlaceholders.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-16 md:py-32 bg-navy-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="section-wrapper">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="section-label justify-center">Portfolio</span>
          <h2 className="heading-lg text-white mb-4">
            Our <span className="gold-text">Work</span>
          </h2>
          <span className="gold-line-center block" />
          <p className="text-white/50 text-sm mt-5 max-w-xl mx-auto">
            Project photos will be added as our portfolio grows. Contact us to discuss your requirements.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          <Filter size={14} className="text-white/30 mr-1" />
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                background: activeFilter === f ? 'linear-gradient(135deg, #d97706, #f59e0b)' : 'rgba(255,255,255,0.06)',
                color: activeFilter === f ? '#060b18' : 'rgba(255,255,255,0.6)',
                border: activeFilter === f ? 'none' : '1px solid rgba(255,255,255,0.1)',
              }}
              id={`project-filter-${f.toLowerCase()}-btn`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <AnimatePresence>
            {filtered.map((project) => (
              <PlaceholderCard
                key={project.id}
                project={project}
                onView={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={titleInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-white/30 text-xs">
            📸 Project photos will be added as the portfolio grows.
          </p>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

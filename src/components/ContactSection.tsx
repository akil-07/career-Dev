import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, FileText, Mail, ExternalLink, Maximize2, Minimize2 } from "lucide-react";

export function ContactSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      overlayRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  const contacts = [
    {
      name: "LinkedIn",
      description: "Connect with me professionally and view my network.",
      icon: <Linkedin className="w-8 h-8 text-blue-600 dark:text-blue-500" />,
      url: "https://linkedin.com",
      color: "hover:border-blue-500/50 hover:shadow-blue-500/10",
      bgClass: "bg-blue-50 dark:bg-blue-500/10",
      image: "/mycontacts/linkedin.png"
    },
    {
      name: "GitHub",
      description: "Explore my code repositories, projects, and contributions.",
      icon: <Github className="w-8 h-8 text-neutral-800 dark:text-white" />,
      url: "https://github.com",
      color: "hover:border-neutral-500/50 hover:shadow-neutral-500/10",
      bgClass: "bg-neutral-100 dark:bg-white/10",
      image: "/mycontacts/github.png"
    },
    {
      name: "Resume",
      description: "Download my resume to review my full experience and skills.",
      icon: <FileText className="w-8 h-8 text-emerald-600 dark:text-emerald-500" />,
      url: "/certifications/Akil-resume.pdf",
      color: "hover:border-emerald-500/50 hover:shadow-emerald-500/10",
      bgClass: "bg-emerald-50 dark:bg-emerald-500/10",
      image: "/mycontacts/resume.png"
    }
  ];

  return (
    <>
      <section id="contact" className="py-24 bg-white dark:bg-black border-t border-neutral-200 dark:border-neutral-800 relative">
        {/* Dynamic Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/5 to-transparent blur-[120px] rounded-full opacity-50" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-neutral-100 text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400 uppercase tracking-widest mb-4 inline-block border border-neutral-200 dark:border-neutral-800">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 dark:text-white text-neutral-900">
              Let's <span className="text-indigo-500">Connect</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 font-medium">
              Find me on these platforms or grab a copy of my resume to learn more about my journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contacts.map((contact, idx) => (
              <motion.a
                key={idx}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: "spring", stiffness: 200, damping: 20 }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`group flex flex-col items-center text-center p-10 rounded-3xl bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 shadow-sm transition-all duration-300 ${contact.color} relative mt-8 z-10`}
              >
                {/* Fixed Icon Container matching Layout Id */}
                <div className={`relative w-24 h-24 rounded-3xl flex items-center justify-center -mt-16 mb-6 shadow-lg shadow-black/5 z-20 ${contact.bgClass}`}>
                  {/* The invisible box that Framer Motion originates the animation from */}
                  <motion.div 
                    layoutId={`contact-img-${idx}`}
                    className="absolute inset-0 rounded-3xl overflow-hidden opacity-0 bg-white/50"
                  />
                  {contact.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 flex items-center gap-2 mt-2">
                  {contact.name}
                  <ExternalLink className="w-5 h-5 text-neutral-400 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 font-medium z-10">
                  {contact.description}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Bottom Contact Section */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
             className="mt-20 text-center"
          >
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold hover:scale-105 active:scale-95 transition-transform shadow-xl shadow-neutral-900/20 dark:shadow-white/20">
              <Mail className="w-5 h-5" />
              Send me an Email
            </a>
          </motion.div>
        </div>
      </section>

      {/* Screen-covering Image Overlay */}
      <AnimatePresence>
        {hoveredIdx !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center"
          >
            {/* Dark blur backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-md" 
            />
            {/* The expanding image mapping to the layout Id */}
            <motion.div 
              ref={overlayRef}
              layoutId={`contact-img-${hoveredIdx}`}
              className="relative z-10 w-[90vw] h-[90vh] md:w-[70vw] md:h-[80vh] rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/20 bg-neutral-900 flex items-center justify-center border border-white/10"
            >
              <img 
                src={contacts[hoveredIdx].image} 
                alt={`${contacts[hoveredIdx].name} preview`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://placehold.co/800x600/171717/white?text=${contacts[hoveredIdx!].name}+Image+Missing`;
                }}
              />
              {/* Fullscreen Button */}
              <button
                onClick={toggleFullscreen}
                className="pointer-events-auto absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 active:scale-95"
                title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
              >
                {isFullscreen 
                  ? <Minimize2 className="w-5 h-5" /> 
                  : <Maximize2 className="w-5 h-5" />}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

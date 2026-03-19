import { motion } from "framer-motion";
import { Laptop, PenTool, Users, Zap, Briefcase, Code } from "lucide-react";

const skills = [
  {
    title: "Technical Expertise",
    description: "Proficiency in modern JavaScript, React, Tailwind CSS, and full-stack integration workflows.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    title: "Creative Problem Solving",
    description: "Approaching challenges creatively. Breaking complex UI needs into clean, reusable structural components.",
    icon: <PenTool className="w-6 h-6" />,
  },
  {
    title: "Collaboration & Leadership",
    description: "Effective communication, a team-oriented mindset, and taking initiative in cross-functional group settings.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "System Design",
    description: "Planning architecture with robust, scalable patterns to ensure applications grow smoothly over time.",
    icon: <Laptop className="w-6 h-6" />,
  },
  {
    title: "Product Execution",
    description: "Shipping polished tools and bringing functional Minimum Viable Products directly to users quickly.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Professionalism",
    description: "Maintaining clear communication, meeting deadlines reliably, and constantly expanding our knowledge base.",
    icon: <Briefcase className="w-6 h-6" />,
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="px-3 py-1 rounded-full text-sm font-semibold bg-neutral-200 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 uppercase tracking-wider mb-4 inline-block">
            Core Competencies
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 dark:text-white text-neutral-900">
            Skills <span className="text-neutral-400">&</span> Expertise
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            A breakdown of my technical arsenal and soft skills used to conquer tough development challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white mb-6 group-hover:scale-110 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-800 transition-all">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">{skill.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

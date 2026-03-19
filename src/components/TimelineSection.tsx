import { motion } from "framer-motion";

const timelineData = [
  {
    date: "2021",
    role: "The Spark",
    organization: "First Steps in HTML",
    description: "Got the inspiration from my uncle who taught me HTML (the foundational building block of the web) and encouraged me to create web pages utilizing my own creativity. That moment made a permanent spark in me for technology.",
    tags: ["HTML", "Inspiration", "Creativity"],
  },
  {
    date: "2022",
    role: "Diving into Programming",
    organization: "Python Mastery",
    description: "Expanded my horizons significantly. I learned my first proper programming language, Python, and focused heavily on mastering its foundational concepts. This laid the logic-driven groundwork for all my future development skills.",
    tags: ["Python", "Programming Fundamentals"],
  },
  {
    date: "2023",
    role: "Finding My Calling",
    organization: "Web Development Focus",
    description: "This year the vision became clear. I had already realized that my true passion lies in software engineering, and I firmly decided to focus my energy on pursuing a career as a web developer.",
    tags: ["Web Development", "Software Engineering"],
  },
  {
    date: "2024",
    role: "Data Analyst Intern",
    organization: "Admindroid",
    description: "Got the opportunity to work with Admindroid as an intern for 3 months. Immersed myself in real-world data environments, learned core data analytics topics, and developed a deeper understanding of how to extract meaningful insights from large datasets.",
    tags: ["Data Analysis", "Internship", "Admindroid"],
  },
  {
    date: "2025 - 2026",
    role: "GSoC 2026 & GenAI Developer",
    organization: "Saveetha Engineering College",
    description: "Pursuing my B.Tech in IT at Saveetha Engineering College. I was selected to attend several major hackathons this year, accelerating my growth as a GenAI Fullstack developer. I am continually expanding my skill set and have proudly been selected for Google Summer of Code (GSoC 2026)! So I am finally here.",
    tags: ["GenAI", "Fullstack", "GSoC", "B.Tech IT"],
  },
];

export function TimelineSection() {
  return (
    <section id="timeline" className="py-24 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="px-3 py-1 rounded-full text-sm font-semibold bg-neutral-200 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 uppercase tracking-wider mb-4 inline-block">
            Timeline
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 dark:text-white text-neutral-900">
            My Professional Journey
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            A curated timeline of relevant experiences, education, and milestones that shape my career path.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line through the middle */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-neutral-900 dark:bg-white border-4 border-white dark:border-neutral-950 transform -translate-x-1.5 md:-translate-x-1/2 z-10 box-content"></div>
                
                {/* Content Box */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:shadow-xl transition-shadow">
                    <span className="text-sm font-bold text-neutral-500 dark:text-neutral-400 mb-2 block">{item.date}</span>
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-1">{item.role}</h3>
                    <h4 className="text-lg font-medium text-neutral-700 dark:text-neutral-300 mb-4">{item.organization}</h4>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-xs font-semibold text-neutral-600 dark:text-neutral-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

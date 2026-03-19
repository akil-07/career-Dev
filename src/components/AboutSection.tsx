import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <div className="inline-block">
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-neutral-200 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 uppercase tracking-wider">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Shaping the future, <span className="text-neutral-500">one step at a time.</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Welcome to my career album. This dynamic space is dedicated to exploring my professional journey, key milestones, and the skills I'm cultivating along the way. I'm passionate about continuous learning, modern engineering, and creating intuitive user experiences.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#timeline" className="px-6 py-3 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium hover:scale-105 transition-transform">
                View My Journey
              </a>
              <a href="#skills" className="px-6 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                Explore Skills
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl dark:shadow-neutral-950 border border-neutral-200 dark:border-neutral-800">
              <div className="absolute inset-0 bg-gradient-to-tr from-neutral-300 to-transparent dark:from-neutral-800 dark:to-transparent opacity-50"></div>
              <img 
                src="/IMG_3961 (1).jpg" 
                alt="Akil Profile Avatar" 
                className="w-full h-full object-cover relative z-10"
              />
            </div>
            {/* Background decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 dark:bg-blue-500/20 blur-3xl rounded-full -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

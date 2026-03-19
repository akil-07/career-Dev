import { motion } from "framer-motion";
import { Users, MessageSquareText, PieChart, CloudSun, Sparkles, Image as ImageIcon, SmilePlus, Newspaper, Palette, CheckCircle2 } from "lucide-react";

const tasks = [
  {
    title: "Speed Friending",
    description: "Engaging in rapid conversations to build quick connections and networking skills.",
    icon: <Users className="w-5 h-5 text-blue-500" />,
    color: "bg-blue-500/10 border-blue-500/20"
  },
  {
    title: "Dialoge Drive",
    description: "Practicing driven, purposeful conversations to communicate ideas effectively.",
    icon: <MessageSquareText className="w-5 h-5 text-indigo-500" />,
    color: "bg-indigo-500/10 border-indigo-500/20"
  },
  {
    title: "3 Pi of Life",
    description: "Exploring core dimensions of personal and professional life.",
    icon: <PieChart className="w-5 h-5 text-violet-500" />,
    color: "bg-violet-500/10 border-violet-500/20"
  },
  {
    title: "Weather Report",
    description: "Providing a quick status update on emotional and mental well-being.",
    icon: <CloudSun className="w-5 h-5 text-cyan-500" />,
    color: "bg-cyan-500/10 border-cyan-500/20"
  },
  {
    title: "2 Stars and 1 Wish",
    description: "Giving constructive feedback by highlighting two positives and one area for improvement.",
    icon: <Sparkles className="w-5 h-5 text-amber-500" />,
    color: "bg-amber-500/10 border-amber-500/20"
  },
  {
    title: "Picture Perciption",
    description: "Analyzing visual information to build interpretative messaging skills.",
    icon: <ImageIcon className="w-5 h-5 text-emerald-500" />,
    color: "bg-emerald-500/10 border-emerald-500/20"
  },
  {
    title: "Meme",
    description: "Using internet culture to convey relatable and impactful messages creatively.",
    icon: <SmilePlus className="w-5 h-5 text-orange-500" />,
    color: "bg-orange-500/10 border-orange-500/20"
  },
  {
    title: "My Life in 3 Headlines",
    description: "Summarizing key life moments into catchy, headline-style statements.",
    icon: <Newspaper className="w-5 h-5 text-rose-500" />,
    color: "bg-rose-500/10 border-rose-500/20"
  },
  {
    title: "Logo",
    description: "Designing a personal symbol to represent individual brand identity.",
    icon: <Palette className="w-5 h-5 text-fuchsia-500" />,
    color: "bg-fuchsia-500/10 border-fuchsia-500/20"
  }
];

export function CompletedTasksSection() {
  return (
    <section id="completed-tasks" className="py-24 bg-neutral-50 dark:bg-neutral-950 border-y border-neutral-200 dark:border-neutral-800 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-green-500/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-blue-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-white text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 uppercase tracking-widest mb-4 inline-block shadow-sm">
            Activity Log
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 dark:text-white text-neutral-900">
            Completed <span className="text-emerald-500">Tasks</span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 font-medium">
            Exercises and assignments successfully completed as part of the Career Dev curriculum.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tasks.map((task, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative p-6 bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${task.color} group-hover:scale-110 transition-transform duration-300`}>
                  {task.icon}
                </div>
                <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-colors duration-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                {task.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                {task.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { MessageCircle, TrendingUp, Clock, Users, Heart, Star } from "lucide-react";

const learnings = [
  {
    title: "Topic Mastery & Public Speaking",
    description: "Learned how to make a topic and talk about it confidently in front of others.",
    icon: <MessageCircle className="w-5 h-5 text-violet-500" />,
    color: "bg-violet-500/10 border-violet-500/20",
    accent: "text-violet-500"
  },
  {
    title: "Communication Skills",
    description: "Made a very good improvement in my communication skills throughout the semester.",
    icon: <TrendingUp className="w-5 h-5 text-blue-500" />,
    color: "bg-blue-500/10 border-blue-500/20",
    accent: "text-blue-500"
  },
  {
    title: "Punctuality",
    description: "Learned the importance of being on time and respecting others' schedules.",
    icon: <Clock className="w-5 h-5 text-amber-500" />,
    color: "bg-amber-500/10 border-amber-500/20",
    accent: "text-amber-500"
  },
  {
    title: "Connecting with People",
    description: "Learned how to effectively communicate and genuinely connect with the people around me.",
    icon: <Users className="w-5 h-5 text-emerald-500" />,
    color: "bg-emerald-500/10 border-emerald-500/20",
    accent: "text-emerald-500"
  }
];

export function LearningsSection() {
  return (
    <section id="learnings" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-rose-600/10 blur-[130px] rounded-full" />
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-white/5 text-neutral-400 border border-white/10 uppercase tracking-widest mb-5 inline-block">
            Takeaways
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-5 text-white">
            What I Learned from{" "}
            <span className="bg-gradient-to-r from-violet-400 to-rose-400 bg-clip-text text-transparent">
              Career Dev
            </span>
          </h2>
          <p className="text-lg text-neutral-400 font-medium">
            Real skills and lessons that shaped me during this semester.
          </p>
        </motion.div>

        {/* Learnings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-24">
          {learnings.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <div>
                <h3 className={`text-lg font-bold text-white mb-1 group-hover:${item.accent} transition-colors`}>
                  {item.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed font-medium text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-10 md:p-14 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/0">
            {/* Background glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-rose-500/20 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-violet-500/20 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-violet-600 flex items-center justify-center shadow-xl shadow-rose-500/20">
                  <Heart className="w-7 h-7 text-white fill-white" />
                </div>
                <div>
                  <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest block mb-1">Overall Experience</span>
                  <h3 className="text-2xl md:text-3xl font-black text-white">My Favorite Class of the Semester</h3>
                </div>
              </div>

              <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-medium mb-8 max-w-2xl">
                "This is my favorite class for the whole semester because I feel like I am <span className="text-white font-bold">chill here</span> — no rush. Loved the way the class went. It's more like a <span className="text-rose-400 font-bold">stress buster class</span> in the whole sem."
              </p>

              {/* Star Rating */}
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.div
                    key={star}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + star * 0.08, type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <Star className="w-7 h-7 text-amber-400 fill-amber-400" />
                  </motion.div>
                ))}
                <span className="ml-3 text-neutral-400 font-bold text-sm">10 / 10 Would Attend Again</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

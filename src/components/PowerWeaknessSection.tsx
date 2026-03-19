import { motion } from "framer-motion";
import { Shield, Zap, Compass, Users, CloudRain, ShieldOff, Target, Brain } from "lucide-react";

const powers = [
  {
    title: "Unwavering Determination",
    description: "I will finish the thing something that I will determine.",
    icon: <Shield className="w-6 h-6 text-indigo-500" />,
    gradient: "from-indigo-500/10 to-blue-500/10"
  },
  {
    title: "Innate Curiosity",
    description: "Loves to explore new things and dive deep into the unknown.",
    icon: <Compass className="w-6 h-6 text-emerald-500" />,
    gradient: "from-emerald-500/10 to-teal-500/10"
  },
  {
    title: "Extrovert Nature",
    description: "Energized by social interaction and collaboration with others.",
    icon: <Users className="w-6 h-6 text-amber-500" />,
    gradient: "from-amber-500/10 to-orange-500/10"
  }
];

const weaknesses = [
  {
    title: "Fragile Confidence",
    description: "Internal battles with self-assurance that I am constantly working to strengthen.",
    icon: <CloudRain className="w-6 h-6 text-rose-500" />,
    gradient: "from-rose-500/10 to-pink-500/10"
  },
  {
    title: "Trust Issues",
    description: "A natural caution when building deep connections and relying on others.",
    icon: <ShieldOff className="w-6 h-6 text-slate-500" />,
    gradient: "from-slate-500/10 to-gray-500/10"
  },
  {
    title: "Distractibility",
    description: "The challenge of staying singularly focused when multiple ideas spark interest.",
    icon: <Target className="w-6 h-6 text-violet-500" />,
    gradient: "from-violet-500/10 to-purple-500/10"
  }
];

export function PowerWeaknessSection() {
  return (
    <section id="attributes" className="py-24 bg-white dark:bg-black overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20 dark:opacity-40">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/20 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-neutral-100 text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400 uppercase tracking-widest mb-4 inline-block border border-neutral-200 dark:border-neutral-800">
            Self Awareness
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 dark:text-white text-neutral-900 bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-500">
            Powers <span className="text-neutral-300 dark:text-neutral-700">&</span> Weaknesses
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 font-medium">
            Understanding my core drivers and the areas I'm actively refining for personal growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Powers Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                <Zap className="w-5 h-5 text-indigo-500" />
              </div>
              <h3 className="text-2xl font-bold dark:text-white text-neutral-900 tracking-tight">Core Powers</h3>
            </div>
            
            <div className="space-y-4">
              {powers.map((power, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`group p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-300 overflow-hidden relative`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${power.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10 flex gap-5">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center group-hover:scale-110 group-hover:bg-white dark:group-hover:bg-neutral-700 transition-all duration-300">
                      {power.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">{power.title}</h4>
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                        {power.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Weaknesses Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center border border-rose-500/20">
                <Brain className="w-5 h-5 text-rose-500" />
              </div>
              <h3 className="text-2xl font-bold dark:text-white text-neutral-900 tracking-tight">Growth Areas</h3>
            </div>

            <div className="space-y-4">
              {weaknesses.map((weakness, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`group p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-rose-500/5 transition-all duration-300 overflow-hidden relative`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${weakness.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10 flex gap-5">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center group-hover:scale-110 group-hover:bg-white dark:group-hover:bg-neutral-700 transition-all duration-300">
                      {weakness.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">{weakness.title}</h4>
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                        {weakness.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

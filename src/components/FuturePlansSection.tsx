import { motion } from "motion/react"

type Status = "done" | "in-progress" | "pending"

interface Goal {
  id: string
  label: string
  note?: string
  status: Status
}

const GOALS: Goal[] = [
  {
    id: "g1",
    label: "Get selected in GSoC",
    status: "done",
  },
  {
    id: "g2",
    label: "Learn a new skill",
    note: "Learnt about the stock market",
    status: "done",
  },
  {
    id: "g3",
    label: "Walk 15,000 steps daily",
    note: "Going strong!",
    status: "in-progress",
  },
  {
    id: "g4",
    label: "Solo trip — figure out a place alone",
    note: "Still on the bucket list",
    status: "pending",
  },
  {
    id: "g5",
    label: "Earn ₹50,000 while studying",
    note: "₹20,000 earned so far",
    status: "in-progress",
  },
  {
    id: "g6",
    label: "Win a big hackathon",
    note: "Came close — ~5 runner-up finishes",
    status: "pending",
  },
]

const STATUS_CONFIG: Record<
  Status,
  { label: string; color: string; bg: string; icon: string; ring: string }
> = {
  done: {
    label: "Done",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    ring: "ring-emerald-500/30",
    icon: "✓",
  },
  "in-progress": {
    label: "In Progress",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    ring: "ring-amber-500/30",
    icon: "◑",
  },
  pending: {
    label: "Pending",
    color: "text-neutral-500",
    bg: "bg-neutral-700/20",
    ring: "ring-neutral-600/30",
    icon: "○",
  },
}

const doneCount = GOALS.filter((g) => g.status === "done").length
const progressPct = Math.round((doneCount / GOALS.length) * 100)

export function FuturePlansSection() {
  return (
    <section
      id="future"
      className="py-24 relative overflow-hidden bg-neutral-950 border-t border-neutral-800"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full text-sm font-semibold bg-neutral-800 text-neutral-200 uppercase tracking-wider mb-4 inline-block">
            2025 – 2026
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Year in <span className="text-neutral-400">Checkboxes</span>
          </h2>
          <p className="text-neutral-400 text-lg">
            Goals I set for myself this year — some crushed, some cooking, some
            still waiting.
          </p>
        </div>

        {/* Progress bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-neutral-400">Overall progress</span>
            <span className="text-neutral-200 font-semibold">
              {doneCount}/{GOALS.length} completed
            </span>
          </div>
          <div className="w-full h-2 rounded-full bg-neutral-800 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-emerald-500"
              initial={{ width: 0 }}
              whileInView={{ width: `${progressPct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </div>
          <p className="text-right text-xs text-neutral-600 mt-1">
            {progressPct}%
          </p>
        </div>

        {/* Goal cards */}
        <div className="max-w-2xl mx-auto flex flex-col gap-4">
          {GOALS.map((goal, i) => {
            const cfg = STATUS_CONFIG[goal.status]
            return (
              <motion.div
                key={goal.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                className={`flex items-start gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm px-5 py-4 ring-1 ${cfg.ring} hover:border-neutral-700 transition-colors duration-300`}
              >
                {/* Icon */}
                <span
                  className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-base font-bold ${cfg.bg} ${cfg.color}`}
                >
                  {cfg.icon}
                </span>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p
                    className={`font-semibold text-base leading-snug ${
                      goal.status === "done"
                        ? "line-through text-neutral-500"
                        : "text-white"
                    }`}
                  >
                    {goal.label}
                  </p>
                  {goal.note && (
                    <p className="mt-0.5 text-sm text-neutral-500">
                      {goal.note}
                    </p>
                  )}
                </div>

                {/* Badge */}
                <span
                  className={`shrink-0 self-center rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide ${cfg.bg} ${cfg.color}`}
                >
                  {cfg.label}
                </span>
              </motion.div>
            )
          })}
        </div>

        {/* Footer quote */}
        <p className="text-center text-neutral-600 text-sm mt-12 italic">
          "The year isn't over yet." — me, probably.
        </p>
      </div>
    </section>
  )
}

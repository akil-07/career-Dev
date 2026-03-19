"use client"

import {
  memo,
  useEffect,
  useRef,
  useState,
} from "react"
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion"
import { cn } from "@/lib/utils"

/* ─── Media query hook ─────────────────────────────────────────── */
const IS_SERVER = typeof window === "undefined"

function useMediaQuery(query: string, defaultValue = false): boolean {
  const getMatches = () =>
    IS_SERVER ? defaultValue : window.matchMedia(query).matches

  const [matches, setMatches] = useState(getMatches)

  useEffect(() => {
    const mm = window.matchMedia(query)
    const handler = () => setMatches(mm.matches)
    mm.addEventListener("change", handler)
    return () => mm.removeEventListener("change", handler)
  }, [query])

  return matches
}

/* ─── Constants ────────────────────────────────────────────────── */
const transition = {
  duration: 0.15,
  ease: [0.32, 0.72, 0, 1] as const,
}
const transitionOverlay = {
  duration: 0.5,
  ease: [0.32, 0.72, 0, 1] as const,
}
const AUTO_SPIN_SPEED = 0.18   // degrees per ms tick
const TICK_MS = 16             // ~60fps

interface CarouselImage {
  src: string
  objectPosition?: string
  isPortrait?: boolean
}

/* ─── Inner Cylinder ───────────────────────────────────────────── */
const Carousel = memo(
  ({
    handleClick,
    controls,
    cards,
    isCarouselActive,
    rotationRef,
  }: {
    handleClick: (imgUrl: string) => void
    controls: ReturnType<typeof useAnimation>
    cards: CarouselImage[]
    isCarouselActive: boolean
    rotationRef: React.MutableRefObject<number>
  }) => {
    const isSmall = useMediaQuery("(max-width: 640px)")
    const cylinderWidth = isSmall ? 700 : 1100
    const faceCount = cards.length
    const faceWidth = cylinderWidth / faceCount
    const radius = cylinderWidth / (2 * Math.PI)
    const rotation = useMotionValue(0)
    const transform = useTransform(
      rotation,
      (v) => `rotate3d(0, 1, 0, ${v}deg)`
    )

    // Keep rotationRef in sync so the auto-spin loop can read the current value
    useEffect(() => {
      const unsub = rotation.on("change", (v) => {
        rotationRef.current = v
      })
      return unsub
    }, [rotation, rotationRef])

    return (
      <div
        className="flex h-full items-center justify-center"
        style={{
          perspective: "1200px",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <motion.div
          drag={isCarouselActive ? "x" : false}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={(_, info) => {
            if (!isCarouselActive) return
            const next = rotationRef.current + info.offset.x * 0.05
            rotation.set(next)
            rotationRef.current = next
          }}
          onDragEnd={(_, info) => {
            if (!isCarouselActive) return
            const next = rotationRef.current + info.velocity.x * 0.05
            controls.start({
              rotateY: next,
              transition: {
                type: "spring",
                stiffness: 80,
                damping: 25,
                mass: 0.2,
              },
            })
            rotationRef.current = next
          }}
          animate={controls}
        >
          {cards.map((card, i) => (
            <motion.div
              key={`${card.src}-${i}`}
              className="absolute flex h-full origin-center items-center justify-center"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
              }}
              onClick={() => handleClick(card.src)}
            >
              {/* Card shell */}
              <motion.div
                className={cn(
                  "w-full overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)] bg-neutral-900 flex items-center justify-center",
                  card.isPortrait ? "aspect-[3/4]" : "aspect-[4/3]"
                )}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.2 }}
              >
                <motion.img
                  src={card.src}
                  alt={`class-photo-${i}`}
                  layoutId={`img-${card.src}`}
                  className="pointer-events-none w-full h-full object-cover"
                  style={{ objectPosition: card.objectPosition || "center" }}
                  initial={{ filter: "blur(6px)", opacity: 0 }}
                  animate={{ filter: "blur(0px)", opacity: 1 }}
                  transition={transition}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    )
  }
)
Carousel.displayName = "Carousel"

/* ─── Main export ──────────────────────────────────────────────── */
function ThreeDPhotoCarousel({ images }: { images: CarouselImage[] }) {
  const [activeImg, setActiveImg] = useState<string | null>(null)
  const [isCarouselActive, setIsCarouselActive] = useState(true)
  const controls = useAnimation()
  const rotationRef = useRef(0)
  const spinTimer = useRef<ReturnType<typeof setInterval> | null>(null)

  // Detect when section is in view
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, margin: "-10% 0px" })

  /* Auto-spin: starts when in view, pauses when user drags or opens image */
  useEffect(() => {
    if (isInView && isCarouselActive && !activeImg) {
      spinTimer.current = setInterval(() => {
        const next = rotationRef.current + AUTO_SPIN_SPEED * TICK_MS * 0.05
        rotationRef.current = next
        controls.set({ rotateY: next })
      }, TICK_MS)
    } else {
      if (spinTimer.current) {
        clearInterval(spinTimer.current)
        spinTimer.current = null
      }
    }
    return () => {
      if (spinTimer.current) clearInterval(spinTimer.current)
    }
  }, [isInView, isCarouselActive, activeImg, controls])

  const handleClick = (imgUrl: string) => {
    setActiveImg(imgUrl)
    setIsCarouselActive(false)
    controls.stop()
  }

  const handleClose = () => {
    setActiveImg(null)
    setIsCarouselActive(true)
  }

  return (
    <motion.div layout className="relative" ref={sectionRef}>
      {/* Expanded image overlay */}
      <AnimatePresence mode="sync">
        {activeImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer p-6 md:p-20"
            transition={transitionOverlay}
          >
            <motion.img
              layoutId={`img-${activeImg}`}
              src={activeImg}
              className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain ring-1 ring-white/10"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            />
            {/* Close hint */}
            <p className="absolute bottom-8 text-neutral-400 text-sm tracking-wide">
              Click anywhere to close
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Carousel stage */}
      <div className="relative h-[480px] w-full overflow-hidden">
        {/* Edge fade masks */}
        <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-neutral-950 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-neutral-950 to-transparent" />

        <Carousel
          handleClick={handleClick}
          controls={controls}
          cards={images}
          isCarouselActive={isCarouselActive}
          rotationRef={rotationRef}
        />
      </div>

      {/* Interaction hint — fades out after 3s */}
      <motion.p
        className="text-center text-neutral-600 text-xs mt-4 tracking-widest uppercase"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 3, duration: 1.5 }}
      >
        Drag to spin · Tap to expand
      </motion.p>
    </motion.div>
  )
}

export { ThreeDPhotoCarousel }

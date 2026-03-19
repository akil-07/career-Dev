import { 
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover 
} from "@/components/ui/animated-slideshow"

const SLIDES = [
  {
    id: "slide-1",
    title: "Hostel Approval App",
    imageUrl: "/achivements/Hostel-approval.png",
    imageClassName: "",
  },
  {
    id: "slide-2",
    title: "Notion Clone",
    imageUrl: "/achivements/mynotion.png",
    imageClassName: "",
  },
  {
    id: "slide-3",
    title: "Food Delivery App",
    imageUrl: "/achivements/food-app.png",
    imageClassName: "max-h-[75%] max-w-[55%] mx-auto",
  },
  {
    id: "slide-5",
    title: "Smart AC Controller",
    imageUrl: "/achivements/AC-Controller.png",
    imageClassName: "max-h-[75%] max-w-[55%] mx-auto",
  },
  {
    id: "slide-6",
    title: "Google Cloud Arcade",
    imageUrl: "/achivements/google arcade.png",
    imageClassName: "",
  },
]

export function ProjectsSection() {
    return (
      <section id="projects" className="py-24 relative overflow-hidden bg-neutral-950 border-t border-neutral-800">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3 py-1 rounded-full text-sm font-semibold bg-neutral-800 text-neutral-200 uppercase tracking-wider mb-4 inline-block">
              My Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
              Featured <span className="text-neutral-400">Projects</span>
            </h2>
            <p className="text-lg text-neutral-400">
              A curated collection of my most impactful web applications and software solutions.
            </p>
          </div>

          <HoverSlider className="relative place-content-center p-6 md:px-12 bg-neutral-900 rounded-3xl border border-neutral-800 text-white overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
              <div className="flex flex-col space-y-4 md:space-y-6 z-10 w-full pl-0 md:pl-4">
                {SLIDES.map((slide, index) => (
                  <TextStaggerHover
                    key={slide.id}
                    index={index}
                    className="cursor-pointer text-3xl md:text-5xl lg:text-5xl font-bold uppercase tracking-tighter text-white"
                    text={slide.title}
                  />
                ))}
              </div>
              <HoverSliderImageWrap className="w-full rounded-xl overflow-hidden shadow-2xl min-h-[300px] md:min-h-[400px] lg:min-h-[500px] bg-neutral-800/20 z-10">
                {SLIDES.map((slide, index) => (
                  <div key={slide.id} className="size-full flex items-center justify-center p-2 md:p-6">
                    <HoverSliderImage
                      index={index}
                      imageUrl={slide.imageUrl}
                      src={slide.imageUrl}
                      alt={slide.title}
                      className={`object-contain drop-shadow-2xl rounded-lg ${slide.imageClassName ? slide.imageClassName : "w-full h-full"}`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </HoverSliderImageWrap>
            </div>
            
            {/* Subtle background glow effect for the slider area */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/10 blur-[100px] rounded-full -z-0 pointer-events-none"></div>
          </HoverSlider>
        </div>
      </section>
    )
}

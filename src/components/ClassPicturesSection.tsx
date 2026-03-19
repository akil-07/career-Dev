import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel"

// All class picture photos from /public/class-pictures/
const CLASS_PHOTOS = [
  {
    src: "/class-pictures/27ca82b9-c433-4cad-b39d-393bb51ca9bf.jpg",
    objectPosition: "top",
    isPortrait: true,
  },
  {
    src: "/class-pictures/90e590ca-21b2-4813-b148-2874fe54566e.jpg",
    objectPosition: "center",
  },
  {
    src: "/class-pictures/f4be9425-d212-45af-be43-8c02bcb60cca.jpg",
    objectPosition: "center",
  },
]

export function ClassPicturesSection() {
  return (
    <section
      id="class-pictures"
      className="py-24 relative overflow-hidden bg-neutral-950 border-t border-neutral-800"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="px-3 py-1 rounded-full text-sm font-semibold bg-neutral-800 text-neutral-200 uppercase tracking-wider mb-4 inline-block">
            Career Development Class
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Moments from{" "}
            <span className="text-neutral-400">the Classroom</span>
          </h2>
          <p className="text-neutral-400 text-lg">
            Snapshots from the career dev class that shaped a lot of how I think
            about growth, people, and building things.{" "}
            <span className="text-neutral-300 font-medium">
              Drag to spin · Click to expand
            </span>
          </p>
        </div>

        {/* 3D Carousel */}
        <div className="w-full max-w-4xl mx-auto">
          <ThreeDPhotoCarousel images={CLASS_PHOTOS} />
        </div>
      </div>
    </section>
  )
}

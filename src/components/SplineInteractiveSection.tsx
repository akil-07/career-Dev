'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineInteractiveSection() {
  return (
    <section className="py-24 bg-neutral-950 px-4 md:px-6 border-t border-neutral-800">
      <div className="container mx-auto">
        <Card className="w-full h-[600px] bg-neutral-950 border-neutral-800 relative overflow-hidden group">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
          />
          
          <div className="flex h-full flex-col md:flex-row">
            {/* Left content */}
            <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-neutral-800 text-neutral-200 uppercase tracking-wider mb-6 w-max">
                That's So Far ✦
              </span>
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                Now, Let's Talk About the Future.
              </h2>
              <p className="mt-6 text-neutral-400 max-w-lg text-lg leading-relaxed">
                Every project above is a chapter I've already written. But the story doesn't stop here — I'm exploring AI-driven interfaces, real-time systems, and products that don't just function, but genuinely <span className="text-neutral-200 font-medium">feel alive</span>. The best work is still ahead.
              </p>
            </div>

            {/* Right content - Spline 3D Scene */}
            <div className="flex-1 relative min-h-[300px] md:min-h-full">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

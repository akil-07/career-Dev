import { DemoBackgroundPaths } from "./demo"
import { AboutSection } from "./components/AboutSection"
import { TimelineSection } from "./components/TimelineSection"
import { ProjectsSection } from "./components/ProjectsSection"
import { CertificationsSection } from "./components/CertificationsSection"
import { SkillsSection } from "./components/SkillsSection"
import { SplineInteractiveSection } from "./components/SplineInteractiveSection"
import { FuturePlansSection } from "./components/FuturePlansSection"
import { ClassPicturesSection } from "./components/ClassPicturesSection"
import { CursorGlow } from "./components/CursorGlow"

function App() {
  return (
    <main className="min-h-screen relative font-sans">
      <DemoBackgroundPaths />
      <AboutSection />
      <TimelineSection />
      <ProjectsSection />
      <CertificationsSection />
      <SplineInteractiveSection />
      <FuturePlansSection />
      <ClassPicturesSection />
      <SkillsSection />
      <CursorGlow />
    </main>
  )
}

export default App

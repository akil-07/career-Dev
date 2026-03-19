import { DemoBackgroundPaths } from "./demo"
import { AboutSection } from "./components/AboutSection"
import { TimelineSection } from "./components/TimelineSection"
import { ProjectsSection } from "./components/ProjectsSection"
import { CertificationsSection } from "./components/CertificationsSection"
import { SkillsSection } from "./components/SkillsSection"
import { SplineInteractiveSection } from "./components/SplineInteractiveSection"
import { FuturePlansSection } from "./components/FuturePlansSection"
import { ClassPicturesSection } from "./components/ClassPicturesSection"
import { PowerWeaknessSection } from "./components/PowerWeaknessSection"
import { CompletedTasksSection } from "./components/CompletedTasksSection"
import { ContactSection } from "./components/ContactSection"
import { LearningsSection } from "./components/LearningsSection"
import { CursorGlow } from "./components/CursorGlow"
import { FullscreenToggle } from "./components/FullscreenToggle"

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
      <PowerWeaknessSection />
      <ClassPicturesSection />
      <CompletedTasksSection />
      <LearningsSection />
      <SkillsSection />
      <ContactSection />
      <CursorGlow />
      <FullscreenToggle />
    </main>
  )
}

export default App

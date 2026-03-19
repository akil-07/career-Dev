import { PhotoGallery } from "@/components/ui/gallery";

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
        <PhotoGallery />
      </div>
    </section>
  );
}

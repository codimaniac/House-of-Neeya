import SectionLayout from "@/components/layout/SectionLayout";

export default function Home() {
  return (
    <>
      <SectionLayout className="relative text-center bg-foreground overflow-hidden after:content-[''] after:absolute after:-bottom-px after:inset-x-0 after:h-10 after:bg-background after:[clip-path:ellipse(55%_100%_at_50%_100%)]">
        <div className="flex flex-col items-center justify-center gap-4">
          <SectionLayout.Tag>The Collection</SectionLayout.Tag>
          <SectionLayout.Heading className="text-background italic">
            Shop
          </SectionLayout.Heading>
        </div>
      </SectionLayout>
    </>
  );
}

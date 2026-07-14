import SectionLayout from '@/components/layout/SectionLayout'

const Hero = () => {
  return (
        <SectionLayout className="relative text-center bg-foreground overflow-hidden after:content-[''] after:absolute after:-bottom-px after:inset-x-0 after:h-10 after:bg-background after:[clip-path:ellipse(55%_100%_at_50%_100%)]">
          <div className="flex flex-col items-center justify-center">
            <SectionLayout.Tag className="mb-0!">The Story</SectionLayout.Tag>
            <SectionLayout.Heading className="text-background italic text-[clamp(36px,6vw,68px)]">
              About Us
            </SectionLayout.Heading>
          </div>
        </SectionLayout>
  )
}

export default Hero
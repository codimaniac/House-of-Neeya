import { Button } from "@/components";
import SectionLayout from "@/components/layout/SectionLayout"
import LogoIcon from "@/assets/Logo-Icon-Light.png";
import Image from "next/image";

const Hero = () => {
  const currentYear = new Date().getFullYear();

  return (
    <SectionLayout className="flex flex-col lg:flex-row h-[85svh]">
        <div className="flex-1 order-2 lg:order-1">
          <SectionLayout.Tag>Current Season • {currentYear}</SectionLayout.Tag>
          <SectionLayout.Heading className="max-w-170 text-primary text-[clamp(2.625rem,8vw,5.5rem)] italic leading-[1.05]">
            Style is <br /> your story.
          </SectionLayout.Heading>
          <SectionLayout.Subheading className="font-serif italic text-[clamp(1rem,2.5vw,1.375rem)] max-w-115 m-0! mb-10!">
            Carefully curated footwear, clothing & handbags — chosen by Neeya,
            made for you.
          </SectionLayout.Subheading>
          <div className="flex flex-wrap gap-3">
            <Button>Shop New Arrival</Button>
            <Button
              variant="secondary"
              className="transition-all ease-in hover:-translate-y-0.5"
            >
              Our Story
            </Button>
          </div>
        </div>
        <div className="relative flex-1 order-1 lg:order-2">
          <Image
            src={LogoIcon}
            alt="Transparent Hero Background"
            className="not-lg:absolute not-lg:inset-0 not-lg:ml-auto not-lg:mt-55 not-lg:w-1/2 lg:m-auto opacity-5"
          />
        </div>
      </SectionLayout>
  )
}

export default Hero
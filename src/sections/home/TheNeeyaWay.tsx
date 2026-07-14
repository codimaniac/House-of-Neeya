import { Button } from "@/components";
import SectionLayout from "@/components/layout/SectionLayout";
import { ArrowRight } from "lucide-react";

const TheNeeyaWay = () => {
  return (
    <SectionLayout className="flex flex-col items-center text-center bg-foreground text-background">
      <SectionLayout.Tag>The Neeya Way</SectionLayout.Tag>
      <SectionLayout.Heading className="italic">
        Fashion that tells <br /> your story
      </SectionLayout.Heading>
      <hr className="border-primary w-10" />
      <SectionLayout.Subheading className="text-center font-serif">
        Every piece in our collection is personally selected by Neeya —
        handpicked for quality, trend-relevance, and the confidence it brings to
        the person wearing it.
      </SectionLayout.Subheading>
      <Button>
        <span className="leading-[0.75]">Meet Neeya</span>
        <ArrowRight size={10} />
      </Button>
    </SectionLayout>
  );
};

export default TheNeeyaWay;

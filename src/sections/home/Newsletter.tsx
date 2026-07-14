import { Button } from "@/components";
import SectionLayout from "@/components/layout/SectionLayout";
import Input from "@/components/ui/Input";

const Newsletter = () => {
  return (
    <SectionLayout className="flex flex-col items-center bg-white">
      <div className="flex flex-col items-center py-15 px-8 rounded-lg w-full bg-foreground text-background">
        <SectionLayout.Tag>Stay in the Loop</SectionLayout.Tag>
        <SectionLayout.Heading className="mb-2!">
          First to know. First to shop.
        </SectionLayout.Heading>
        <SectionLayout.Subheading className="text-center text-background/60 mb-7! mt-0!">
          Subscribe for exclusive early access to new drops, styling tips, and
          special offers.
        </SectionLayout.Subheading>
        <div className="flex flex-wrap justify-center gap-2 max-w-150 my-0 mx-auto">
          <Input
            variant="secondary"
            type="email"
            placeholder="Your email address"
            className="min-w-70"
          />
          <Button>Subscribe</Button>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Newsletter;

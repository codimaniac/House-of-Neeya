import { Button } from "@/components";
import SectionLayout from "@/components/layout/SectionLayout";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <SectionLayout className="relative text-center bg-foreground overflow-hidden after:content-[''] after:absolute after:-bottom-px after:inset-x-0 after:h-10 after:bg-background after:[clip-path:ellipse(55%_100%_at_50%_100%)]">
        <div className="flex flex-col items-center justify-center gap-4">
          <SectionLayout.Tag>The Story</SectionLayout.Tag>
          <SectionLayout.Heading className="text-background italic">
            About Us
          </SectionLayout.Heading>
        </div>
      </SectionLayout>
      <SectionLayout className="flex flex-col md:flex-row gap-10">
        <div className="flex-3">
          <SectionLayout.Tag>Our Story</SectionLayout.Tag>
          <SectionLayout.Heading className="italic">
            Curated for you
          </SectionLayout.Heading>
          <SectionLayout.Paragraph>
            House of Neeya was born from a simple observation: Nigerian women
            and men deserve fashion that reflects their ambition, their culture,
            and their unique sense of style. But finding that perfect piece—the
            one that makes you feel powerful and confident—shouldn&apos;t
            require a search party or a second mortgage.
          </SectionLayout.Paragraph>
          <SectionLayout.Paragraph>
            That&apos;s where Neeya comes in. As a lifelong lover of fashion and
            a keen observer of trends, Neeya founded this house with a singular
            mission: to curate a collection that feels personal, looks
            exceptional, and remains within reach.
          </SectionLayout.Paragraph>
          <div className="hidden md:flex items-center border-t border-t-foreground/30 pt-6">
            <Link href="/shop">
              <Button>
                Shop our collection <ArrowRightIcon size={16} />
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col flex-2 shrink-0 justify-center bg-foreground rounded-lg p-6 md:p-10">
          <SectionLayout.Subheading className="mx-0 my-0 mb-6 text-2xl text-primary font-serif font-normal">
            The Neeya Promise
          </SectionLayout.Subheading>
          <SectionLayout.Paragraph className="font-serif italic md:text-[18px] font-light leading-[1.6] text-background">
            &quot;Every item you purchase from House of Neeya comes with a
            promise of authenticity, quality, and a fit that flatters. We ship
            quickly across Nigeria and are building a community of individuals
            who believe that style is a powerful form of self-expression.&quot;
          </SectionLayout.Paragraph>
          <span className="block uppercase text-[10px] md:text-xs text-primary mb-2 tracking-widest">
            — Founder, House of Neeya
          </span>
        </div>
        <div className="flex md:hidden items-center border-t border-t-foreground/30 pt-6">
          <Link href="/shop">
            <Button>
              Shop our collection <ArrowRightIcon size={16} />
            </Button>
          </Link>
        </div>
      </SectionLayout>
      <SectionLayout className="grid grid-cols-1 md:grid-cols-4 bg-foreground">
        <div className="flex flex-col py-5 px-2 text-center">
          <span className="font-serif font-light text-primary text-[clamp(38px,7vw,68px)]">
            2000+
          </span>
          <span className="text-[11px] tracking-[0.18em] uppercase text-background/70">
            Happy Customers
          </span>
        </div>
        <div className="flex flex-col py-5 px-2 text-center">
          <span className="font-serif font-light text-primary text-[clamp(38px,7vw,68px)]">
            300+
          </span>
          <span className="text-[11px] tracking-[0.18em] uppercase text-background/70">
            Crated Pieces
          </span>
        </div>
        <div className="flex flex-col py-5 px-2 text-center">
          <span className="font-serif font-light text-primary text-[clamp(38px,7vw,68px)]">
            98%
          </span>
          <span className="text-[11px] tracking-[0.18em] uppercase text-background/70">
            5-Star Reviews
          </span>
        </div>
        <div className="flex flex-col py-5 px-2 text-center">
          <span className="font-serif font-light text-primary text-[clamp(38px,7vw,68px)]">
            48hr
          </span>
          <span className="text-[11px] tracking-[0.18em] uppercase text-background/70">
            Avg. Delivery
          </span>
        </div>
      </SectionLayout>
      <SectionLayout className="flex flex-col items-center bg-white">
        <SectionLayout.Tag>What We Stand For</SectionLayout.Tag>
        <SectionLayout.Heading>Our Brand Pillars</SectionLayout.Heading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 leading-none">
          <div className="flex flex-col gap-2 rounded-[3px] py-8 px-6 bg-primary/10 border-t-2 border-t-primary">
            <span className="font-serif font-light text-primary text-[38px] italic">
              01
            </span>
            <span className="text-[20px] font-serif font-semibold text-foreground">
              Curation
            </span>
            <SectionLayout.Paragraph className="text-[12px]!">
              Every product is intentionally chosen; not algorithmically filled.
              Neeya&apos;s eye is the only filter we trust.
            </SectionLayout.Paragraph>
          </div>
          <div className="flex flex-col gap-2 rounded-[3px] py-8 px-6 bg-accent/10 border-t-2 border-t-accent">
            <span className="font-serif font-light text-primary text-[38px] italic">
              02
            </span>
            <span className="text-[20px] font-serif font-semibold text-foreground">
              Confidence
            </span>
            <SectionLayout.Paragraph className="text-[12px]!">
              Fashion that makes the wearer feel powerful, seen, and
              effortlessly stylish. We sell the feeling, not just the item.
            </SectionLayout.Paragraph>
          </div>
          <div className="flex flex-col gap-2 rounded-[3px] py-8 px-6 bg-secondary/10 border-t-2 border-t-secondary">
            <span className="font-serif font-light text-primary text-[38px] italic">
              03
            </span>
            <span className="text-[20px] font-serif font-semibold text-foreground">
              Accessibility
            </span>
            <SectionLayout.Paragraph className="text-[12px]!">
              Premium-feeling fashion at prices that don&apos;t require a
              premium salary. Style is for everyone.
            </SectionLayout.Paragraph>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout className="flex flex-col items-center">
        <div className="flex justify-center items-center gap-4 mb-10">
          <div className="h-[0.25px] bg-foreground/30 w-30"></div>
          <div className="font-serif italic text-foreground/30">✦</div>
          <div className="h-[0.25px] bg-foreground/30 w-30"></div>
        </div>
        <SectionLayout.Heading className="italic text-[clamp(24px,4vw,40px)] mb-5">
          Ready to find your style?
        </SectionLayout.Heading>
        <Link href="/shop">
          <Button>Shop Now</Button>
        </Link>
      </SectionLayout>
    </>
  );
}

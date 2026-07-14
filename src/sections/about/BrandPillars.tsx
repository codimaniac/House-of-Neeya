import SectionLayout from '@/components/layout/SectionLayout'

const BrandPillars = () => {
  return (
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
  )
}

export default BrandPillars
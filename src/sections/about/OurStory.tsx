import { Button } from '@/components'
import SectionLayout from '@/components/layout/SectionLayout'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'

const OurStory = () => {
  return (
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
  )
}

export default OurStory
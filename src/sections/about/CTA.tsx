import { Button } from '@/components'
import SectionLayout from '@/components/layout/SectionLayout'
import Link from 'next/link'

const CTA = () => {
  return (
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
  )
}

export default CTA
import SectionLayout from "@/components/layout/SectionLayout"

const PerformanceStats = () => {
  return (
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
  )
}

export default PerformanceStats
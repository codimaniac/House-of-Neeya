type MarqueeProps = {
  tagline: string;
};

const Marquee = ({ tagline }: MarqueeProps) => {
  return (
    <div className="w-full p-2 bg-foreground text-background font-serif text-sm italic tracking-[0.08em] overflow-x-hidden">
      <div className="flex whitespace-nowrap marquee">
        {[...Array(8)].map((_, i) => (
          <span key={i} className="w-[40svw] min-w-fit pr-15">
            {tagline}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;

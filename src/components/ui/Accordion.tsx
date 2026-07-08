"use client";

import cn from "@/lib/cn";
import { Plus } from "lucide-react";
import { ReactNode, useState } from "react";

interface AccordionProps {
  children: ReactNode;
  className?: string;
}

interface AccordionItemProps {
  children: ReactNode;
  className?: string;
  title: string;
}

export const Accordion = ({ children, className }: AccordionProps) => {
  return <div className={cn("flex flex-col items-center justify-between w-full max-w-170", className)}>{children}</div>;
};

export const AccordionItem = ({ title, children, className }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className={cn("flex justify-between items-center w-full uppercase py-4 text-xs border-b-[0.5px] border-b-foreground/20 cursor-pointer tracking-[0.08em]", className)}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span><Plus size={13}/></span>
      </div>
      <div className={cn("text-left text-foreground/70 text-xs w-full overflow-hidden transition-all duration-300 ease-in-out", isOpen ? "max-h-50 py-4" : "max-h-0 p-0", className)}>{children}</div>
        
      
    </>
  );
}

export default Accordion;

import { cn } from "@/lib/utils";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

interface PageNavigatorProps {
  onPageClick: (pageNumber: number) => void;
  onNextPage: () => void;
  onPrevPage: () => void;
  currentPage: number;
  totalPages?: number;
  className?: string;
}

const PageNavigator = ({onPageClick, onNextPage, onPrevPage, currentPage, totalPages, className}: PageNavigatorProps) => {
  
  return (
    <div className={cn("flex justify-end items-center gap-4 mt-3", className)}>
      { currentPage>1 && <FaChevronLeft className="cursor-pointer" size={14} onClick={onPrevPage}/> }
      <div className="flex gap-2 text-sm">
        {
          [...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1
            return <div key={index} className={`flex items-center justify-center w-8 border-foreground hover:border aspect-square cursor-pointer ${pageNumber === currentPage ? "bg-foreground text-background" : ""}`} onClick={() => onPageClick(pageNumber)}>{pageNumber}</div>
          })
        }
      </div>
      {totalPages && currentPage<totalPages && <FaChevronRight className="cursor-pointer" size={14} onClick={onNextPage} /> }
    </div>
  )
}

export default PageNavigator
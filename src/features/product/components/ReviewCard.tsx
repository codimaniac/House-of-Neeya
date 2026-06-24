import React from "react";
import { FaRegStar, FaStar, FaStarHalfStroke } from "react-icons/fa6";

type ReviewCardProps = { children: React.ReactNode; className?: string };

type ReviewRatingProps = { rating: number; className?: string };

type ReviewTextProps = { children: React.ReactNode; className?: string };

type ReviewAuthorInfoProps = { children: React.ReactNode; className?: string };

const ReviewCard = ({ children, className }: ReviewCardProps) => {
  return (
    <div
      className={`flex flex-col bg-background p-7 border-l-2 border-l-primary rounded-sm ${className}`}
    >
      {children}
    </div>
  );
};

function ReviewRating({ rating, className }: ReviewRatingProps) {
  return (
    <div
      className={`flex gap-0.5 text-xs tracking-[2px] ${className}`}
    >
      {[...Array(5)].map((_, i) => {
        if (i < Math.floor(rating)) {
          return <FaStar key={i} size={12} className="fill-primary" />;
        }

        if (i === Math.floor(rating) && rating % 1 !== 0) {
          return <FaStarHalfStroke key={i} size={12} className="fill-primary" />;
        }

        return <FaRegStar key={i} size={12} className="fill-primary" />;
      })}
    </div>
  );
}

function ReviewText({ children, className }: ReviewTextProps) {
  return (
    <p
      className={`mt-3 mb-4 font-serif italic text-[17px] font-light leading-[1.6] ${className}`}
    >
      &quot;{children}&quot;
    </p>
  );
}

function ReviewAuthorInfo({children, className}: ReviewAuthorInfoProps) {
    return (
        <span className={`text-xs text-secondary font-semibold tracking-widest uppercase mt-auto ${className}`}>{children}</span>
    )
}

ReviewCard.Rating = ReviewRating;
ReviewCard.Text = ReviewText;
ReviewCard.AuthorInfo = ReviewAuthorInfo;

export default ReviewCard;

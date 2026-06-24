import SectionLayout from "@/components/layout/SectionLayout";
import ReviewCard from "@/features/product/components/ReviewCard";

interface Review {
  author: {
    name: string;
    location: string;
  };
  comment: string;
  rating: number;
}

const ReviewSection = () => {
  const reviews: Review[] = [
    {
      author: {
        name: "Adaeze C.",
        location: "Lagos",
      },
      comment:
        "Ordered heels and they arrived in 2 days! The quality is unreal for the price. Neeya really knows how to curate.",
      rating: 5,
    },
    {
      author: {
        name: "Kemi O.",
        location: "Abuja",
      },
      comment:
        "Finally a Nigerian fashion brand that feels premium. The leather tote is my everyday go-to. Already on my third order.",
      rating: 4,
    },
    {
      author: {
        name: "Tunde M.",
        location: "Port Harcourt",
      },
      comment:
        "The styling advice on their Instagram helped me pick the right fit. That personal touch is everything.",
      rating: 4.5,
    },
  ];
  return (
    <SectionLayout className="flex flex-col items-center">
      <SectionLayout.Tag>Reviews</SectionLayout.Tag>
      <SectionLayout.Heading className="mb-12">
        What they&apos;re saying
      </SectionLayout.Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {reviews.map((review, key) => {
          return (
            <ReviewCard key={key}>
              <ReviewCard.Rating rating={review.rating} />
              <ReviewCard.Text>
                {review.comment}
              </ReviewCard.Text>
              <ReviewCard.AuthorInfo>— {review.author.name}, {review.author.location}</ReviewCard.AuthorInfo>
            </ReviewCard>
          );
        })}
      </div>
    </SectionLayout>
  );
};

export default ReviewSection;

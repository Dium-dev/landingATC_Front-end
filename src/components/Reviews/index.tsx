import { Review } from "@/types";
import { ReviewsMarquee } from "./ReviewsMarquee";
import { getReviews } from "@/actions/reviews";

export const Reviews = async () => {
  const reviews: Review[] = await getReviews();

  if(!reviews.length) return null

  return (
    <section
      className="w-full relative"
    > 
      <div className="absolute top-0 left-0 bg-primary-lm h-2/5 w-full"/>
      <div className="max-w-[1920px] mx-auto">
        <ReviewsMarquee reviews={reviews} />
      </div>
    </section>
  );
};

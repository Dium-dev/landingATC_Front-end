import Marquee from "react-fast-marquee";
import { ReviewCard } from "./ReviewCard";
import { Review } from "@/types";

interface ReviewsMarqueeProps {
  reviews: Review[];
}

export const ReviewsMarquee = ({ reviews }: ReviewsMarqueeProps) => {
  return (
    <Marquee pauseOnHover speed={20}>
      {reviews.map((review) => (
        <ReviewCard review={review} key={review.id} />
      ))}
    </Marquee>
  );
};

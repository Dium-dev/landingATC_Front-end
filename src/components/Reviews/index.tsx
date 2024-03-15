import { ReviewsMarquee } from "./ReviewsMarquee";
import { getReviews } from "@/actions/reviews";

export const Reviews = async () => {
  const reviews = await getReviews();

  return (
    <section
      className="w-full"
      style={{ background: "linear-gradient(red 50%, transparent 50%)" }}
    >
      <div className="max-w-[1920px] mx-auto">
        <ReviewsMarquee reviews={reviews} />
      </div>
    </section>
  );
};

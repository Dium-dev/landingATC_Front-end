"use client";
import StarRatings from "react-star-ratings";
import { ImQuotesLeft } from "react-icons/im";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Review } from "@/types";

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <article className="w-60 ms:w-96 p-4 space-y-3 shadow-lg mx-4 my-6 rounded-lg border border-black border-opacity-15 bg-white dark:bg-primary-dm">
      <div className="h-32">
        <ImQuotesLeft size={30} color="red" />
        <div className="h-24 overflow-y-scroll">
          <p>{review.review}</p>
        </div>
      </div>
      <hr />
      <div className="flex flex-col ms:flex-row items-center gap-x-3">
        <IoPersonCircleSharp size={50} />
        <div className="flex flex-col justify-center items-center ms:items-start">
          <p className="text-lg">{review.user}</p>
          <StarRatings
            rating={3}
            numberOfStars={5}
            starRatedColor="orange"
            starDimension="30px"
          />
        </div>
      </div>
    </article>
  );
};

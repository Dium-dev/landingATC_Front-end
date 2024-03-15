"use client";

import { Skeleton } from "../ui/skeleton";
import StarRatings from "react-star-ratings";

export const ReviewsSkeleton = () => {
  return (
    <div className="flex justify-evenly items-center p-4">
      <div>
        <Skeleton className="w-96 h-56 p-4 flex flex-col justify-between gap-y-3">
          <Skeleton className="h-10 w-10" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
          <div className="flex items-center gap-x-4">
            <Skeleton className="rounded-full h-14 w-14" />
            <div className="flex flex-col gap-y-2">
              <Skeleton className="w-28 h-4" />
              <StarRatings
                rating={0}
                numberOfStars={5}
                starRatedColor="orange"
                starDimension="35px"
              />
            </div>
          </div>
        </Skeleton>
      </div>
      <div>
        <Skeleton className="w-96 h-56 p-4 flex flex-col justify-between gap-y-3">
          <Skeleton className="h-10 w-10" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
          <div className="flex items-center gap-x-4">
            <Skeleton className="rounded-full h-14 w-14" />
            <div className="flex flex-col gap-y-2">
              <Skeleton className="w-28 h-4" />
              <StarRatings
                rating={0}
                numberOfStars={5}
                starRatedColor="orange"
                starDimension="35px"
              />
            </div>
          </div>
        </Skeleton>
      </div>
      <div>
        <Skeleton className="w-96 h-56 p-4 flex flex-col justify-between gap-y-3">
          <Skeleton className="h-10 w-10" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
          <div className="flex items-center gap-x-4">
            <Skeleton className="rounded-full h-14 w-14" />
            <div className="flex flex-col gap-y-2">
              <Skeleton className="w-28 h-4" />
              <StarRatings
                rating={0}
                numberOfStars={5}
                starRatedColor="orange"
                starDimension="35px"
              />
            </div>
          </div>
        </Skeleton>
      </div>
    </div>
  );
};

import { getReviews } from "@/actions/reviews";
import { ReviewsTable } from "./components/ReviewsTable";

const AdminPage = async () => {
  const reviews = await getReviews();

  return (
    <main className="w-full md:p-8 flex flex-col items-center">
      <ReviewsTable reviews={reviews} />
    </main>
  );
};
export default AdminPage;

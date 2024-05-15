import { getReviews } from "@/actions/reviews";
import { ReviewsTable } from "./components/ReviewsTable";

const AdminPage = async () => {
  const reviews = await getReviews();

  return (
    <main className="w-full p-8">
      <ReviewsTable reviews={reviews} />
    </main>
  );
};
export default AdminPage;

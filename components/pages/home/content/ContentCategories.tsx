import {
  selectCategories,
  selectCategoriesStatus,
} from "@/store/features/categories";
import { useAppSelector } from "lib/store/hooks";
import CategoriesCards from "components/skeletons/Cards/CategoriesCards";
import { motion } from "framer-motion";
import Card from "../elements/Card";

const ContentCategories = () => {
  const loading = useAppSelector(selectCategoriesStatus) === "loading";
  const categories = useAppSelector(selectCategories);
  return (
    <>
      {loading && (
        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 pb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <CategoriesCards length={9} />
        </motion.div>
      )}
      {!loading && categories && (
        <motion.ul
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {categories.slice(0, 9).map((category) => (
            <Card key={category._id} data={category} />
          ))}
        </motion.ul>
      )}
    </>
  );
};

export default ContentCategories;

import {
  selectBlenders,
  selectBlendersStatus,
} from "@/store/features/blenders";
import { useAppSelector } from "@/store/hooks";
import CategoriesCards from "components/skeletons/Cards/CategoriesCards";
import { motion } from "framer-motion";
import Card from "../elements/Card";

const ContentBlenders = () => {
  const loading = useAppSelector(selectBlendersStatus) === "loading";
  const blenders = useAppSelector(selectBlenders);
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
      {!loading && blenders && (
        <motion.ul
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {blenders.map((blender) => {
            return <Card key={blender._id} data={blender} />;
          })}
        </motion.ul>
      )}
    </>
  );
};

export default ContentBlenders;
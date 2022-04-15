import {
  fetchCategories,
  selectCategories,
  selectCategoriesStatus,
} from "@/lib-client/store/features/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@/lib-client/store/hooks";
import { NextPage } from "next";
import { useEffect } from "react";
import { motion } from "framer-motion";
import GenericHero from "components/common/Hero/GenericHero";
import Card from "components/pages/categories/Card";
const Categories: NextPage = () => {
  const categories = useAppSelector(selectCategories);
  const loading = useAppSelector(selectCategoriesStatus) === "loading";
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!categories) dispatch(fetchCategories());
  }, [categories, dispatch]);

  return (
    <div>
      <GenericHero
        title="Categorías"
        description="Aquí encontrarás todas las categorías de recetas. 21 categorías para que puedas filtrar y encontrar más rápido tu nueva receta."
      />
      <div className="p-5">
        {loading && <p>Loading...</p>}
        {!loading && categories && (
          <div className="container mx-auto">
            <motion.ul
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              animate={{ opacity: 1 }}
            >
              {categories.map((category) => (
                <Card key={category._id} {...{ category }} />
              ))}
            </motion.ul>
          </div>
        )}
      </div>
      <div className="pb-20"></div>
    </div>
  );
};

export default Categories;

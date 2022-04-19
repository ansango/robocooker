import { useAppDispatch, useAppSelector } from "lib/store/hooks";
import { NextPage } from "next";

import { motion } from "framer-motion";
import GenericHero from "components/common/Hero/GenericHero";
import Card from "components/pages/categories/Card";
import CategoriesCards from "components/skeletons/Cards/CategoriesCards";
import {
  selectCategories,
  selectCategoriesStatus,
} from "@/store/features/categories";
import { useEffect } from "react";
import { getCategories } from "@/store/features/categories/thunks";
import MainLayout from "components/layout/MainLayout";

const Categories: NextPage = () => {
  const categories = useAppSelector(selectCategories);
  const loading = useAppSelector(selectCategoriesStatus) === "loading";
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!categories) dispatch(getCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <MainLayout>
      <GenericHero
        title="Categorías"
        description="Aquí encontrarás todas las categorías de recetas. 21 categorías para que puedas filtrar y encontrar más rápido tu nueva receta."
      />
      <div className="p-5">
        <div className="container mx-auto">
          {loading && (
            <motion.div
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 pb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <CategoriesCards length={21} />
            </motion.div>
          )}
          {!loading && categories && (
            <motion.ul
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {categories.map((category) => (
                <Card key={category._id} {...{ category }} />
              ))}
            </motion.ul>
          )}
        </div>
      </div>
      <div className="pb-20"></div>
    </MainLayout>
  );
};

export default Categories;

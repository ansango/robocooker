import {
  fetchCategories,
  selectCategories,
  selectCategoriesStatus,
} from "@/lib-client/store/features/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@/lib-client/store/hooks";
import { NextPage } from "next";
import { useEffect } from "react";

const Categories: NextPage = () => {
  const categories = useAppSelector(selectCategories);
  const loading = useAppSelector(selectCategoriesStatus) === "loading";
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!categories) dispatch(fetchCategories());
  }, [categories, dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && categories && (
        <ul>
          {categories.map((category) => (
            <li key={category._id}>{category.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Categories;

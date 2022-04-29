import {
  selectIngredients,
  selectRecipes,
} from "@/store/features/account/collection";
import { useAppSelector } from "@/store/hooks";
import { mergeIngredients } from "@/utils/mappers";
import { FC } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CollectionTabs from "./CollectionTabs";

const CollectionRecipes: FC = () => {
  const recipes = useAppSelector(selectRecipes);
  console.log(recipes);
  return <div>Recipes</div>;
};

const CollectionIngredients: FC = () => {
  const data = useAppSelector(selectIngredients) || [];
  const ingredients = mergeIngredients(data);
  console.log(ingredients);

  return (
    <div>
      {ingredients.map(({ measure, name, quantity }, index) => (
        <div key={index} className="form-control">
          <label className="label cursor-pointer">
            <div className="label-text space-x-2 flex justify-between w-full">
              <span className="font-medium">{name}</span>
              <span className="space-x-1">
                <span>{quantity}</span>
                <span>{measure === "portion" ? "un" : measure}.</span>
              </span>
            </div>
            <input type="checkbox" className="checkbox checkbox-accent ml-3" />
          </label>
        </div>
      ))}
    </div>
  );
};

const CollectionView: FC = () => {
  return (
    <Router>
      <div>
        <CollectionTabs />
        <div className="rounded-b-box shadow-sm">
          <div className="preview bg-base-100 rounded-b-box rounded-tl-box p-5 border-r">
            <Routes>
              <Route
                path={`/dashboard/collections/:id/ingredients`}
                element={<CollectionIngredients />}
              />
              <Route
                path={`/dashboard/collections/:id`}
                element={<CollectionRecipes />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default CollectionView;

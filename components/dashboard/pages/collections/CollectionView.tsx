import { FC } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CollectionTabs from "./CollectionTabs";
import TabIngredients from "./TabIngredients";
import TabRecipes from "./TabRecipes";

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
                element={<TabIngredients />}
              />
              <Route
                path={`/dashboard/collections/:id`}
                element={<TabRecipes />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default CollectionView;

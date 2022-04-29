import { Collection } from "@/models/user/bookmark";
import { FC } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CollectionTabs from "./CollectionTabs";

const CollectionView: FC<{ uuid: Collection["uuid"] }> = ({ uuid }) => {
  return (
    <Router>
      <div>
        <CollectionTabs uuid={uuid} />
        <div className="rounded-b-box shadow-sm">
          <div className="preview bg-base-100 rounded-b-box rounded-tl-box p-5 border-r">
            <Routes>
              <Route
                path={`/dashboard/collections/:uuid/ingredients`}
                element={<div>ingredients</div>}
              />
              <Route
                path={`/dashboard/collections/:uuid`}
                element={<div>Hello</div>}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default CollectionView;

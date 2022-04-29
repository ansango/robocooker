import { Collection } from "@/models/user/bookmark";
import { selectBookmark } from "@/store/features/account/bookmark";
import { useAppSelector } from "@/store/hooks";
import Breadcrumb from "components/common/Breadcrumb/Breadcrumb";
import BreadcrumbLink from "components/common/Breadcrumb/BreadcrumbLink";
import BreadcrumbNoLink from "components/common/Breadcrumb/BreadcrumbNoLink";
import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import ContainerDashboard from "components/dashboard/ContainerDashboard";
import DashboardLayout from "components/layout/DashboardLayout";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { FC } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

const Tabs: FC<{ uuid: Collection["uuid"] }> = ({ uuid }) => {
  return (
    <div className="tabs flex justify-end">
      <NavLink
        to={`/dashboard/collections/${uuid}`}
        className={({ isActive }) =>
          isActive ? "tab tab-lifted tab-active" : "tab tab-lifted"
        }
        end
      >
        Recetas
      </NavLink>

      <NavLink
        to={`/dashboard/collections/${uuid}/ingredients`}
        className={({ isActive }) =>
          isActive ? "tab tab-lifted tab-active" : "tab tab-lifted"
        }
      >
        Ingredientes
      </NavLink>
    </div>
  );
};

const CollectionView: FC<{ uuid: Collection["uuid"] }> = ({ uuid }) => {
  return (
    <Router>
      <div>
        <Tabs uuid={uuid} />
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

const Collection: NextPage = () => {
  const { query } = useRouter();
  const { uuid } = query;
  const collection = useAppSelector(selectBookmark)?.collections.filter(
    (collection) => collection.uuid === uuid
  )[0];
  if (!collection) return null;
  return (
    <DashboardLayout>
      <ContainerDashboard>
        <GenericDashboardHero title="Colecciones" />
        <Breadcrumb>
          <BreadcrumbLink
            href="/dashboard/collections"
            label="Colecciones"
            icon={{ icon: "BookmarkIcon", kind: "outline" }}
          />
          <BreadcrumbNoLink
            label={collection.name}
            icon={{ icon: "BookmarkAltIcon", kind: "outline" }}
          />
        </Breadcrumb>
        <CollectionView uuid={collection.uuid} />
      </ContainerDashboard>
    </DashboardLayout>
  );
};

export default Collection;

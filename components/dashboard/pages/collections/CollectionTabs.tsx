import { Collection } from "@/models/user/bookmark";
import { FC } from "react";
import { NavLink } from "react-router-dom";

const CollectionTabs: FC<{ uuid: Collection["uuid"] }> = ({ uuid }) => {
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

export default CollectionTabs;

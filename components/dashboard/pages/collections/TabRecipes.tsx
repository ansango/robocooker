import SubRoute from "components/layout/SubRoute";
import { FC } from "react";
import TableDesktop from "./TableDesktop";
import TableMobile from "./TableMobile";
const TabRecipes: FC = () => {
  return (
    <SubRoute>
      <TableMobile />
      <TableDesktop />
    </SubRoute>
  );
};

export default TabRecipes;

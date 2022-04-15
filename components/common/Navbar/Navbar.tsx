import { FC } from "react";
import NavMobile from "./NavMobile";
import SignIn from "./SignIn";
import AddRecipe from "./AddRecipe";
import NavDesktop from "./NavDesktop";
import User from "./User";
import Brand from "./Brand";

const Navbar: FC = () => {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-20">
      <div className="navbar-start">
        <NavMobile />
        <Brand />
        <NavDesktop />
      </div>
      <div className="navbar-end">
        <AddRecipe />
        <User />
        <SignIn />
      </div>
    </div>
  );
};

export default Navbar;

import Footer from "components/common/Footer/Footer";
import Navbar from "components/common/Navbar/Navbar";
import { useRouter } from "next/router";
import React, { FC } from "react";
import Motion from "./Motion";

const MainLayout: FC = ({ children }) => {
  const { route } = useRouter();
  return (
    <div className="">
      <Navbar />
      <Motion route={route}>
        <main className="h-full">{children}</main>
      </Motion>
      <Footer />
    </div>
  );
};

export default MainLayout;

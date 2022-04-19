import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import ContainerDashboard from "components/dashboard/Container/ContainerDashboard";
import { NextPage } from "next";
import React from "react";

const Favorites: NextPage = () => {
  return (
    <ContainerDashboard>
      <GenericDashboardHero title="Favoritos" />
    </ContainerDashboard>
  );
};

export default Favorites;

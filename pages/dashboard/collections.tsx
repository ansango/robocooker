import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import ContainerDashboard from "components/dashboard/Container/ContainerDashboard";
import { NextPage } from "next";
import React from "react";

const Collections: NextPage = () => {
  return (
    <ContainerDashboard>
      <GenericDashboardHero title="Colecciones" />
    </ContainerDashboard>
  );
};

export default Collections;

import GenericDashboardHero from 'components/common/Hero/GenericDashboardHero';
import ContainerDashboard from 'components/dashboard/Container/ContainerDashboard';
import { NextPage } from 'next';
import React from 'react'

const Messages: NextPage = () => {
  return (
    <ContainerDashboard>
      <GenericDashboardHero title="Mensajes" />
    </ContainerDashboard>
  );
};

export default Messages
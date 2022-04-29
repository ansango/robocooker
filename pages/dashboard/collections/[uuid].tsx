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
import React from "react";

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
            label={collection?.name}
            icon={{ icon: "BookmarkAltIcon", kind: "outline" }}
          />
        </Breadcrumb>
      </ContainerDashboard>
    </DashboardLayout>
  );
};

export default Collection;

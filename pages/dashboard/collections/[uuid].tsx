import { Collection } from "@/models/user/bookmark";
import { selectBookmark } from "@/store/features/account/bookmark";
import { useAppSelector } from "@/store/hooks";
import Breadcrumb from "components/common/Breadcrumb/Breadcrumb";
import BreadcrumbLink from "components/common/Breadcrumb/BreadcrumbLink";
import BreadcrumbNoLink from "components/common/Breadcrumb/BreadcrumbNoLink";
import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import ContainerDashboard from "components/dashboard/ContainerDashboard";
import CollectionView from "components/dashboard/pages/collections/CollectionView";
import DashboardLayout from "components/layout/DashboardLayout";
import { NextPage } from "next";
import { useRouter } from "next/router";

const CollectionPage: NextPage = () => {
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

export default CollectionPage;

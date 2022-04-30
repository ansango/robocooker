import { selectCollection } from "@/store/features/account/collection";
import { getCollection } from "@/store/features/account/collection/thunks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Breadcrumb from "components/common/Breadcrumb/Breadcrumb";
import BreadcrumbLink from "components/common/Breadcrumb/BreadcrumbLink";
import BreadcrumbNoLink from "components/common/Breadcrumb/BreadcrumbNoLink";
import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import ContainerDashboard from "components/dashboard/ContainerDashboard";
import CollectionView from "components/dashboard/pages/collections/CollectionView";
import DashboardLayout from "components/layout/DashboardLayout";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const CollectionPage: NextPage = () => {
  const { query } = useRouter();
  const { id } = query;
  const collection = useAppSelector(selectCollection);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!Array.isArray(id) && id) {
      dispatch(getCollection(id));
    }
  }, [id, dispatch]);
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
        <CollectionView />
      </ContainerDashboard>
    </DashboardLayout>
  );
};

export default CollectionPage;
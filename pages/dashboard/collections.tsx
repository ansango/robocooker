import { selectBookmarkRecipes } from "@/store/features/account/bookmark";
import { getBookmark } from "@/store/features/account/bookmark/thunks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Icon } from "components/common/Icons";
import ContainerDashboard from "components/dashboard/ContainerDashboard";
import DashboardLayout from "components/layout/DashboardLayout";
import { NextPage } from "next";
import React, { useEffect } from "react";

const Collections: NextPage = () => {
  const dispatch = useAppDispatch();
  const recipes = useAppSelector(selectBookmarkRecipes)
  useEffect(() => {
    dispatch(getBookmark());
  }, [dispatch]);
  return (
    <DashboardLayout>
      <ContainerDashboard>
        <div className="hero h-20">
          <div className="hero-content justify-start w-full p-0">
            <div className="sm:max-w-lg ">
              <h1 className="text-3xl font-bold dark:text-gray-300">
                Colecciones
              </h1>
            </div>
          </div>
        </div>
        <button className="btn btn-circle btn-primary">
          <Icon kind="outline" icon="PlusIcon" className="w-5 h-5" />
        </button>
      </ContainerDashboard>
    </DashboardLayout>
  );
};

export default Collections;

import { selectBookmarkRecipes } from "@/store/features/account/bookmark";
import { getBookmark } from "@/store/features/account/bookmark/thunks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import { Icon } from "components/common/Icons";
import ContainerDashboard from "components/dashboard/ContainerDashboard";
import DashboardLayout from "components/layout/DashboardLayout";
import { NextPage } from "next";
import Link from "next/link";
import React, { useEffect } from "react";

const Collections: NextPage = () => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector(selectBookmarkRecipes)?.length;
  useEffect(() => {
    dispatch(getBookmark());
  }, [dispatch]);
  return (
    <DashboardLayout>
      <ContainerDashboard>
        <GenericDashboardHero title="Colecciones" />
        <div className="flex w-full justify-end">
          <button className="btn btn-circle btn-primary">
            <Icon kind="outline" icon="PlusIcon" className="w-5 h-5" />
          </button>
        </div>
        <div className="indicator">
          <span className="indicator-item badge badge-secondary z-10">
            {counter}
          </span>
          <Link href="/dashboard/collections/recipes">
            <a className="stack">
              <div className="text-center shadow-md w-36 card bg-base-100">
                <div className="card-body text-sm font-medium">Todas las recetas</div>
              </div>
              <div className="text-center shadow w-36 card bg-base-100">
                <div className="card-body">B</div>
              </div>
              <div className="text-center shadow-sm w-36 card bg-base-200">
                <div className="card-body">C</div>
              </div>
            </a>
          </Link>
        </div>
      </ContainerDashboard>
    </DashboardLayout>
  );
};

export default Collections;

import {
  selectBookmarkRecipes,
  selectCollections,
} from "@/store/features/account/bookmark";
import { getBookmark } from "@/store/features/account/bookmark/thunks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import { Icon } from "components/common/Icons";
import ModalAction from "components/common/Modal/ModalAction";
import ModalOpen from "components/common/Modal/ModalOpen";
import ContainerDashboard from "components/dashboard/ContainerDashboard";
import CreateCollection from "components/dashboard/pages/collections/CreateCollection";
import DashboardLayout from "components/layout/DashboardLayout";
import { NextPage } from "next";
import Link from "next/link";
import React, { useEffect } from "react";

const Collections: NextPage = () => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector(selectBookmarkRecipes)?.length;
  const collections = useAppSelector(selectCollections);
  useEffect(() => {
    dispatch(getBookmark());
  }, [dispatch]);
  return (
    <DashboardLayout>
      <ContainerDashboard>
        <GenericDashboardHero title="Colecciones" />
        <div className="flex w-full justify-end">
          <ModalOpen
            id="create-collection"
            className="btn btn-circle btn-primary"
          >
            <Icon kind="outline" icon="PlusIcon" className="w-5 h-5" />
          </ModalOpen>
        </div>
        <div className="grid grid-cols-4 gap-5">
          <div className="indicator">
            <span className="indicator-item badge badge-secondary z-10">
              {counter}
            </span>
            <Link href="/dashboard/collections/recipes">
              <a className="stack">
                <div className="text-center shadow-md w-36 h-24 card bg-base-100">
                  <div className="card-body text-sm font-medium">
                    <p className="line-clamp-2">Todas las recetas</p>
                  </div>
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
          {collections && collections.length > 0 ? (
            <>
              {collections.map(({ name, recipes }, index) => (
                <div className="indicator" key={index}>
                  <span className="indicator-item badge badge-secondary z-10">
                    {recipes.length}
                  </span>
                  <Link href="/dashboard/collections/recipes">
                    <a className="stack">
                      <div className="text-center shadow-md w-36 h-24 card bg-base-100">
                        <div className="card-body text-sm font-medium">
                          <p className="line-clamp-2">
                            <span>{name}</span>
                          </p>
                        </div>
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
              ))}
            </>
          ) : null}
        </div>
        <CreateCollection id="create-collection" />
      </ContainerDashboard>
    </DashboardLayout>
  );
};

export default Collections;

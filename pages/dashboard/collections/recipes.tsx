import { Recipe } from "@/models/recipe/recipe";
import { selectBookmarkRecipes } from "@/store/features/account/bookmark";
import { useAppSelector } from "@/store/hooks";
import Breadcrumb from "components/common/Breadcrumb/Breadcrumb";
import BreadcrumbLink from "components/common/Breadcrumb/BreadcrumbLink";
import BreadcrumbNoLink from "components/common/Breadcrumb/BreadcrumbNoLink";
import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import { Icon } from "components/common/Icons";
import ContainerDashboard from "components/dashboard/ContainerDashboard";
import DashboardLayout from "components/layout/DashboardLayout";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Recipes: NextPage = () => {
  const recipes = useAppSelector(selectBookmarkRecipes);
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
            label="Todas las recetas"
            icon={{ icon: "BookmarkAltIcon", kind: "outline" }}
          />
        </Breadcrumb>
        <div className="flex w-full justify-end">
          <button className="btn btn-circle btn-primary btn-sm">
            <Icon kind="outline" icon="PlusIcon" className="w-4 h-4" />
          </button>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Rac</th>
                <th>Tiempo</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {recipes && recipes.length > 0 ? (
                <>
                  {recipes.map(
                    (
                      {
                        _id,
                        img,
                        name,
                        description,
                        duration,
                        servings,
                        blenders,
                        categories,
                      }: Recipe,
                      i
                    ) => (
                      <tr key={i}>
                        <th>
                          <label>
                            <input type="checkbox" className="checkbox" />
                          </label>
                        </th>
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <Image
                                  src={img}
                                  loading="lazy"
                                  alt="hero"
                                  layout="fill"
                                  className="object-center object-cover pointer-events-none"
                                />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">{name}</div>
                              <div className="text-sm opacity-50 capitalize">
                                {blenders.length > 0 && blenders[0]}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="max-w-xs">
                          <p className="truncate">{description}</p>
                          {categories.slice(0, 3).map((category, i) => (
                            <span
                              key={i}
                              className="badge badge-ghost badge-sm capitalize mr-1"
                            >
                              {category}
                            </span>
                          ))}
                        </td>
                        <td>
                          <span className="badge badge-ghost badge-sm capitalize">
                            <Icon
                              icon="UserGroupIcon"
                              kind="outline"
                              className="w-4 h-4 mr-1"
                            />
                            {servings}
                          </span>
                        </td>
                        <td>
                          <span className="badge badge-ghost badge-sm capitalize mr-1">
                            <Icon
                              icon="ClockIcon"
                              kind="outline"
                              className="w-4 h-4 mr-1"
                            />
                            {duration}
                          </span>
                        </td>
                        <th>
                          <Link href={`/recipe/${_id}`} passHref>
                            <button className="btn btn-ghost btn-sm btn-circle">
                              <Icon
                                icon="EyeIcon"
                                kind="outline"
                                className="w-5 h-5 text-primary"
                              />
                            </button>
                          </Link>
                        </th>
                      </tr>
                    )
                  )}
                </>
              ) : null}
            </tbody>
          </table>
        </div>
      </ContainerDashboard>
    </DashboardLayout>
  );
};

export default Recipes;
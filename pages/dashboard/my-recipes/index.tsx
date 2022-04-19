import {
  selectMyRecipes,
  selectMyRecipesStatus,
} from "@/store/features/recipes/myRecipes";
import { getMyRecipes } from "@/store/features/recipes/myRecipes/thunks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import { Icon } from "components/common/Icons";
import ContainerDashboard from "components/dashboard/Container/ContainerDashboard";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const MyRecipes: NextPage = () => {
  const myRecipes = useAppSelector(selectMyRecipes);
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectMyRecipesStatus) === "loading";
  useEffect(() => {
    if (!myRecipes) dispatch(getMyRecipes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { push } = useRouter();
  return (
    <ContainerDashboard>
      <GenericDashboardHero title="Mis recetas" />

      {!loading && myRecipes && (
        <ul className="grid gap-5 max-w-sm mx-auto sm:max-w-none sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {myRecipes.map(({ _id, img, name }) => (
            <li key={_id}>
              <div className="card w-full shadow-xl image-full before:opacity-50">
                <figure className="w-full h-44 lg:h-40 relative">
                  <Image
                    src={img}
                    loading="lazy"
                    alt="hero"
                    layout="fill"
                    className="object-center object-cover pointer-events-none"
                  />
                </figure>
                <div className="card-body p-5 justify-between">
                  <h2 className="card-title capitalize text-white">{name}</h2>

                  <div className="w-full flex justify-end space-x-2">
                    <Link href={`/dashboard/my-recipes/${_id}`} passHref>
                      <button className="btn btn-sm btn-info btn-circle">
                        <Icon
                          icon="PencilAltIcon"
                          className="w-4 h-4"
                          kind="outline"
                        />
                      </button>
                    </Link>
                    <button className="btn btn-sm btn-error btn-circle">
                      <Icon icon="XIcon" className="w-4 h-4" kind="outline" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </ContainerDashboard>
  );
};

export default MyRecipes;

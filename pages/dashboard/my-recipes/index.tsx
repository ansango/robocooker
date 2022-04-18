import {
  selectMyRecipes,
  selectMyRecipesStatus,
} from "@/store/features/recipes/myRecipes";
import { getMyRecipes } from "@/store/features/recipes/myRecipes/thunks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Icon } from "components/common/Icons";
import { NextPage } from "next";
import Image from "next/image";
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
    <div className="bg-base-200 px-5 py-20 space-y-10">
      <div className="container mx-auto">
        {!loading && myRecipes && (
          <div className="grid gap-5 max-w-sm mx-auto sm:max-w-none sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {myRecipes.map(
              ({
                _id,
                img,
                categories,
                name,
                description,
                duration,
                servings,
                steps,
              }) => (
                <div
                  key={_id}
                  className="bg-base-100 rounded-lg shadow-sm dark:shadow-lg"
                >
                  <div className="rounded-lg pt-5 px-5">
                    <figure className="w-full h-44 relative">
                      <Image
                        src={img}
                        loading="lazy"
                        alt="hero"
                        layout="fill"
                        className="object-center object-cover pointer-events-none rounded-lg"
                      />
                    </figure>
                  </div>
                  <div className="card-body space-y-1">
                    <h4 className="card-title">{name}</h4>
                    <p className="line-clamp-3">{description}</p>
                    <div className="card-actions justify-between items-center">
                      <div className="flex space-x-2 items-center">
                        {/* <Avatar size="xs" imgUrl={avatar} /> */}
                        {/* <span className="text-sm font-medium">@{username}</span> */}
                      </div>
                      <div className="flex items-center space-x-2">
                        <div
                          className="tooltip tooltip-left"
                          data-tip="Editar receta"
                        >
                          <button
                            className="btn btn-info btn-circle btn-sm"
                            onClick={() => push(`/dashboard/my-recipes/${_id}`)}
                          >
                            <Icon
                              icon="PencilAltIcon"
                              kind="outline"
                              className="w-4 h-4"
                            />
                          </button>
                        </div>
                        <div
                          className="tooltip tooltip-left"
                          data-tip="Eliminar receta"
                        >
                          <button className="btn btn-error btn-circle btn-sm">
                            <Icon
                              icon="XIcon"
                              kind="outline"
                              className="w-4 h-4"
                            />
                          </button>
                        </div>
                        {/* <div className="badge space-x-2">
                          <Icon
                            icon="ClockIcon"
                            kind="solid"
                            className="w-4 h-4"
                          />
                          <span>{duration}</span>
                        </div>
                        <div className="badge space-x-2">
                          <Icon
                            icon="UserGroupIcon"
                            kind="solid"
                            className="w-4 h-4"
                          />
                          <span>{servings}</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyRecipes;

import { selectAccountId } from "@/store/features/account/account";
import {
  selectRecipe,
  selectRecipeAccountId,
} from "@/store/features/recipes/recipe";
import { getRecipe } from "@/store/features/recipes/recipe/thunk";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Icon } from "components/common/Icons";
import MainLayout from "components/layout/MainLayout";

import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Recipe: NextPage = () => {
  const { query } = useRouter();
  const { id } = query;
  const dispatch = useAppDispatch();
  const recipeAccountId = useAppSelector(selectRecipeAccountId);
  const recipe = useAppSelector(selectRecipe);
  const accountId = useAppSelector(selectAccountId);
  const isOwner = accountId === recipeAccountId;
  useEffect(() => {
    if (!Array.isArray(id) && id) {
      dispatch(getRecipe(id));
    }
  }, [id, dispatch]);
  if (!recipe) return null;
  return (
    <MainLayout>
      <div className="px-5 py-10 space-y-10">
        <div className="container mx-auto space-y-5 max-w-5xl">
          {recipe.account.firstName}
          {isOwner && (
            <Link href={`/dashboard/my-recipes/${id}`}>
              <a className="btn btn-ghost btn-circle">
                <Icon
                  icon="DotsHorizontalIcon"
                  kind="outline"
                  className="w-5 h-5"
                />
              </a>
            </Link>
          )}
          <div className="card w-full bg-base-100 shadow-xl image-full before:opacity-40">
            <figure className="w-full h-96 relative">
              <Image
                src={recipe.img}
                loading="lazy"
                alt="hero"
                layout="fill"
                className="object-center object-cover pointer-events-none"
              />
            </figure>
            <div className="card-body justify-end p-5">
              <h1 className="card-title capitalize text-white text-3xl md:text-5xl">
                {recipe.name}
              </h1>
            </div>
          </div>
          <div className="space-x-2">
            {recipe.categories.map((category, index) => (
              <div key={index} className="badge capitalize badge-accent">
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Recipe;

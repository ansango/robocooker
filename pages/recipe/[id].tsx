import { selectRecipe } from "@/store/features/recipes/recipe";
import { getRecipe } from "@/store/features/recipes/recipe/thunk";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Icon } from "components/common/Icons";
import MainLayout from "components/layout/MainLayout";
import Author from "components/pages/recipe/Author";
import Hero from "components/pages/recipe/Hero";
import Options from "components/pages/recipe/Options";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Categories from "components/pages/recipe/Categories";
import { useEffect } from "react";
import Printer from "components/pages/recipe/Printer";
import Duration from "components/pages/recipe/Duration";
import Servings from "components/pages/recipe/Servings";
import Subtitle from "components/pages/recipe/Subtitle";
import Ingredients from "components/pages/recipe/Ingredients";
import Steps from "components/pages/recipe/Steps";

const Recipe: NextPage = () => {
  const { query } = useRouter();
  const { id } = query;
  const dispatch = useAppDispatch();
  const recipe = useAppSelector(selectRecipe);
  useEffect(() => {
    if (!Array.isArray(id) && id) {
      dispatch(getRecipe(id));
    }
  }, [id, dispatch]);
  if (!recipe || !id || Array.isArray(id)) return null;
  return (
    <MainLayout>
      <div className="px-5 py-10 space-y-10">
        <section className="container mx-auto space-y-3 max-w-5xl">
          <div className="flex justify-between items-center">
            <Author recipe={recipe} />
            <Options id={id} />
          </div>
          <Hero img={recipe.img} name={recipe.name} />

          <div className="grid gap-5 grid-cols-12">
            <article className="col-span-full md:col-span-6 flex flex-col justify-end space-y-5">
              <div className="space-y-1 pl-1 flex flex-col justify-center h-full">
                <div className="flex justify-between">
                  <div className="flex flex-row flex-wrap">
                    <Categories categories={recipe.categories} />
                  </div>
                  <Printer />
                </div>

                <div className="flex items-center space-x-1">
                  <Duration duration={recipe.duration} />
                  <Servings servings={recipe.servings} />
                </div>
              </div>
              <div className="bg-base-200 shadow-sm p-5 rounded-xl space-y-3">
                <div className="flex items-center space-x-2">
                  <Subtitle text="Descripción" />
                  <Icon
                    icon="BadgeCheckIcon"
                    kind="outline"
                    className="w-6 h-6 text-accent-focus"
                  />
                </div>
                <p>{recipe.description}</p>
              </div>
            </article>
            <article className="col-span-full md:col-span-6 flex flex-col justify-end">
              <div className="bg-base-200 shadow-sm p-5 rounded-lg space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Subtitle text="Ingredientes" />
                    <Icon
                      icon="ClipboardListIcon"
                      kind="outline"
                      className="w-6 h-6 text-accent-focus"
                    />
                  </div>
                </div>
                <Ingredients ingredients={recipe.ingredients} />
              </div>
            </article>
          </div>
          <div className="divider before:bg-gradient-to-r before:from-[#a7ecd0] before:via-[#5d97f5] before:to-[#b565ff] p-1 rounded-lg after:bg-gradient-to-r after:from-[#b565ff] after:via-[#5d97f5] after:to-[#a7ecd0]" />
          <article>
            <div className="p-5 rounded-lg space-y-3 bg-base-200">
              <div className="flex items-center space-x-2 px-3">
                <Subtitle text="Preparación" />
                <Icon
                  icon="BeakerIcon"
                  kind="outline"
                  className="w-6 h-6 text-accent-focus"
                />
              </div>
              <Steps steps={recipe.steps} />
            </div>
          </article>
        </section>
      </div>
    </MainLayout>
  );
};

export default Recipe;

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import MainLayout from "components/layout/MainLayout";
import { NextPage } from "next";
import { useRouter } from "next/router";

import Hero from "components/pages/category/Hero";
import { getCategory } from "@/mocks/categories";
import Container from "components/pages/category/Container";
import ContainerHeader from "components/pages/category/ContainerHeader";
import Subtitle from "components/pages/category/Subtitle";
import SubParagraph from "components/pages/category/SubParagraph";
import ContainerContent from "components/pages/category/ContainerContent";
import { useEffect } from "react";
import {
  getLastRecipesByCategory,
  getMostCommentedRecipesByCategory,
  getTrendingRecipesByCategory,
} from "@/store/features/category/thunks";
import {
  selectLastRecipes,
  selectCommentedRecipes,
  selectTrendingRecipes,
} from "@/store/features/category";
import CardRecipe from "components/common/Cards/Recipe/CardRecipe";

const Category: NextPage = () => {
  const { query } = useRouter();
  const { name } = query;
  const dispatch = useAppDispatch();
  const category = getCategory(name);
  const lastRecipes = useAppSelector(selectLastRecipes);
  const commentedRecipes = useAppSelector(selectCommentedRecipes);
  const trendingRecipes = useAppSelector(selectTrendingRecipes);
  useEffect(() => {
    if (name && !Array.isArray(name)) {
      dispatch(getLastRecipesByCategory(name));
      dispatch(getMostCommentedRecipesByCategory(name));
      dispatch(getTrendingRecipesByCategory(name));
    }
  }, [dispatch, name]);
  return (
    <MainLayout>
      {category && <Hero data={category} />}
      <div className="bg-gray-50 dark:bg-gray-800 py-5">
        <Container>
          <ContainerHeader>
            <Subtitle title="Las recetas más populares" />
            <SubParagraph content="Esta es la selección de recetas más populares de la categoría" />
          </ContainerHeader>
          <ContainerContent>
            <div className="lg:max-w-3xl lg:mx-auto xl:max-w-full">
              {trendingRecipes && (
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                  {trendingRecipes.map((recipe) => (
                    <CardRecipe key={recipe._id} {...recipe} />
                  ))}
                </div>
              )}
            </div>
          </ContainerContent>
        </Container>
        <Container>
          <ContainerHeader>
            <Subtitle title="Sobre las que todo el mundo habla" />
            <SubParagraph content="Las recetas más comentadas de la categoría" />
          </ContainerHeader>
          <ContainerContent>
            <div className="lg:max-w-3xl lg:mx-auto xl:max-w-full">
              {commentedRecipes && (
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                  {commentedRecipes.map((recipe) => (
                    <CardRecipe key={recipe._id} {...recipe} />
                  ))}
                </div>
              )}
            </div>
          </ContainerContent>
        </Container>

        <Container>
          <ContainerHeader>
            <Subtitle title="Últimas recetas" />
            <SubParagraph content="Para que estés a la ultima de las recetas de la categoría" />
          </ContainerHeader>
          <ContainerContent>
            <div className="lg:max-w-3xl lg:mx-auto xl:max-w-full">
              {lastRecipes && (
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                  {lastRecipes.map((recipe) => (
                    <CardRecipe key={recipe._id} {...recipe} />
                  ))}
                </div>
              )}
            </div>
          </ContainerContent>
        </Container>
      </div>
    </MainLayout>
  );
};

export default Category;

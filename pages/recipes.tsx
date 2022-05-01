import { Form, Input } from "components/common/Forms";
import Cards from "components/skeletons/Cards";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RecipeDTO } from "lib/models/recipe/recipe";
import MainLayout from "components/layout/MainLayout";
import GenericHero from "components/common/Hero/GenericHero";
import Container from "components/pages/recipes/Container";
import ContainerContent from "components/pages/recipes/ContainerContent";
import { Icon } from "components/common/Icons";
import { onBasicSearchService } from "@/services/search";
import ContainerHeader from "components/pages/recipes/ContainerHeader";
import Subtitle from "components/pages/recipes/Subtitle";
import CardRecipe from "components/common/Cards/Recipe/CardRecipe";
import FilterRecipes from "components/pages/recipes/FilterRecipes";
import ModalOpen from "components/common/Modal/ModalOpen";
import { onGetLastRecipesService } from "@/services/recipes";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  selectSearchDefaultRecipes,
  selectSearchQuery,
  selectSearchResults,
  selectSearchStatus,
} from "@/store/features/search";
import { basicSearch, getLastRecipes } from "@/store/features/search/thunks";

const Recipes: NextPage = () => {
  const query = useAppSelector(selectSearchQuery);
  const results = useAppSelector(selectSearchResults);
  const defaultResults = useAppSelector(selectSearchDefaultRecipes);
  const isLoading = useAppSelector(selectSearchStatus) === "loading";
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (query) {
      dispatch(basicSearch(query));
    }
    if (!query && !defaultResults) {
      dispatch(getLastRecipes(12));
    }
  }, [dispatch, query, defaultResults]);

  return (
    <MainLayout>
      <GenericHero
        title="Yummy!"
        description="Aquí encontrarás todas las recetas que buscas. 21 categorías y 6 robots para que puedas filtrar y encontrar más rápido tu nueva receta."
      />
      <div className="px-5 pb-10">
        <Form onSubmit={({ query }) => dispatch(basicSearch(query))}>
          <div className="max-w-lg sm:mx-auto flex items-center space-x-5">
            <Input
              name="query"
              type="search"
              placeholder="Introduce una receta"
              icon={{
                name: "SearchIcon",
                kind: "outline",
              }}
            />

            <button className="btn btn-primary normal-case" type="submit">
              Buscar
            </button>
            <ModalOpen
              className="btn btn-outline btn-circle btn-primary normal-case dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-400 dark:hover:text-base-300"
              id="filter-recipes"
            >
              <Icon icon="AdjustmentsIcon" kind="outline" className="w-5 h-5" />
            </ModalOpen>
          </div>
        </Form>
      </div>
      <div className="bg-gray-50 dark:bg-gray-800">
        <Container>
          <ContainerHeader>
            {results && results.length > 0 && (
              <Subtitle title="Hemos encontrado estas recetas" />
            )}
            {results && results.length === 0 && (
              <Subtitle title="No hay resultados" />
            )}
          </ContainerHeader>

          <ContainerContent>
            {isLoading && (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                <Cards length={9} />
              </div>
            )}
            {results && results.length > 0 && (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                {results.map((recipe) => (
                  <CardRecipe key={recipe._id} {...recipe} />
                ))}
              </div>
            )}
            {!results && defaultResults && (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                {defaultResults.map((recipe) => (
                  <CardRecipe key={recipe._id} {...recipe} />
                ))}
              </div>
            )}
          </ContainerContent>
        </Container>
      </div>
      <FilterRecipes id="filter-recipes" />
    </MainLayout>
  );
};

export default Recipes;

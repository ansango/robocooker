import { Form, Input } from "components/common/Forms";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import MainLayout from "components/layout/MainLayout";
import GenericHero from "components/common/Hero/GenericHero";
import Container from "components/pages/recipes/Container";
import ContainerContent from "components/pages/recipes/ContainerContent";
import { Icon } from "components/common/Icons";
import ContainerHeader from "components/pages/recipes/ContainerHeader";
import Subtitle from "components/pages/recipes/Subtitle";
import CardRecipe from "components/common/Cards/Recipe/CardRecipe";
import FilterRecipes from "components/pages/recipes/FilterRecipes";
import ModalOpen from "components/common/Modal/ModalOpen";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  selectFilters,
  selectSearchResults,
  setQuery,
} from "@/store/features/search";
import { search } from "@/store/features/search/thunks";

const Recipes: NextPage = () => {
  const { query } = useRouter();
  const { params } = query;
  const filters = useAppSelector(selectFilters);
  const dispatch = useAppDispatch();
  const results = useAppSelector(selectSearchResults);

  useEffect(() => {
    if (params && !Array.isArray(params)) {
      dispatch(search({ query: params, filters }));
      dispatch(setQuery(params));
    }
    if (!params) {
      dispatch(search({ query: "", filters }));
      dispatch(setQuery(""));
    }
  }, [dispatch, params, filters]);
  const onSubmit = useCallback(
    ({ params }: { params: string }) => {
      dispatch(search({ query: params, filters }));
    },
    [dispatch, filters]
  );
  return (
    <MainLayout>
      <GenericHero
        title="Yummy!"
        description="Aquí encontrarás todas las recetas que buscas. 21 categorías y 6 robots para que puedas filtrar y encontrar más rápido tu nueva receta."
      />
      <div className="px-5 pb-10">
        <Form onSubmit={onSubmit}>
          <div className="max-w-lg sm:mx-auto flex items-center space-x-5">
            <Input
              name="params"
              type="search"
              placeholder="Introduce una receta"
              icon={{
                name: "SearchIcon",
                kind: "outline",
              }}
              {...(params && { defaultValue: params })}
            />

            <button className="btn btn-primary normal-case" type="submit">
              Buscar
            </button>
            <div className="indicator">
              {filters.length > 0 && (
                <span className="indicator-item badge badge-primary">
                  {filters.length}
                </span>
              )}
              <ModalOpen
                className="btn btn-outline btn-circle btn-primary normal-case dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-400 dark:hover:text-base-300"
                id="filter-recipes"
              >
                <Icon
                  icon="AdjustmentsIcon"
                  kind="outline"
                  className="w-5 h-5"
                />
              </ModalOpen>
            </div>
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
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              {results &&
                results.map((recipe) => (
                  <CardRecipe key={recipe._id} {...recipe} />
                ))}
            </div>
          </ContainerContent>
        </Container>
      </div>
      <FilterRecipes id="filter-recipes" />
    </MainLayout>
  );
};

export default Recipes;

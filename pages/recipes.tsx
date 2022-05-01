import { Form, Input } from "components/common/Forms";
import Cards from "components/skeletons/Cards";
import { getRecipesBySearchParams } from "lib/mocks/recipes";
import { motion } from "framer-motion";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Recipe, RecipeDTO } from "lib/models/recipe/recipe";
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

const Recipes: NextPage = () => {
  const { query, replace } = useRouter();
  const { search } = query;
  const [recipes, setRecipes] = useState<RecipeDTO[] | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (search && !Array.isArray(search)) {
      setLoading(true);
      onBasicSearchService(search)
        .then((results) => {
          setRecipes(results);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [search]);

  return (
    <MainLayout>
      <GenericHero
        title="Yummy!"
        description="Aquí encontrarás todas las recetas que buscas. 21 categorías y 6 robots para que puedas filtrar y encontrar más rápido tu nueva receta."
      />
      <div className="px-5 pb-10">
        <Form onSubmit={({ search }) => replace(`/recipes?search=${search}`)}>
          <div className="max-w-lg sm:mx-auto flex items-center space-x-5">
            <Input
              name="search"
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
              className="btn btn-outline btn-circle btn-primary normal-case"
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
            {recipes && recipes.length > 0 && <Subtitle title="Resultados" />}
            {recipes && recipes.length === 0 && <Subtitle title="No hay resultados" />}
          </ContainerHeader>

          <ContainerContent>
            {loading ? (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                <Cards length={9} />
              </div>
            ) : (
              recipes &&
              recipes.length > 0 && (
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                  {recipes.map((recipe) => (
                    <CardRecipe key={recipe._id} {...recipe} />
                  ))}
                </div>
              )
            )}
          </ContainerContent>
        </Container>
      </div>
      <FilterRecipes id="filter-recipes" />
    </MainLayout>
  );
};

export default Recipes;

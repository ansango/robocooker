import { selectRecipe } from "@/store/features/recipes/recipe";
import { getRecipe } from "@/store/features/recipes/recipe/thunk";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import MainLayout from "components/layout/MainLayout";
import Hero from "components/pages/recipe/Hero";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Divider from "components/pages/recipe/Divider";
import Container from "components/pages/recipe/Container";
import ContainerSection from "components/pages/recipe/ContainerSection";
import SocialSection from "components/pages/recipe/SocialSection";
import CommentsSection from "components/pages/recipe/CommentsSection";
import CommentsUserSection from "components/pages/recipe/CommentsUserSection";
import StepsBlock from "components/pages/recipe/StepsBlock";
import IngredientsBlock from "components/pages/recipe/IngredientsBlock";
import CategoriesDescriptionBlock from "components/pages/recipe/CategoriesDescriptionBlock";
import AuthorOptionsBlock from "components/pages/recipe/AuthorOptionsBlock";

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
      <Container>
        <ContainerSection>
          <AuthorOptionsBlock
            account={recipe.account}
            created={recipe.created}
            id={id}
          />
          <Hero img={recipe.img} name={recipe.name} />
          <div className="grid gap-5 grid-cols-12 pt-2">
            <CategoriesDescriptionBlock {...recipe} />
            <IngredientsBlock ingredients={recipe.ingredients} />
          </div>
          <Divider />
          <StepsBlock steps={recipe.steps} />
        </ContainerSection>
        <SocialSection />
        <CommentsSection />
        <CommentsUserSection />
      </Container>
    </MainLayout>
  );
};

export default Recipe;

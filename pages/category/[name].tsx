import { useAppDispatch } from "@/store/hooks";
import MainLayout from "components/layout/MainLayout";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Container from "components/pages/recipe/Container";
import ContainerSection from "components/pages/recipe/ContainerSection";

import Hero from "components/pages/category/Hero";
import { categories } from "@/mocks/categories";

const Category: NextPage = () => {
  const { query } = useRouter();
  const { name } = query;
  const dispatch = useAppDispatch();
  const category = categories.find((category) => category.name === name);
  return (
    <MainLayout>
      {category && <Hero category={category} />}
      <Container>
        <ContainerSection>
          <div>{category?.name}</div>
        </ContainerSection>
      </Container>
    </MainLayout>
  );
};

export default Category;

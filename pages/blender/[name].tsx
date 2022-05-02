import { useAppDispatch } from "@/store/hooks";
import MainLayout from "components/layout/MainLayout";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Hero from "components/pages/category/Hero";

import Container from "components/pages/category/Container";
import ContainerHeader from "components/pages/category/ContainerHeader";
import Subtitle from "components/pages/category/Subtitle";
import SubParagraph from "components/pages/category/SubParagraph";
import ContainerContent from "components/pages/category/ContainerContent";
import { blenders, getBlender } from "@/mocks/blenders";

const Category: NextPage = () => {
  const { query } = useRouter();
  const { name } = query;
  const dispatch = useAppDispatch();
  const blender = getBlender(name);
  return (
    <MainLayout>
      {blender && <Hero data={blender} />}
      <Container>
        <ContainerHeader>
          <Subtitle title="Las recetas más populares" />
          <SubParagraph content="Esta es la selección de recetas más populares de la categoría" />
        </ContainerHeader>
        <ContainerContent>
          <div></div>
        </ContainerContent>
      </Container>
      <Container>
        <ContainerHeader>
          <Subtitle title="Sobre las que todo el mundo habla" />
          <SubParagraph content="Las recetas más comentadas de la categoría" />
        </ContainerHeader>
        <ContainerContent>
          <div></div>
        </ContainerContent>
      </Container>
      <Container>
        <ContainerHeader>
          <Subtitle title="Últimas recetas" />
          <SubParagraph content="Para que estés a la ultima de las recetas de la categoría" />
        </ContainerHeader>
        <ContainerContent>
          <div></div>
        </ContainerContent>
      </Container>
    </MainLayout>
  );
};

export default Category;

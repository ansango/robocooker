import {
  Hero,
  Container,
  ContainerContent,
  ContainerHeader,
  ContainerLink,
  ContentCategories,
  ContentBlenders,
  LinkE,
  SubParagraph,
  Subtitle,
} from "components/pages/home";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <Container>
        <ContainerHeader>
          <Subtitle title="¿Que procesador tienes?" />
          <SubParagraph content="Si buscas recetas orientadas a un procesador de alimentos, este es tu sitio. Actualmente existen los siguientes, pero iremos engordando la lista." />
        </ContainerHeader>
        <ContainerContent>
          <ContentBlenders />
        </ContainerContent>
      </Container>
      <Container>
        <ContainerHeader>
          <Subtitle title="Elige categoría" />
          <SubParagraph content="En busqueda de la receta perfecta, elige de entre las 21 categorias y que te cojan con las manos en la masa" />
        </ContainerHeader>
        <ContainerContent>
          <ContentCategories />
          <ContainerLink>
            <LinkE href="/categories" label="Ver todas las categorías" />
          </ContainerLink>
        </ContainerContent>
      </Container>
    </div>
  );
};

export default Home;

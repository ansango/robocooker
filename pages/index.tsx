import type { NextPage } from "next";

import Hero from "components/pages/home/Hero";
import GenericHero from "components/common/Hero/GenericHero";
import { useAppSelector } from "@/lib-client/store/hooks";
import {
  selectCategories,
  selectCategoriesStatus,
} from "@/lib-client/store/features/categories/categoriesSlice";
import CategoriesCards from "components/skeletons/Cards/CategoriesCards";
import { motion } from "framer-motion";
import Card from "components/pages/categories/Card";
import Link from "next/link";
import Subtitle from "components/pages/home/Subtitle";
import SubParagraph from "components/pages/home/SubParagraph";
import Container from "components/pages/home/Container";
import ContainerHeader from "components/pages/home/ContainerHeader";
import ContainerContent from "components/pages/home/ContainerContent";
import ContainerLink from "components/pages/home/ContainerLink";
import LinkE from "components/pages/home/LinkE";
import ContentCategories from "components/pages/home/ContentCategories";
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
          <ContentCategories />
          <ContainerLink>
            <LinkE href="/categories" label="Ver todas las categorías" />
          </ContainerLink>
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

import { selectRobousers } from "@/store/features/robousers";
import { getUsersTrending } from "@/store/features/robousers/thunks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Avatar } from "components/common/Avatar";
import GenericHero from "components/common/Hero/GenericHero";
import MainLayout from "components/layout/MainLayout";
import { ContainerHeader, SubParagraph, Subtitle } from "components/pages/home";
import ActionFollow from "components/pages/profile/ActionFollow";
import Container from "components/pages/trending/Container";
import ContainerContent from "components/pages/trending/ContainerContent";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";

const Robousers: NextPage = () => {
  const dispatch = useAppDispatch();
  const robousers = useAppSelector(selectRobousers);
  useEffect(() => {
    dispatch(getUsersTrending());
  }, [dispatch]);
  return (
    <MainLayout>
      <GenericHero
        title="Robousers"
        description="Robousers es una comunidad de usuarios que aman la cocina y la comida. ¡Sé parte de esta comunidad!"
      />
      <Container>
        <ContainerHeader>
          <Subtitle title="Los que mas se manchan" />
          <SubParagraph content="¿Quieres ser parte de esta comunidad? ¡Sé parte de esta comunidad!" />
        </ContainerHeader>
        <ContainerContent>
          {robousers &&
            robousers.slice(0, 3).map((robouser, index) => (
              <div key={index}>
                <Avatar
                  size="lg"
                  username={robouser.username}
                  imgUrl={robouser.avatar}
                />
                <h4 className="font-semibold text-xl">@{robouser.username}</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {robouser.about}
                </p>
                <Link passHref href={`/profile/${robouser.username}`}>
                  <button className="btn btn-outline btn-primary normal-case btn-sm">
                    Perfil
                  </button>
                </Link>
              </div>
            ))}
        </ContainerContent>
      </Container>
    </MainLayout>
  );
};

export default Robousers;

import { selectRobousers } from "@/store/features/robousers";
import { getUsersTrending } from "@/store/features/robousers/thunks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Avatar } from "components/common/Avatar";
import GenericHero from "components/common/Hero/GenericHero";
import MainLayout from "components/layout/MainLayout";
import { NextPage } from "next";
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
      {robousers &&
        robousers.slice(0, 3).map((robouser, index) => (
          <div key={index}>
            <Avatar size="lg" username={robouser.username} />
          </div>
        ))}
    </MainLayout>
  );
};

export default Robousers;

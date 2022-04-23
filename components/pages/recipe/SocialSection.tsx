import { selectUser } from "@/store/features/user";
import { useAppSelector } from "@/store/hooks";
import { FC } from "react";
import ContainerSection from "./ContainerSection";
import Likes from "./Likes";
import SocialActions from "./SocialActions";

type Props = {};

const SocialSection: FC = () => {
  const user = useAppSelector(selectUser);
  return (
    <>
      {user && (
        <ContainerSection>
          <div className="flex justify-between items-center">
            <Likes />
            <SocialActions />
          </div>
        </ContainerSection>
      )}
    </>
  );
};

export default SocialSection;

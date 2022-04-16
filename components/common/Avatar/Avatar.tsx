import { FC } from "react";

import { useAppSelector } from "lib/store/hooks";
import FullAvatar from "./FullAvatar";
import BlankAvatar from "./BlankAvatar";
import { selectUser } from "@/store/features/user";

type AvatarProps = {
  size: "xs" | "sm" | "md" | "lg";
  imgUrl?: string | null;
};

const Avatar: FC<AvatarProps> = ({ size, imgUrl }) => {
  const user = useAppSelector(selectUser);
  const avatar = imgUrl;
  const username = user?.username;

  return avatar ? (
    <FullAvatar size={size} imgUrl={avatar} />
  ) : username ? (
    <BlankAvatar size={size} username={username} />
  ) : null;
};

export default Avatar;

/**
 * ?Avatar Component
 */

import { FC } from "react";

import Image from "next/image";

import { useAppSelector } from "@/lib-client/store/hooks";
import { selectAccount } from "@/lib-client/store/features/account/accountSlice";
import FullAvatar from "./FullAvatar";
import BlankAvatar from "./BlankAvatar";
import { selectUser } from "@/lib-client/store/features/user/userSlice";

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

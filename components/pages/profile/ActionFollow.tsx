import {
  selectProfileFollowers,
  selectProfileUser,
} from "@/store/features/profile";
import { selectUserUsername } from "@/store/features/user";
import { useAppSelector } from "@/store/hooks";

import { FC } from "react";

import Follow from "./Follow";
import UnFollow from "./UnFollow";

const ActionFollow: FC = () => {
  const currentProfile = useAppSelector(selectProfileUser);
  const currentUser = useAppSelector(selectUserUsername);
  const isFollowing =
    useAppSelector(selectProfileFollowers).filter(
      (follower) => follower.username === currentUser
    ).length > 0;
  const isSameUser =
    currentProfile && currentUser && currentProfile === currentUser;
  if (isSameUser) return null;

  return (
    <>
      {!isFollowing && <Follow />}
      {isFollowing && <UnFollow />}
    </>
  );
};

export default ActionFollow;

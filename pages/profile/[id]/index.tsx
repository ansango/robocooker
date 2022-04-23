import { selectProfile } from "@/store/features/profile";
import { getProfile } from "@/store/features/profile/thunk";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Avatar } from "components/common/Avatar";
import MainLayout from "components/layout/MainLayout";
import Container from "components/pages/profile/Container";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Profile: NextPage = () => {
  const { query } = useRouter();
  const { id } = query;
  const dispatch = useAppDispatch();
  const profile = useAppSelector(selectProfile);
  useEffect(() => {
    if (!Array.isArray(id) && id) {
      dispatch(getProfile(id));
    }
  }, [id, dispatch]);
  if (!profile || !id || Array.isArray(id)) return null;
  return (
    <MainLayout>
      <Container>
        <div>
          <Avatar size="lg" imgUrl={profile.avatar} />
        </div>
        {profile.username}
        {profile.firstName}
        {profile.lastName}
        {profile.followers.length}
        {profile.following.length}
        {profile.recipes.length}
        {profile.about}
      </Container>
    </MainLayout>
  );
};
export default Profile;

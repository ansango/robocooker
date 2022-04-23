import { selectProfile } from "@/store/features/profile";
import { getProfile } from "@/store/features/profile/thunk";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import MainLayout from "components/layout/MainLayout";
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
      <div>
        <h1>{profile.firstName}</h1>
        <p>{profile.lastName}</p>
      </div>
    </MainLayout>
  );
};
export default Profile;

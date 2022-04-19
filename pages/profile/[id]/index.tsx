import MainLayout from "components/layout/MainLayout";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Profile: NextPage = () => {
  const { query } = useRouter();
  const { id } = query;
  return <MainLayout>index</MainLayout>;
};

export default Profile;

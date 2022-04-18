import { NextPage } from "next";
import { useRouter } from "next/router";

const Profile: NextPage = () => {
  const { query } = useRouter();
  const { id } = query;
  return <div>index</div>;
};

export default Profile;

import { selectProfile } from "@/store/features/profile";
import { getProfile } from "@/store/features/profile/thunk";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Avatar } from "components/common/Avatar";
import { Icon, IconSimple } from "components/common/Icons";
import MainLayout from "components/layout/MainLayout";
import Container from "components/pages/profile/Container";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Profile: NextPage = () => {
  const { query } = useRouter();
  const { username } = query;
  const dispatch = useAppDispatch();
  const profile = useAppSelector(selectProfile);
  useEffect(() => {
    if (!Array.isArray(username) && username) {
      dispatch(getProfile(username));
    }
  }, [username, dispatch]);
  if (!profile || !username || Array.isArray(username)) return null;
  return (
    <MainLayout>
      <Container>
        <div className="mx-auto max-w-2xl p-0 sm:p-5">
          <div className="bg-gradient-to-r p-0.5 from-[#a7ecd0] to-[#b565ff] rounded-2xl">
            <div className="bg-base-100 p-5 rounded-2xl shadow-sm sm:p-10">
              <div className="flex flex-col sm:flex-row sm:space-x-5">
                <div className="flex items-center space-x-5 sm:justify-center sm:items-start md:space-x-0 ">
                  <div className="flex items-center md:hidden sm:mt-5">
                    <Avatar size="md" imgUrl={profile.avatar} />
                  </div>
                  <div className="hidden md:flex md:items-center mt-5">
                    <Avatar size="lg" imgUrl={profile.avatar} />
                  </div>

                  <div className="sm:hidden">
                    <div className="">
                      <h1 className="font-semibold text-xl pb-2">
                        @{profile.username}
                      </h1>
                    </div>
                    <div className="space-x-2">
                      <button className="btn btn-primary normal-case btn-sm space-x-1">
                        <Icon
                          icon="UserAddIcon"
                          kind="solid"
                          className="w-4 h-4"
                        />
                        <span>Seguir</span>
                      </button>
                      <button className="btn btn-primary normal-case btn-sm space-x-1">
                        <Icon
                          icon="PaperAirplaneIcon"
                          kind="solid"
                          className="w-4 h-4"
                        />
                        <span>Mensaje</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="hidden sm:block space-y-3">
                    <div className="">
                      <h1 className="font-semibold text-xl sm:text-2xl">
                        @{profile.username}
                      </h1>
                    </div>
                    <div className="space-x-2">
                      <button className="btn btn-primary normal-case btn-sm space-x-1">
                        <Icon
                          icon="UserAddIcon"
                          kind="solid"
                          className="w-4 h-4"
                        />
                        <span>Seguir</span>
                      </button>
                      <button className="btn btn-primary normal-case btn-sm space-x-1">
                        <Icon
                          icon="PaperAirplaneIcon"
                          kind="solid"
                          className="w-4 h-4"
                        />
                        <span>Mensaje</span>
                      </button>
                    </div>
                  </div>
                  <p className="space-x-5">
                    <span>
                      <span className="font-medium mr-1">
                        {profile.recipes.length}
                      </span>
                      {profile.recipes.length > 1 ? "recetas" : "receta"}
                    </span>
                    <span>
                      <span className="font-medium mr-1">
                        {profile.followers.length}
                      </span>
                      seguidores
                    </span>
                    <span>
                      <span className="font-medium mr-1">
                        {profile.following.length}
                      </span>
                      seguidos
                    </span>
                  </p>
                  <p className="font-medium text-lg">
                    {profile.firstName} {profile.lastName}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {profile.about}
                  </p>
                  <p className="flex space-x-5 items-center">
                    <IconSimple icon="Facebook" className="w-5 h-5" />
                    <IconSimple icon="Instagram" className="w-5 h-5" />
                    <IconSimple icon="Twitter" className="w-5 h-5" />
                    <IconSimple icon="Youtube" className="w-5 h-5" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </MainLayout>
  );
};
export default Profile;

import { selectUser } from "@/lib-client/store/features/user/userSlice";
import { useAppSelector } from "@/lib-client/store/hooks";
import { routeActive } from "@/lib-utils/router";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Icon from "../Icons/Icon";

const AddRecipe = () => {
  const { pathname } = useRouter();
  const user = useAppSelector(selectUser);
  return (
    <>
      {user && (
        <Link href="/recipe/add" passHref>
          <div className="tooltip tooltip-left" data-tip="Crear receta">
            <button className="btn btn-ghost btn-circle">
              <Icon
                icon="PlusCircleIcon"
                kind="outline"
                className={
                  routeActive(pathname, "/recipe/add")
                    ? "w-6 h-6 text-primary"
                    : "w-6 h-6 text-gray-600"
                }
              />
            </button>
          </div>
        </Link>
      )}
    </>
  );
};

export default AddRecipe;

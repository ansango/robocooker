import { Recipe } from "@/models/recipe/recipe";
import { selectRecipes } from "@/store/features/account/collection";
import { useAppSelector } from "@/store/hooks";
import { Icon } from "components/common/Icons";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type Props = {
  recipes: Recipe[];
};

const TableMobile: FC<Props> = ({ recipes }) => {
  return (
    <div className="w-full sm:hidden">
      {recipes.length > 0 ? (
        <div className="space-y-3">
          {recipes.map(({ _id, img, name, blenders }) => (
            <div key={_id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Link href={`/recipe/${_id}`} passHref>
                  <button className="btn btn-ghost btn-sm btn-circle">
                    <Icon
                      icon="EyeIcon"
                      kind="outline"
                      className="w-5 h-5 text-primary"
                    />
                  </button>
                </Link>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <Image
                      src={img}
                      loading="lazy"
                      alt="hero"
                      layout="fill"
                      className="object-center object-cover pointer-events-none"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{name}</div>
                  <div className="text-sm opacity-50 capitalize">
                    {blenders.length > 0 && blenders[0]}
                  </div>
                </div>
              </div>
              <button className="btn btn-error btn-sm btn-circle">
                <Icon icon="XIcon" kind="outline" className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default TableMobile;

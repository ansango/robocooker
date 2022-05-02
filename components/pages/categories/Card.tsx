import { Blender } from "@/models/blender";
import { Category } from "lib/models/recipe/category";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type Props = {
  data: Category | Blender;
  kind: "category" | "blender";
};
const Card: FC<Props> = ({ data: { _id, img, name }, kind }) => {
  const link = `/${kind}/${name.split(" ").join("-")}`;
  return (
    <li key={_id} className="cursor-pointer">
      <Link href={link} passHref>
        <div className="card w-full bg-base-100 shadow-xl image-full before:opacity-40 transform hover:scale-[1.01] hover:shadow-2xl transition duration-250 ease-out hover:ease-in">
          <figure className="w-full h-44 lg:h-52 relative">
            <Image
              src={img}
              loading="lazy"
              alt="hero"
              layout="fill"
              className="object-center object-cover pointer-events-none"
            />
          </figure>
          <div className="card-body justify-end p-5">
            <h2 className="card-title capitalize text-white">{name}</h2>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default Card;

import { Category } from "models/recipe/category";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type Props = {
  category: Category;
};
const Card: FC<Props> = ({ category: { _id, img, name } }) => {
  return (
    <li key={_id} className="cursor-pointer">
      <Link href="/" passHref>
        <div className="card w-full bg-base-100 shadow-xl image-full before:opacity-40">
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

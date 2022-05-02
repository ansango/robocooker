import { Category } from "@/models/recipe/category";
import Image from "next/image";
import { FC } from "react";

const Hero: FC<{ category: Category }> = ({ category }) => {
  return (
    <div className="relative h-72 w-full">
      <Image
        src={category.img}
        alt="hero"
        priority
        layout="fill"
        className="object-center object-cover pointer-events-none"
      />
      <div className="w-full h-full hero">
        <div className="absolute w-full h-full bg-gray-600 opacity-[0.38] dark:bg-gray-800 dark:opacity-60 z-10"></div>
        <div className="absolute z-20 flex flex-col items-start justify-end h-full w-full lg:w-auto lg:items-center lg:justify-center px-5">
          <h1 className="text-5xl font-extrabold sm:text-5xl xl:text-6xl text-white capitalize">
            {category.name}
          </h1>
          <p className="text-lg md:text-xl text-white py-6">
            {category.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
import { FC, useCallback } from "react";
import Image from "next/image";

import { Form, Input } from "components/common/Forms";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/store/hooks";
import { setQuery } from "@/store/features/search";
import { basicSearch } from "@/store/features/search/thunks";

const Hero: FC = () => {
  const { replace } = useRouter();
  const dispatch = useAppDispatch();
  const onSubmit = useCallback(
    ({ query }: { query: string }) => {
      dispatch(setQuery(query));
      replace(`/recipes`);
    },
    [replace, dispatch]
  );
  return (
    <div className="relative h-[30rem] md:h-[35rem] mx-auto">
      <Image
        src="https://res.cloudinary.com/db8nr4kcg/image/upload/v1650115839/Pages/Home/Hero_q4d3u5.avif"
        alt="hero"
        priority
        layout="fill"
        className="object-center object-cover pointer-events-none"
      />
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="text-center w-full p-5 space-y-5">
          <h1 className="text-5xl font-extrabold sm:text-5xl xl:text-6xl text-white">
            ¿Que quieres comer hoy?
          </h1>
          <p className="text-lg md:text-xl text-white">
            Miles de recetas para tu robot de cocina
          </p>
          <div>
            <Form onSubmit={onSubmit}>
              <div className="max-w-lg sm:mx-auto flex items-center space-x-5">
                <Input
                  name="query"
                  type="search"
                  placeholder="Introduce una receta"
                  icon={{
                    name: "SearchIcon",
                    kind: "outline",
                  }}
                />

                <button className="btn btn-primary normal-case" type="submit">
                  Buscar
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

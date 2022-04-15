import Button from "components/common/Button/Button/Button";
import GreyContainer from "components/common/Container/GreyContainer";
import { Form, Input } from "components/common/Forms";
import Cards from "components/skeletons/Cards";
import { getRecipesBySearchParams } from "mocks/recipes";
import { motion } from "framer-motion";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Recipe } from "models/recipe/recipe";
import Image from "next/image";

const Recipes: NextPage = () => {
  const { query, replace } = useRouter();
  const { search } = query;
  const [recipes, setRecipes] = useState<Recipe[] | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (search) {
      setLoading(true);
      getRecipesBySearchParams(search, 2000)
        .then((recipes) => {
          setRecipes(recipes);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [search]);

  return (
    <div>
      <div className="text-center w-full p-5 space-y-5">
        <h1 className="text-4xl font-extrabold sm:text-5xl xl:text-6xl">
          Yummy!
        </h1>
        <p className="md:text-lg text-gray-500">Busca cualquier receta.</p>
      </div>

      <Form onSubmit={({ search }) => replace(`/recipes?search=${search}`)}>
        <div className="max-w-sm px-5 mx-auto md:flex md:items-center md:space-x-5">
          <Input
            name="search"
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
      <GreyContainer>
        {loading ? (
          <div className="w-full grid gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
            <Cards length={9} />
          </div>
        ) : recipes ? (
          <div className="w-full grid gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
            {recipes.map(
              ({
                _id,
                name,
                author,
                blender,
                categories,
                comments,
                created,
                description,
                duration,
                img,
                ingredients,
                likes,
                servings,
                steps,
              }) => (
                <motion.div
                  key={_id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-sm w-full p-4 mx-auto border border-gray-200 rounded-md shadow-sm max-h-md"
                >
                  <div className="w-full h-48">
                    <img
                      src={img}
                      alt={name}
                      className="object-cover h-48 w-full rounded-md"
                    />
                  </div>
                  {categories.map((category) => (
                    <div
                      key={category}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                    >
                      {category}
                    </div>
                  ))}
                  <h5 className="text-xl font-semibold text-gray-700">
                    {name}
                  </h5>
                  <p className="text-gray-700">{description}</p>
                </motion.div>
              )
            )}
          </div>
        ) : (
          <div className="w-full grid gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
            nope
          </div>
        )}
      </GreyContainer>
    </div>
  );
};

export default Recipes;

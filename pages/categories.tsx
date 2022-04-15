import {
  fetchCategories,
  selectCategories,
  selectCategoriesStatus,
} from "@/lib-client/store/features/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@/lib-client/store/hooks";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
const Categories: NextPage = () => {
  const categories = useAppSelector(selectCategories);
  const loading = useAppSelector(selectCategoriesStatus) === "loading";
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!categories) dispatch(fetchCategories());
  }, [categories, dispatch]);

  return (
    <div className="p-5">
      {loading && <p>Loading...</p>}
      {!loading && categories && (
        <div className="container mx-auto">
          <ul className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {categories.map(({ _id, name, img }) => (
              <motion.li
                key={_id}
                className="cursor-pointer"
                initial={{ x: "-100%" }}
                transition={{ duration: 0.5 }}
                animate={{ x: "0%" }}
              >
                <Link href="/" passHref>
                  <div className="card w-full bg-base-100 shadow-xl image-full before:opacity-40">
                    <figure className="w-full h-44 relative">
                      <Image
                        src={img}
                        loading="lazy"
                        alt="hero"
                        layout="fill"
                        className="object-center object-cover pointer-events-none"
                      />
                    </figure>
                    <div className="card-body justify-end p-5">
                      <h2 className="card-title capitalize text-white">
                        {name}
                      </h2>
                    </div>
                  </div>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Categories;

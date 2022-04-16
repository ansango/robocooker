import { motion } from "framer-motion";
import tendencias from "public/home/Tendencias.avif";
import robousers from "public/home/Robousers.avif";
import Link from "next/link";
import Image from "next/image";

const ContentTrending = () => {
  const data = [
    {
      _id: 1,
      title: "tendencias",
      img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650086360/Pages/Home/image_2_wsep6f.avif",
      link: "/trending",
    },
    {
      id: 2,
      title: "robousers",
      img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650086360/Pages/Home/image_3_qvkepu.avif",
      link: "/robousers",
    },
  ];
  return (
    <motion.ul
      className="grid gap-5 sm:grid-cols-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {data.map(({ img, id, title }) => {
        return (
          <li key={id} className="cursor-pointer">
            <Link href="/" passHref>
              <div className="card w-full bg-base-100 shadow-xl image-full before:opacity-40">
                <figure className="w-full h-44 lg:h-64 xl:h-72 relative">
                  <Image
                    src={img}
                    loading="lazy"
                    alt="hero"
                    layout="fill"
                    className="object-center object-cover pointer-events-none"
                  />
                </figure>
                <div className="card-body justify-end p-5">
                  <h2 className="card-title capitalize text-white">{title}</h2>
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </motion.ul>
  );
};

export default ContentTrending;
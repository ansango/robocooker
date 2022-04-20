import { findRecipeByIdPopulated, insertRecipe } from "@/api/db/recipe";
import { auth, database } from "@/api/middlewares";
import { options } from "@/api/nc";
import nc from "next-connect";

import { v2 as cloudinary } from "cloudinary";
import multer from "multer";


const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } =
  process.env;

if (CLOUDINARY_CLOUD_NAME && CLOUDINARY_API_KEY && CLOUDINARY_API_SECRET) {
  cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
  });
}
const upload = multer({ dest: "/tmp" });
const handler = nc(options);
handler.use(database, ...auth);

handler.get(async (req, res) => {
  if (!req.query) {
    res.status(400).json({ error: "Bad request" });
    return;
  }
  try {
    const { id } = req.query;
    const recipe = await findRecipeByIdPopulated(req.db, id);
    return res.status(200).json({ recipe });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
});

handler.patch(upload.single("file"), async (req, res) => {
  console.log(req.file);
  console.log(req.body);
  console.log(req.user);
  console.log(req.query);
  if (!req.file)
    return res.status(400).json({ error: "You must attach an image" });
  //   if (!req.user) {
  //     res.status(401).json({ error: "Unauthorized" });
  //     return;
  //   }
  //   if (!req.file) {
  //     return res.status(400).json({ error: "You must attach an image" });
  //   }
  // console.log(req.file);
  //   const { secure_url: img } = await cloudinary.uploader.upload(req.file.path, {
  //     width: 960,
  //     height: 480,
  //     crop: "fill",
  //     transformation: {
  //       format: "webp",
  //     },
  //     folder: "Recipes",
  //   });

  //   if (!img) {
  //     res.status(400).json({ error: "Image not found" });
  //   }
  //   console.log(img);
  //   const unUpdatedRecipe = await findRecipeById(req.db, req.query.id);
  //   const imgUpdated = await updateImageRecipeById(req.db, req.query.id, img);
  //   res.status(200).json({ recipe: { ...unUpdatedRecipe, img } });
});

export default handler;

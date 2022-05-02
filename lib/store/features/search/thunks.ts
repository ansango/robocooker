import { RecipeDTO } from "@/models/recipe/recipe";
import { onGetLastRecipesService } from "@/services/recipes";
import { onBasicSearchService } from "@/services/search";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const search = createAsyncThunk(
  "search/search",
  async ({
    query,
    filters,
  }: {
    query: string;
    filters?: BlenderName[] | CategoryName[];
  }) => {
    console.log("search", query, filters);
    const response = await onBasicSearchService(query, filters);
    return response;
  }
);

export const getLastRecipes = createAsyncThunk(
  "search/last",
  async (limit: number) => {
    const response = onGetLastRecipesService(limit);
    return response;
  }
);

export const filteredSearch = createAsyncThunk(
  "search/filtered",
  async ({
    query,
    filters,
  }: {
    query: string;
    filters: BlenderName[] | CategoryName[];
  }) => {
    console.log("filteredSearch", { query, filters });
    return [fake] as RecipeDTO[];
  }
);

const fake: RecipeDTO = {
  _id: "6269742d3a166c2e4d123c6d",
  name: "Gazpacho",
  description:
    "El gazpacho es una sopa fría servida habitualmente como primer plato. De elaboración muy sencilla y a la que se le añaden diferentes hortalizas y verduras, aliño con aceite de oliva virgen extra, vinagre y sal. Solo hay que triturar y ya está pero os lo explicaré con detalle para que lo hagáis en casa. Seguro que volvéis a repetir, es una de esas recetas que gusta.",
  accountId: "6269678b3a166c2e4d123c67",
  duration: 20,
  servings: 6,
  categories: ["vegetarianas", "veganas", "sopas"],
  blenders: ["mambo"],
  ingredients: [
    {
      measure: "gr",
      name: "Tomate",
      quantity: 1000,
    },
    {
      measure: "gr",
      name: "Pimiento verde",
      quantity: 100,
    },
    {
      measure: "gr",
      name: "Cebolla",
      quantity: 50,
    },
    {
      measure: "gr",
      name: "Pepino",
      quantity: 70,
    },
    {
      measure: "ml",
      name: "Vinagre",
      quantity: 30,
    },
    {
      measure: "ml",
      name: "Aceite de oliva",
      quantity: 50,
    },
    {
      measure: "ml",
      name: "Agua",
      quantity: 250,
    },
    {
      measure: "portion",
      name: "Ajo",
      quantity: 1,
    },
  ],
  steps: [
    {
      description:
        "Introducimos los tomates, el pimiento, la cebolla, el pepino y el ajo sin el germen, programamos la velocidad 5 durante 20 segundos.",
      position: 1,
    },
    {
      description:
        "Bajamos los restos de las paredes, agregamos el resto de ingredientes y programamos la velocidad 10 durante 3 minutos.",
      position: 2,
    },
    {
      description: "Servimos el gazpacho frío.",
      position: 3,
    },
  ],
  likes: ["6269678b3a166c2e4d123c67"],
  comments: [],
  created: new Date(),
  img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1651078190/Recipes/b3k4hnij3yfjv2vdq6hb.jpg",
  account: {
    avatar:
      "https://res.cloudinary.com/db8nr4kcg/image/upload/v1651339097/Avatars/lcth66gn7psdptl5gkz7.jpg",
    firstName: "Aníbal",
    lastName: "Santos",
    username: "ansango",
  },
};

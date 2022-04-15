import { Recipe } from "models/recipe/recipe";

const recipes: Recipe[] = [
  {
    _id: "5e9f9f8f9f8f8f8f8f8f8f8f",
    name: "Pizza Margherita",
    description:
      "A pizza margherita is a simple, classic pizza, made with a thin, crisp base of tomato sauce and mozzarella cheese.",
    img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    author: "bonniegreen",
    categories: ["pizza", "italian"],
    servings: 4,
    duration: 30,
    blender: "KCook",
    ingredients: [
      {
        name: "Tomato sauce",
        unit: 200,
        measure: "gr",
      },
      {
        name: "Mozzarella cheese",
        unit: 200,
        measure: "gr",
      },
      {
        name: "Basil",
        unit: 200,
        measure: "gr",
      },
    ],
    steps: [
      {
        name: "Preheat oven to 180°C",
        position: 1,
      },
      {
        name: "Spread tomato sauce on pizza base",
        position: 2,
      },
      {
        name: "Spread mozzarella cheese on pizza base",
        position: 3,
      },
    ],
    likes: [
      "5e9f9f8f9f8f8f8f8f8f8f8f",
      "5e9f9f8f9f8f8f8f8f8f8f8f",
      "5e9f9f8f9f8f8f8f8f8f8f8f",
      "5e9f9f8f9f8f8f8f8f8f8f8f",
    ],
    comments: [
      "5e9f9f8f9f8f8f8f8f8f8f8f",
      "5e9f9f8f9f8f8f8f8f8f8f8f",
      "5e9f9f8f9f8f8f8f8f8f8f8f",
      "5e9f9f8f9f8f8f8f8f8f8f8f",
    ],
    created: new Date(),
  },
  {
    _id: "5e9f9f8f9f8f8f8f8f8f8f42356",
    name: "Pizza Pepperoni",
    description:
      "A pizza margherita is a simple, classic pizza, made with a thin, crisp base of tomato sauce and mozzarella cheese.",
    img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    author: "bonniegreen",
    categories: ["pizza", "italian"],
    servings: 4,
    duration: 30,
    blender: "KCook",
    ingredients: [
      {
        name: "Tomato sauce",
        unit: 200,
        measure: "gr",
      },
      {
        name: "Mozzarella cheese",
        unit: 200,
        measure: "gr",
      },
      {
        name: "Basil",
        unit: 200,
        measure: "gr",
      },
    ],
    steps: [
      {
        name: "Preheat oven to 180°C",
        position: 1,
      },
      {
        name: "Spread tomato sauce on pizza base",
        position: 2,
      },
      {
        name: "Spread mozzarella cheese on pizza base",
        position: 3,
      },
    ],
    likes: [
      "5e9f9f8f9f8f8f8f8f8f8f8f",
      "5e9f9f8f9f8f8f8f8f8f8f8f",
      "5e9f9f8f9f8f8f8f8f8f8f8f",
      "5e9f9f8f9f8f8f8f8f8f8f8f",
    ],
    comments: [
      "5e9f9f8f9f8f8f8f8f8f8f8f",
      "5e9f9f8f9f8f8f8f8f8f8f8f",
      "5e9f9f8f9f8f8f8f8f8f8f8f",
      "5e9f9f8f9f8f8f8f8f8f8f8f",
    ],
    created: new Date(),
  },
  {
    _id: "5e9f9f8f9f8f8f8f8f8f8f8f",
    name: "Burger",
    description:
      "A burger is a sandwich consisting of one or more cooked patties of meat, placed on a single piece of bread.",
    img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    author: "bonniegreen",
    categories: ["burger", "fastfood"],
    servings: 4,
    duration: 30,
    blender: "KCook",
    ingredients: [
      {
        name: "Tomato sauce",
        unit: 200,
        measure: "gr",
      },
      {
        name: "Mozzarella cheese",
        unit: 200,
        measure: "gr",
      },
      {
        name: "Basil",
        unit: 200,
        measure: "gr",
      },
    ],
    steps: [
      {
        name: "Preheat oven to 180°C",
        position: 1,
      },
      {
        name: "Spread tomato sauce on pizza base",
        position: 2,
      },
      {
        name: "Spread mozzarella cheese on pizza base",
        position: 3,
      },
    ],
    likes: [
      "5e9f9f8f9f8f8f8f8f8f8f8f",
      "5e9f9f8f9f8f8f8f8f8f8f8f",
      "5e9f9f8f9f8f8f8f8f8f8f8f",
      "5e9f9f8f9f8f8f8f8f8f8f8f",
    ],
    comments: [
      "5e9f9f8f9f8f8f8f8f8f8f8f",
      "5e9f9f8f9f8f8f8f8f8f8f8f",
      "5e9f9f8f9f8f8f8f8f8f8f8f",
      "5e9f9f8f9f8f8f8f8f8f8f8f",
    ],
    created: new Date(),
  },
  {
    _id: "5e9f9f8f9f8f8f8f8f8f8f8f",
    name: "Burger",
    description:
      "A burger is a sandwich consisting of one or more cooked patties of meat, placed on a single piece of bread.",
    img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    author: "bonniegreen",
    categories: ["burger", "fastfood"],
    servings: 4,
    duration: 30,
    blender: "KCook",
    ingredients: [
      {
        name: "Tomato sauce",
        unit: 200,
        measure: "gr",
      },
      {
        name: "Mozzarella cheese",
        unit: 200,
        measure: "gr",
      },
      {
        name: "Basil",
        unit: 200,
        measure: "gr",
      },
    ],
    steps: [
      {
        name: "Preheat oven to 180°C",
        position: 1,
      },
      {
        name: "Spread tomato sauce on pizza base",
        position: 2,
      },
      {
        name: "Spread mozzarella cheese on pizza base",
        position: 3,
      },
    ],
    likes: [
      "5e9f9f8f9f8f8f8f8f8f8f8f",
      "5e9f9f8f9f8f8f8f8f8f8f8f",
      "5e9f9f8f9f8f8f8f8f8f8f8f",
      "5e9f9f8f9f8f8f8f8f8f8f8f",
    ],
    comments: [
      "5e9f9f8f9f8f8f8f8f8f8f8f",
      "5e9f9f8f9f8f8f8f8f8f8f8f",
      "5e9f9f8f9f8f8f8f8f8f8f8f",
      "5e9f9f8f9f8f8f8f8f8f8f8f",
    ],
    created: new Date(),
  },
  {
    _id: "5e9f9f8f9f8f8f8f8f8f8f8f",
    name: "Burger",
    description:
      "A burger is a sandwich consisting of one or more cooked patties of meat, placed on a single piece of bread.",
    img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    author: "bonniegreen",
    categories: ["burger", "fastfood"],
    servings: 4,
    duration: 30,
    blender: "KCook",
    ingredients: [
      {
        name: "Tomato sauce",
        unit: 200,
        measure: "gr",
      },
      {
        name: "Mozzarella cheese",
        unit: 200,
        measure: "gr",
      },
      {
        name: "Basil",
        unit: 200,
        measure: "gr",
      },
    ],
    steps: [
      {
        name: "Preheat oven to 180°C",
        position: 1,
      },
      {
        name: "Spread tomato sauce on pizza base",
        position: 2,
      },
      {
        name: "Spread mozzarella cheese on pizza base",
        position: 3,
      },
    ],
    likes: [
      "5e9f9f8f9f8f8f8f8f8f8f8f",
      "5e9f9f8f9f8f8f8f8f8f8f8f",
      "5e9f9f8f9f8f8f8f8f8f8f8f",
      "5e9f9f8f9f8f8f8f8f8f8f8f",
    ],
    comments: [
      "5e9f9f8f9f8f8f8f8f8f8f8f",
      "5e9f9f8f9f8f8f8f8f8f8f8f",
      "5e9f9f8f9f8f8f8f8f8f8f8f",
      "5e9f9f8f9f8f8f8f8f8f8f8f",
    ],
    created: new Date(),
  },
  {
    _id: "5e9f9f8f9f8f8f8f8f8f8f8f",
    name: "Burger",
    description:
      "A burger is a sandwich consisting of one or more cooked patties of meat, placed on a single piece of bread.",
    img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    author: "bonniegreen",
    categories: ["burger", "fastfood"],
    servings: 4,
    duration: 30,
    blender: "KCook",
    ingredients: [
      {
        name: "Tomato sauce",
        unit: 200,
        measure: "gr",
      },
      {
        name: "Mozzarella cheese",
        unit: 200,
        measure: "gr",
      },
      {
        name: "Basil",
        unit: 200,
        measure: "gr",
      },
    ],
    steps: [
      {
        name: "Preheat oven to 180°C",
        position: 1,
      },
      {
        name: "Spread tomato sauce on pizza base",
        position: 2,
      },
      {
        name: "Spread mozzarella cheese on pizza base",
        position: 3,
      },
    ],
    likes: [
      "5e9f9f8f9f8f8f8f8f8f8f8f",
      "5e9f9f8f9f8f8f8f8f8f8f8f",
      "5e9f9f8f9f8f8f8f8f8f8f8f",
      "5e9f9f8f9f8f8f8f8f8f8f8f",
    ],
    comments: [
      "5e9f9f8f9f8f8f8f8f8f8f8f",
      "5e9f9f8f9f8f8f8f8f8f8f8f",
      "5e9f9f8f9f8f8f8f8f8f8f8f",
      "5e9f9f8f9f8f8f8f8f8f8f8f",
    ],
    created: new Date(),
  },
];

const getAllRecipes = (timing: number) => {
  const randomNumber = Math.floor(Math.random() * timing);
  const isOdd = randomNumber % 2 === 0;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isOdd) {
        resolve(recipes);
      } else {
        reject(new Error("Something went wrong"));
      }
    }, timing);
  });
};

const getRecipesBySearchParams = (
  searchParams: string | string[],
  timing: number
): Promise<Recipe[]> => {
  const result = recipes.filter((recipe) => {
    if (typeof searchParams === "string") {
      return recipe.name.toLowerCase().includes(searchParams.toLowerCase());
    }
    return searchParams.some((param) =>
      recipe.name.toLowerCase().includes(param.toLowerCase())
    );
  });
  const randomNumber = Math.floor(Math.random() * timing);
  const isOdd = randomNumber % 2 === 0;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isOdd) {
        resolve(result);
      } else {
        reject(new Error("Something went wrong"));
      }
    }, timing);
  });
};

export { getRecipesBySearchParams, getAllRecipes };

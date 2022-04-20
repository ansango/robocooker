type RecipeDAO = {
  accountId: AccountId;
  blenders: BlenderName[];
  categories: CategoryName[];
  description: Content;
  duration: Duration;
  ingredients: Ingredient[];
  name: Name;
  servings: Servings;
  steps: Step[];
};

type RecipeDTO = {
  account: {
    avatar: Url;
    firstName: Name;
    lastName: Name;
    username: Username;
  };
} & Recipe;

type Recipe = {
  _id: RecipeId;
  name: Name;
  description: Content;
  img: Url | null;
  categories: CategoryName[];
  servings: Servings;
  duration: Duration;
  blenders: BlenderName[];
  ingredients: Ingredient[];
  steps: Step[];
  likes: UserId[];
  comments: CommentId[];
  created: Date;
  accountId: AccountId;
};

type Step = {
  description: Content;
  position: Position;
};

type Ingredient = {
  name: Name;
  quantity: Unit;
  measure: Measure;
};

export {
  type Recipe,
  type Step,
  type Ingredient,
  type RecipeDAO,
  type RecipeDTO,
};

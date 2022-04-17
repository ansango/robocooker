type Recipe = {
  _id: RecipeId;
  name: Name;
  description: Content;
  img: Url;
  categories: CategoryName[];
  servings: Servings;
  duration: Duration;
  blender: BlenderName;
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
  unit: Unit;
  measure: Measure;
};

export { type Recipe, type Step, type Ingredient };

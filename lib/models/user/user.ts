import { Chat } from "lib/models/chat/chat";

type Follower = {
  userId: UserId;
  username: Username;
};

type User = {
  _id: UserId;
  email: Email;
  emailVerified: boolean;
  username: Username;
  password: Password | undefined;
  accountId: AccountId;
  created: Date;
};

type Account = {
  _id: AccountId;
  about: Content;
  avatar: Url;
  firstName: FirstName;
  lastName: LastName;
  phone: Phone;
  birthday: Birthday | null;
  address: Address;
  recipes: RecipeId[];
  collections: CollectionId[];
  favorites: RecipeId[];
  chat: Chat[];
  followers: Follower[];
  following: Follower[];
  preferences: CategoryId[] | BlenderId[];
};

type Address = {
  address: string;
  city: City;
  country: Country;
  zip: Zip;
};

export { type User, type Account, type Address, type Follower };

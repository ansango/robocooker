import { RecipeDTO } from "@/models/recipe/recipe";
import { FC } from "react";
import Author from "./Author";
import Options from "./Options";

type Props = {
  account: RecipeDTO["account"];
  created: RecipeDTO["created"];
  id: string;
};

const AuthorOptionsBlock: FC<Props> = ({ account, created, id }) => {
  return (
    <div className="flex justify-between items-center">
      <Author account={account} created={created} />
      <Options id={id} />
    </div>
  );
};

export default AuthorOptionsBlock;

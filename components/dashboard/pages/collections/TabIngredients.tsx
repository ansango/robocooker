import { selectIngredients } from "@/store/features/account/collection";
import { useAppSelector } from "@/store/hooks";
import { mergeIngredients } from "@/utils/mappers";
import { FC, useState } from "react";

const IngredientC = ({ ingredient: { name, quantity, measure } }: any) => {
  const [isChecked, setIsChecked] = useState(false);
  const cn = isChecked ? "form-control line-through" : "form-control";
  return (
    <div className={cn}>
      <label className="label cursor-pointer">
        <div className="label-text space-x-2 flex justify-between w-full">
          <span className="font-medium">{name}</span>
          <span className="space-x-1">
            <span>{quantity}</span>
            <span>{measure === "portion" ? "un" : measure}.</span>
          </span>
        </div>
        <input
          type="checkbox"
          className="checkbox checkbox-accent ml-3"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
      </label>
    </div>
  );
};

const TabIngredients: FC = () => {
  const data = useAppSelector(selectIngredients) || [];
  const ingredients = mergeIngredients(data);
  return (
    <div>
      <div>
        {ingredients.map((ingredient, index) => (
          <IngredientC key={index} ingredient={ingredient} />
        ))}
      </div>
    </div>
  );
};

export default TabIngredients;

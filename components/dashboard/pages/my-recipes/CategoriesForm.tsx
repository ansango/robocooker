import { RecipeDTO } from "@/models/recipe/recipe";
import { selectBlenders } from "@/store/features/blenders";
import { getBlenders } from "@/store/features/blenders/thunks";
import { selectCategories } from "@/store/features/categories";
import { getCategories } from "@/store/features/categories/thunks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import CardSlim from "components/common/Cards/Slim/CardSlim";
import CardSlimAction from "components/common/Cards/Slim/CardSlimAction";
import CardSlimContent from "components/common/Cards/Slim/CardSlimContent";
import { Form } from "components/common/Forms";
import { MultiSelect } from "components/common/Forms/MultiSelect";
import Step from "components/common/Stepper/Step";
import React, { FC, useEffect, useState } from "react";

type Selector = {
  label: any;
  value: any;
};

type Props = {
  recipe: RecipeDTO;
};

const CategoriesForm: FC<Props> = ({ recipe }) => {
  const categoriesSelected =
    recipe.categories.map((category) => {
      return {
        label: category,
        value: category,
      };
    }) || [];
  const blendersSelected =
    recipe.blenders.map((blender) => {
      return {
        label: blender,
        value: blender,
      };
    }) || [];
  const [selectedCategories, setSelectedCategories] =
    useState<Selector[]>(categoriesSelected);
  const [selectedBlenders, setSelectedBlenders] =
    useState<Selector[]>(blendersSelected);
  const [cats, setCat] = useState<any>([]);
  const [blends, setBlend] = useState<any>([]);
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);
  const blenders = useAppSelector(selectBlenders);
  useEffect(() => {
    if (!categories) {
      dispatch(getCategories());
    }
    if (!blenders) {
      dispatch(getBlenders());
    }
  }, [dispatch, categories, blenders]);
  useEffect(() => {
    if (categories) {
      setCat(
        categories.map(({ name }) => {
          return {
            label: name,
            value: name,
          };
        })
      );
    }
    if (blenders) {
      setBlend(
        blenders.map(({ name }) => {
          return {
            label: name,
            value: name,
          };
        })
      );
    }
  }, [categories, blenders]);
  return (
    <div className="col-span-full 2xl:col-span-4">
      <Form onSubmit={() => {}}>
        <CardSlim>
          <Step
            title="Categorías"
            step={3}
            icon={{
              kind: "outline",
              type: "DocumentTextIcon",
            }}
          >
            <CardSlimContent>
              <MultiSelect
                label="Categorías"
                options={cats}
                value={selectedCategories}
                onChange={setSelectedCategories}
                labelledBy="Select"
              />
              <MultiSelect
                label="Robots de cocina"
                options={blends}
                value={selectedBlenders}
                onChange={setSelectedBlenders}
                labelledBy="Select"
              />
              <CardSlimAction>
                <button className="btn btn-primary normal-case" type="submit">
                  Guardar
                </button>
              </CardSlimAction>
            </CardSlimContent>
          </Step>
        </CardSlim>
      </Form>
    </div>
  );
};

export default CategoriesForm;

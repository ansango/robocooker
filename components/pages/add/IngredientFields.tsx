import { Input, Select } from "components/common/Forms";
import { Icon } from "components/common/Icons";
import { FC, memo } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

const Ingredients: FC = () => {
  const { control } = useFormContext();
  const { fields, remove, append } = useFieldArray({
    control,
    name: "ingredients",
  });

  return (
    <>
      <ul className="space-y-2 w-full">
        {fields.map((item, index) => {
          return (
            <li key={item.id} className="grid grid-cols-12 gap-5">
              <div className="col-span-full sm:col-span-4 md:col-span-6 lg:col-span-7">
                <Input
                  name={`ingredients[${index}].name`}
                  type="text"
                  label="Ingrediente"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-2">
                <Input
                  name={`ingredients[${index}].quantity`}
                  type="number"
                  label="Cantidad"
                />
              </div>
              <div className="col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-2">
                <Select
                  name={`ingredients[${index}].measure`}
                  data={[
                    { label: "Gramos", value: "gr" },
                    { label: "Mililitros", value: "ml" },
                    { label: "Unidades", value: "portion" },
                  ]}
                  label="Unidad"
                />
              </div>
              <div className="flex items-end justify-end col-span-full sm:col-span-2 lg:col-span-1">
                <button
                  className="btn btn-error w-full sm:max-w-[3rem] sm:btn-circle"
                  type="button"
                  onClick={() => remove(index)}
                >
                  <Icon icon="XIcon" kind="outline" className="w-5 h-5" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>{" "}
      <div className="flex items-center justify-end space-x-4">
        <h6 className="font-semibold">Añadir ingredientes</h6>
        <button
          className="btn btn-success normal-case btn-circle btn-md"
          type="button"
          onClick={() => {
            append({ name: "", measure: "", quantity: "" });
          }}
        >
          <Icon icon="PlusIcon" kind="outline" className="w-5 h-5" />
        </button>
      </div>
    </>
  );
};

const IngredientFields = memo(Ingredients);

export default IngredientFields;

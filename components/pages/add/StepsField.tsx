import { Input, Select, TextArea } from "components/common/Forms";
import { Icon } from "components/common/Icons";
import React, { memo } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

const Steps = () => {
  // TODO: VALIDATION
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "steps",
  });
  console.log(fields.length);
  return (
    <>
      <ul className="space-y-5 w-full">
        {fields.map((item, index) => {
          return (
            <li key={item.id} className="grid grid-cols-12 gap-5">
              <div className="col-span-full sm:col-span-2 flex items-center">
                <p className="font-medium">Paso {index + 1}</p>
              </div>
              <span className="hidden">
                <Input name={`steps[${index}].position`} type="number" />
              </span>
              <div className="col-span-full sm:col-span-8">
                <TextArea
                  name={`steps[${index}].description`}
                  label="Descripción"
                  size="xs"
                />
              </div>

              <div className="flex items-center justify-end col-span-full sm:col-span-2">
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
      </ul>
      <div className="flex items-center justify-end space-x-4">
        <h6 className="font-semibold">Añadir pasos</h6>
        <button
          className="btn btn-success normal-case btn-circle btn-md"
          type="button"
          onClick={() => {
            append({ description: "", position: fields.length + 1 });
          }}
        >
          <Icon icon="PlusIcon" kind="outline" className="w-5 h-5" />
        </button>
      </div>
    </>
  );
};

const StepsFields = memo(Steps);

export default StepsFields;

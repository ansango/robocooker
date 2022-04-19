import { selectAccount } from "@/store/features/account";
import { selectBlenders } from "@/store/features/blenders";
import { selectCategories } from "@/store/features/categories";
import { selectUser } from "@/store/features/user";
import { useAppSelector } from "@/store/hooks";
import CardBasic from "components/common/Cards/Basic/CardBasic";
import CardBasicTitle from "components/common/Cards/Basic/CardBasicTitle";
import { Checkbox, Form } from "components/common/Forms";
import React, { FC, useCallback } from "react";

const PreferencesForm: FC = () => {
  const user = useAppSelector(selectUser);
  const account = useAppSelector(selectAccount);
  const categories = useAppSelector(selectCategories);
  const blenders = useAppSelector(selectBlenders);
  const onSubmit = useCallback(async () => {
    console.log("submit");
  }, []);

  if (!user || !account || !categories || !blenders) return null;

  return (
    <CardBasic>
      <CardBasicTitle title="Preferencias" />
      <Form onSubmit={onSubmit}>
        <h6 className="font-semibold py-2">Categorías</h6>
        <div className="grid gap-4 grid-cols-12">
          <div className="col-span-full capitalize grid sm:gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-2">
            {categories.map(({ name }, index) => {
              return (
                <Checkbox
                  key={index}
                  name={name}
                  label={name}
                  {...(account.preferences.includes(name)
                    ? { checked: true }
                    : {})}
                />
              );
            })}
          </div>
        </div>
        <h6 className="font-semibold py-2">Robots</h6>
        <div className="grid gap-4 grid-cols-12">
          <div className="col-span-full capitalize grid sm:gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-2">
            {blenders.map(({ name }, index) => (
              <Checkbox
                key={index}
                name={name}
                label={name}
                {...(account.preferences.includes(name)
                  ? { checked: true }
                  : {})}
              />
            ))}
          </div>
        </div>
      </Form>
    </CardBasic>
  );
};

export default PreferencesForm;

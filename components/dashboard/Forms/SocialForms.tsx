import CardBasic from "components/common/Cards/Basic/CardBasic";
import CardBasicTitle from "components/common/Cards/Basic/CardBasicTitle";
import { Form, Input } from "components/common/Forms";
import React from "react";

const SocialForms = () => {
  return (
    <CardBasic>
      <CardBasicTitle title="Redes Sociales" />
      <div className="grid grid-cols-12 gap-5">
        <Form
          onSubmit={() => {}}
          className="flex space-x-5 col-span-full sm:col-span-6"
        >
          <Input
            type="text"
            name="username"
            iconSimple={{
              name: "Facebook",
            }}
          />

          <button type="submit" className="btn btn-primary normal-case">
            Guardar
          </button>
        </Form>
        <Form
          onSubmit={() => {}}
          className="flex space-x-5 col-span-full sm:col-span-6"
        >
          <Input
            type="text"
            name="username"
            iconSimple={{
              name: "Twitter",
            }}
          />

          <button type="submit" className="btn btn-primary normal-case">
            Guardar
          </button>
        </Form>
        <Form
          onSubmit={() => {}}
          className="flex space-x-5 col-span-full sm:col-span-6"
        >
          <Input
            type="text"
            name="username"
            iconSimple={{
              name: "Instagram",
            }}
          />

          <button type="submit" className="btn btn-primary normal-case">
            Guardar
          </button>
        </Form>
        <Form
          onSubmit={() => {}}
          className="flex space-x-5 col-span-full sm:col-span-6"
        >
          <Input
            type="text"
            name="username"
            iconSimple={{
              name: "Youtube",
            }}
          />

          <button type="submit" className="btn btn-primary normal-case">
            Guardar
          </button>
        </Form>
      </div>
    </CardBasic>
  );
};

export default SocialForms;

import { selectAccountId } from "@/store/features/account/account";
import { selectBookmarkRecipes } from "@/store/features/account/bookmark";

import { useAppSelector } from "@/store/hooks";
import CardSlimContent from "components/common/Cards/Slim/CardSlimContent";
import { Form, Input } from "components/common/Forms";

import Modal from "components/common/Modal/Modal";
import ModalAction from "components/common/Modal/ModalAction";
import ModalBox from "components/common/Modal/ModalBox";
import ModalContent from "components/common/Modal/ModalContent";
import ModalTitle from "components/common/Modal/ModalTitle";
import Step from "components/common/Stepper/Step";
import Image from "next/image";
import { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import DeleteButton from "./CreateButton";

const CreateCollection: FC<{ id: string }> = ({ id }) => {
  const accountId = useAppSelector(selectAccountId);
  const dispatch = useDispatch();
  const recipes = useAppSelector(selectBookmarkRecipes);

  return (
    <Modal id={id}>
      <ModalBox id={id}>
        <Form onSubmit={() => {}}>
          <ModalTitle label="Crear colección" />
          <ModalContent>
            <Form onSubmit={() => {}}>
              <div className="card card-compact overflow-visible bg-base-100 w-full">
                <div className="card-body">
                  <Step
                    step={1}
                    title="Datos de la colección"
                    icon={{ kind: "outline", type: "DocumentTextIcon" }}
                  >
                    <CardSlimContent>
                      <div className="grid gap-4 grid-cols-12 py-5">
                        <div className="col-span-full sm:col-span-6 lg:col-span-full 2xl:col-span-6">
                          <Input
                            name="Nombre"
                            type="text"
                            placeholder="Nombre"
                            options={{
                              required: {
                                value: true,
                                message: "Introduce un nombre",
                              },
                            }}
                          />
                        </div>
                        <div className="col-span-full sm:col-span-6 lg:col-span-full 2xl:col-span-6">
                          <Input
                            name="Descripción"
                            type="text"
                            placeholder="Descripción"
                            options={{
                              required: {
                                value: true,
                                message: "Introduce una descripción",
                              },
                            }}
                          />
                        </div>
                      </div>
                    </CardSlimContent>
                  </Step>
                </div>
              </div>
              <div className="card card-compact overflow-visible bg-base-100 w-full">
                <div className="card-body">
                  <Step
                    step={2}
                    title="Elegir recetas"
                    icon={{ kind: "outline", type: "CollectionIcon" }}
                  >
                    <div className="py-2">
                      {recipes && recipes.length > 0 ? (
                        <div className="grid grid-cols-12 gap-5 max-h-96 overflow-y-auto py-7">
                          {recipes.map(({ _id, img, name }, i) => (
                            <div key={_id} className="col-span-4">
                              <div className="relative w-24 h-24 space-y-2">
                                <input
                                  type="checkbox"
                                  className="checkbox absolute z-10 right-0 top-0 checkbox-accent bg-base-100"
                                />
                                <div className="mask mask-squircle w-24 h-24 opacity-80">
                                  <Image
                                    src={img}
                                    loading="lazy"
                                    alt="hero"
                                    layout="fill"
                                    className="object-center object-cover pointer-events-none"
                                  />
                                </div>
                                <div className="text-sm text-center">
                                  {name}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </Step>
                </div>
              </div>
            </Form>
          </ModalContent>
          <ModalAction>
            <DeleteButton />
          </ModalAction>
        </Form>
      </ModalBox>
    </Modal>
  );
};

export default CreateCollection;

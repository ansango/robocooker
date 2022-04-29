import { Collection } from "@/models/user/bookmark";
import {
  selectBookmarkId,
  selectBookmarkRecipes,
} from "@/store/features/account/bookmark";
import { addCollection } from "@/store/features/account/bookmark/thunks";
import { useAppSelector } from "@/store/hooks";
import { generateUuid } from "@/utils/uuid";
import CardSlimContent from "components/common/Cards/Slim/CardSlimContent";
import { Checkbox, Form, Input } from "components/common/Forms";
import Modal from "components/common/Modal/Modal";
import ModalAction from "components/common/Modal/ModalAction";
import ModalBox from "components/common/Modal/ModalBox";
import ModalContent from "components/common/Modal/ModalContent";
import ModalTitle from "components/common/Modal/ModalTitle";
import { closeModal } from "components/common/Modal/utils";
import Step from "components/common/Stepper/Step";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import CreateButton from "./CreateButton";

const CreateCollection: FC<{ id: string }> = ({ id }) => {
  const bookmarkId = useAppSelector(selectBookmarkId);
  const dispatch = useDispatch();
  const recipesSelector = useAppSelector(selectBookmarkRecipes);

  const onSubmit = useCallback(
    ({ name, description, recipes }: any) => {
      if (recipesSelector && bookmarkId) {
        const recipeIds = Object.keys(recipes).filter(
          (key) => recipes[key] === true
        );
        const recipesData = recipesSelector.filter((recipe) =>
          recipeIds.includes(recipe._id)
        );

        const collection: Collection = {
          uuid: generateUuid(),
          name,
          description,
          recipes: recipesData,
          created: new Date(),
        };
        dispatch(addCollection({ collection, bookmarkId }));
        closeModal(id);
      }
    },
    [bookmarkId, dispatch, id, recipesSelector]
  );
  return (
    <Modal id={id}>
      <ModalBox id={id}>
        <Form onSubmit={onSubmit}>
          <ModalTitle label="Crear colección" />
          <ModalContent>
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
                          name="name"
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
                          name="description"
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
                    {recipesSelector && recipesSelector.length > 0 ? (
                      <div className="grid grid-cols-12 gap-5 max-h-96 overflow-y-auto py-7">
                        {recipesSelector.map(({ _id, img, name }, i) => (
                          <div key={_id} className="col-span-4">
                            <div className="relative w-24 h-24 space-y-2">
                              <div className="z-10 right-0 top-0 bg-transparent absolute">
                                <Checkbox
                                  name={`recipes[${_id}]`}
                                  kind="accent"
                                />
                              </div>
                              <div className="mask mask-squircle w-24 h-24">
                                <Image
                                  src={img}
                                  loading="lazy"
                                  alt="hero"
                                  layout="fill"
                                  className="object-center object-cover pointer-events-none"
                                />
                              </div>
                              <div className="text-sm text-center">{name}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </Step>
              </div>
            </div>
          </ModalContent>
          <ModalAction>
            <CreateButton />
          </ModalAction>
        </Form>
      </ModalBox>
    </Modal>
  );
};

export default CreateCollection;
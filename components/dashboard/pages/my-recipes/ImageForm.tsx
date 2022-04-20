import { RecipeDTO } from "@/models/recipe/recipe";
import CardSlim from "components/common/Cards/Slim/CardSlim";
import CardSlimAction from "components/common/Cards/Slim/CardSlimAction";
import CardSlimContent from "components/common/Cards/Slim/CardSlimContent";
import { File, Form } from "components/common/Forms";
import Step from "components/common/Stepper/Step";
import Image from "next/image";
import { FC } from "react";

type FullAvatar = {
  size: "xs" | "sm" | "md" | "lg";
  imgUrl: string;
};

enum sizeFull {
  xs = "w-8",
  sm = "w-16",
  md = "w-20",
  lg = "w-32",
}

const FullAvatar: FC<FullAvatar> = ({ size, imgUrl }) => {
  const cnSize = `${sizeFull[size]} rounded-full`;
  return (
    <div className="avatar">
      <div className={cnSize}>
        <Image
          src={imgUrl}
          alt=""
          layout="fill"
          objectFit="contain"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

type Props = {
  img: RecipeDTO["img"];
};

const ImageForm: FC<Props> = ({ img }) => {
  return (
    <div className="col-span-full md:col-span-6 lg:col-span-6 2xl:col-span-4">
      <Form onSubmit={() => {}}>
        <CardSlim>
          <Step
            title="Foto de la receta"
            step={1}
            icon={{
              kind: "outline",
              type: "CameraIcon",
            }}
          >
            <CardSlimContent>
              <div className="space-y-4">
                {img && (
                  <div className="card w-full shadow-md image-full before:opacity-50 mt-4">
                    <figure className="w-full h-44 lg:h-40 relative">
                      {img && (
                        <Image
                          src={img}
                          loading="lazy"
                          alt="hero"
                          layout="fill"
                          className="object-center object-cover pointer-events-none"
                        />
                      )}
                    </figure>
                  </div>
                )}
                <File
                  name="image"
                  options={{
                    required: { value: true, message: "Añade una foto" },
                  }}
                />
              </div>
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

export default ImageForm;

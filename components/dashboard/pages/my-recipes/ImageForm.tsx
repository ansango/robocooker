import CardSlim from "components/common/Cards/Slim/CardSlim";
import CardSlimAction from "components/common/Cards/Slim/CardSlimAction";
import CardSlimContent from "components/common/Cards/Slim/CardSlimContent";
import { File, Form } from "components/common/Forms";
import Step from "components/common/Stepper/Step";

const ImageForm = () => {
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
              <File
                name="image"
                options={{
                  required: { value: true, message: "Añade una foto" },
                }}
                // TODO: CAMBIAR POR AVATAR ?
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

export default ImageForm;

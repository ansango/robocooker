import { FC } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";

type Props = {
  name: string;
  options?: RegisterOptions;
  register?: any;
};

const File: FC<Props> = ({ name, options, children, ...rest }) => {
  const { register } = useFormContext();
  return (
    <input
      type="file"
      className="file:mr-4 file:btn file:btn-sm file:normal-case text-sm file:btn-link file:p-0"
      {...register(name, { ...options })}
      {...rest}
    />
  );
};

export default File;

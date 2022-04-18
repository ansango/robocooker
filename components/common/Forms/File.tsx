import { FC, ReactNode } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";

type Props = {
  name: string;
  options?: RegisterOptions;
  register?: any;
};

const File: FC<Props> = ({ name, options, ...rest }) => {
  const { register } = useFormContext();
  return (
    <input
      type="file"
      className="file:mr-4 file:btn file:normal-case text-sm file:btn-primary file:px-4 file:p-0 file:line w-full"
      {...register(name, { ...options })}
      {...rest}
    />
  );
};

export default File;

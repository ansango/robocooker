import { selectOnSignUpStatus } from "@/store/features/user";
import { useAppSelector } from "@/store/hooks";
import { FC } from "react";

const SignUpButton: FC = () => {
  const cn =
    useAppSelector(selectOnSignUpStatus) === true
      ? `btn btn-primary normal-case w-full loading`
      : `btn btn-primary normal-case w-full`;
  return (
    <button className={cn} type="submit">
      Crear cuenta
    </button>
  );
};

export default SignUpButton;

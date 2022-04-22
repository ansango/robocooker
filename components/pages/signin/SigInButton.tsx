import { selectOnSignInStatus } from "@/store/features/user";
import { useAppSelector } from "@/store/hooks";
import { FC } from "react";

const SigInButton: FC = () => {
  const cn =
    useAppSelector(selectOnSignInStatus) === true
      ? `btn btn-primary normal-case w-full loading`
      : `btn btn-primary normal-case w-full`;
  return (
    <button className={cn} type="submit">
      Iniciar sesión
    </button>
  );
};

export default SigInButton;

import { selectOnResetPasswordStatus } from "@/store/features/user";
import { useAppSelector } from "@/store/hooks";
import { FC } from "react";

const ResetButton: FC = () => {
  const cn =
    useAppSelector(selectOnResetPasswordStatus) === true
      ? `btn btn-primary normal-case w-full loading`
      : `btn btn-primary normal-case w-full`;
  return (
    <button className={cn} type="submit">
      Recuperar cuenta
    </button>
  );
};

export default ResetButton;

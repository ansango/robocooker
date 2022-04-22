import { selectOnRecoveryPasswordStatus } from "@/store/features/user";
import { useAppSelector } from "@/store/hooks";

const RecoveryButton = () => {
  const cn =
    useAppSelector(selectOnRecoveryPasswordStatus) === true
      ? `btn btn-primary normal-case w-full loading`
      : `btn btn-primary normal-case w-full`;
  return (
    <button className={cn} type="submit">
      Recuperar cuenta
    </button>
  );
};

export default RecoveryButton;

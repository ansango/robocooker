import { selectAccountOnUpdateFB } from "@/store/features/account";
import { useAppSelector } from "@/store/hooks";
import ButtonSubmit from "components/common/Button/ButtonSubmit";

const FacebookButton = () => {
  const loading = useAppSelector(selectAccountOnUpdateFB) === true;
  return <ButtonSubmit isLoading={loading} />;
};

export default FacebookButton;

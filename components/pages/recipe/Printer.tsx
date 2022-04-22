import { Icon } from "components/common/Icons";
import { FC } from "react";

type Props = {};

const Printer: FC<Props> = () => {
  return (
    <button className="btn btn-ghost btn-sm btn-circle">
      <Icon icon="PrinterIcon" kind="outline" className="w-5 h-5" />
    </button>
  );
};

export default Printer;

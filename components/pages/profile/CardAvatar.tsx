import { Avatar } from "components/common/Avatar";
import { FC } from "react";

type Props = {
  avatar: Url;
};

const CardAvatar: FC<Props> = ({ avatar }) => {
  return (
    <>
      <div className="flex items-center md:hidden sm:mt-5">
        <Avatar size="md" imgUrl={avatar} />
      </div>
      <div className="hidden md:flex md:items-center mt-5">
        <Avatar size="lg" imgUrl={avatar} />
      </div>
    </>
  );
};

export default CardAvatar;

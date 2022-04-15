import Image from "next/image";
import { FC } from "react";

type FullAvatar = {
  size: "xs" | "sm" | "md" | "lg";
  imgUrl: string;
};

enum sizeFull {
  xs = "w-8",
  sm = "w-16",
  md = "w-20",
  lg = "w-32",
}

const FullAvatar: FC<FullAvatar> = ({ size, imgUrl }) => {
  const cnSize = `${sizeFull[size]} rounded-full`;
  return (
    <div className="avatar">
      <div className={cnSize}>
        <Image
          src={imgUrl}
          alt=""
          layout="fill"
          objectFit="contain"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default FullAvatar;

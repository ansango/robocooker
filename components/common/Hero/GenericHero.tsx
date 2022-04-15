import { FC } from "react";

type Props = {
  title: string;
  description: string;
};

const GenericHero: FC<Props> = ({ title, description }) => {
  return (
    <div className="hero h-72 bg-base-100">
      <div className="hero-content sm:text-center">
        <div className="sm:max-w-lg">
          <h1 className="text-5xl font-bold dark:text-gray-300">{title}</h1>
          <p className="py-6 text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default GenericHero;

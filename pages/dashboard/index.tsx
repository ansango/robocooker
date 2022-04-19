import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import { routesDashboard } from "components/common/Navbar/routes";
import ContainerDashboard from "components/dashboard/Container/ContainerDashboard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const generateRandomGradient = () => {
  const colors = [
    "bg-gradient-to-r from-cyan-500 to-blue-500",
    "bg-gradient-to-r from-blue-500 to-purple-500",
    "bg-gradient-to-r from-purple-500 to-pink-500",
    "bg-gradient-to-r from-pink-500 to-red-500",
    "bg-gradient-to-r from-red-500 to-orange-500",
  ];

  return colors[Math.floor(Math.random() * colors.length)];
};

const Dashboard = () => {
  return (
    <ContainerDashboard>
      <GenericDashboardHero title="¿Qué quieres hacer?" />
      <div className="p-5">
        <div className="container mx-auto">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {routesDashboard.map(({ label, path, description }, index) => {
              if (path === "/dashboard") return null;
              const cn = `${generateRandomGradient()} card w-full shadow-xl image-full opacity-90`;
              return (
                <li key={index} className="cursor-pointer">
                  <Link href={path} passHref>
                    <div className={cn}>
                      <figure className="w-full h-44 lg:h-40 relative">
                        {/* <Image
                src={img}
                loading="lazy"
                alt="hero"
                layout="fill"
                className="object-center object-cover pointer-events-none"
              /> */}
                      </figure>
                      <div className="card-body p-5">
                        <h2 className="card-title capitalize text-white">
                          {label}
                        </h2>
                        {description && (
                          <p className="line-clamp-3 text-white">
                            {description}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </ContainerDashboard>
  );
};

export default Dashboard;

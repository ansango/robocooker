import * as SolidIcons from "@heroicons/react/solid";
type Props = {
  path: string;
  label: string;
  icon: keyof typeof SolidIcons;
};

const routes: Props[] = [
  {
    path: "/recipes",
    label: "Recetas",
    icon: "BookOpenIcon",
  },
  {
    path: "/categories",
    label: "Categorías",
    icon: "ColorSwatchIcon",
  },
  {
    path: "/trending",
    label: "Tendencias",
    icon: "SparklesIcon",
  },
  {
    path: "/robousers",
    label: "Robousers",
    icon: "UserGroupIcon",
  },
];

const routesDashboard: Props[] = [
  {
    path: "/dashboard/settings",
    label: "Ajustes",
    icon: "CogIcon",
  },
  {
    path: "/dashboard/collections",
    label: "Colecciones",
    icon: "BookmarkIcon",
  },
  {
    path: "/dashboard/favorites",
    label: "Favoritos",
    icon: "HeartIcon",
  },
  {
    path: "/dashboard/messages",
    label: "Mensajes",
    icon: "InboxIcon",
  },
];
export { routes, routesDashboard };

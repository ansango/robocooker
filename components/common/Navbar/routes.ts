import * as SolidIcons from "@heroicons/react/solid";
type Props = {
  path: string;
  label: string;
  icon: keyof typeof SolidIcons;
  description?: string;
};

const userNavRoutes: Props[] = [
  {
    path: "/dashboard",
    label: "Dashboard",
    icon: "CogIcon",
  },
  {
    path: "/dashboard/messages",
    label: "Mensajes",
    icon: "InboxIcon",
  },
];

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
    path: "/dashboard",
    label: "Dashboard",
    icon: "CogIcon",
    
  },
  {
    path: "/dashboard/profile",
    label: "Perfil",
    icon: "UserIcon",
    description: "Editar tu datos personales, foto de perfil y contraseña.",
  },
  {
    path: "/dashboard/my-recipes",
    label: "Mis recetas",
    icon: "BookOpenIcon",
    description: "Editar o eliminar tus recetas.",
  },
  {
    path: "/dashboard/collections",
    label: "Colecciones",
    icon: "BookmarkIcon",
    description: "Crear, editar y eliminar tus colecciones.",
  },
  {
    path: "/dashboard/favorites",
    label: "Favoritos",
    icon: "HeartIcon",
    description: "Eliminar recetas de tus favoritos.",
  },
  {
    path: "/dashboard/messages",
    label: "Mensajes",
    icon: "InboxIcon",
    description: "Ver tus mensajes y responder a otros usuarios.",
  },
];
export { routes, routesDashboard, userNavRoutes };

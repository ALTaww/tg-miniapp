import { paths } from "./paths";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Basket from "./pages/Basket";

export const routes = [
  {
    path: paths.Home,
    Component: Home,
  },
  {
    path: paths.NotFound,
    Component: NotFound,
  },
  {
    path: paths.Basket,
    Component: Basket,
  },
];

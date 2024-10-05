import { paths } from "./paths";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Basket from "./pages/Basket";
import UserShops from "./pages/UserAdmin/UserShops";
import ShopManagement from "./pages/UserAdmin/ShopManagement";
import Shop from "./pages/Shop";
import ShopDetails from "./pages/ShopDetails";
import ShopSettings from "./pages/ShopSettings";
import newShop from "./pages/UserAdmin/newShop";
import Test from "./pages/Test/Test";

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
  {
    path: paths.UserShops,
    Component: UserShops,
  },
  {
    path: paths.ShopManagement,
    Component: ShopManagement,
  },
  {
    path: paths.Shop,
    Component: Shop,
  },
  {
    path: paths.ShopDetails,
    Component: ShopDetails,
  },
  {
    path: paths.ShopSettings,
    Component: ShopSettings,
  },
  {
    path: paths.NewShop,
    Component: newShop,
  },
  {
    path: paths.Test,
    Component: Test,
  },
];

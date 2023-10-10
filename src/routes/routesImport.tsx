import { lazyWithRetryAndLoader } from "../utils/lazyWithRetry";

export const RoutesI = {
  Home: lazyWithRetryAndLoader(() => import("../pages/Home")),
  AdminManageProducts: lazyWithRetryAndLoader(
    () => import("../pages/Admin/ManageProducts")
  ),
  AdminCreateProduct: lazyWithRetryAndLoader(
    () => import("../pages/Admin/ManageProducts/CreateProduct")
  ),
  Login: lazyWithRetryAndLoader(() => import("../pages/Auth/Login")),
  Register: lazyWithRetryAndLoader(() => import("../pages/Auth/Register")),
};

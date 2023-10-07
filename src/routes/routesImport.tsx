import { lazyWithRetryAndLoader } from "../utils/lazyWithRetry";

export const RoutesI = {
  Home: lazyWithRetryAndLoader(() => import("../pages/Home")),
  AdminManageProducts: lazyWithRetryAndLoader(
    () => import("../pages/Admin/ManageProducts")
  ),
  AdminCreateProduct: lazyWithRetryAndLoader(
    () => import("../pages/Admin/ManageProducts/CreateProduct")
  ),
};

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
  About: lazyWithRetryAndLoader(() => import("../pages/About")),
  Products: lazyWithRetryAndLoader(() => import("../pages/Products")),
  Product: lazyWithRetryAndLoader(() => import("../pages/Product")),
  MyAccount: lazyWithRetryAndLoader(() => import("../pages/MyAccount")),
  BuySuccess: lazyWithRetryAndLoader(() => import("../pages/BuySuccess")),
  RecoverPassword: lazyWithRetryAndLoader(
    () => import("../pages/Auth/RecoverPassword")
  ),
  Policies: lazyWithRetryAndLoader(() => import("../pages/Policies")),
  ShippingPolicies: lazyWithRetryAndLoader(
    () => import("../pages/ShippingPolicies")
  ),
  RefundPolicies: lazyWithRetryAndLoader(
    () => import("../pages/RefundPolicies")
  ),
  Blog: lazyWithRetryAndLoader(() => import("../pages/Blog")),
  Testemonials: lazyWithRetryAndLoader(() => import("../pages/Testemonials")),
  Contacts: lazyWithRetryAndLoader(() => import("../pages/Contacts")),
};

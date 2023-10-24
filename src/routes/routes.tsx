import MainLayout from "../layouts/MainLayout";

import { subpagesRoutes } from "./SubpagesRoutes";
import { ROUTE_PATHS } from "./constants";
import { RoutesI } from "./routesImport";
import { AppRoute } from "./types";

export const routes: AppRoute[] = [
  ...subpagesRoutes,
  {
    path: ROUTE_PATHS.HOME,
    component: (
      <MainLayout>
        <RoutesI.Home />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.DNA,
    component: (
      <MainLayout>
        <RoutesI.DNA />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.COLLECTIONS,
    component: (
      <MainLayout>
        <RoutesI.Collections />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.PRODUCT,
    component: (
      <MainLayout>
        <RoutesI.Product />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.MY_ACCOUNT,
    component: (
      <MainLayout>
        <RoutesI.MyAccount />
      </MainLayout>
    ),
  },
];

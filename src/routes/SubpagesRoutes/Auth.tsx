import MainLayout from "../../layouts/MainLayout";
import { ROUTE_PATHS } from "../constants";
import { RoutesI } from "../routesImport";

export const authPages = [
  {
    path: ROUTE_PATHS.REGISTER,
    component: (
      <MainLayout>
        <RoutesI.Register />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.LOGIN,
    component: (
      <MainLayout>
        <RoutesI.Login />
      </MainLayout>
    ),
  },
];

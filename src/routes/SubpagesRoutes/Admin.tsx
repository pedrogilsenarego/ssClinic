import WithAdminAuth from "../../hoc/withAdminAuth";
import AdminLayout from "../../layouts/Admin/AdminLayout";
import { ROUTE_PATHS } from "../constants";
import { RoutesI } from "../routesImport";

export const adminPages = [
  {
    path: ROUTE_PATHS.ADMIN,
    component: (
      <WithAdminAuth>
        <AdminLayout>
          <RoutesI.AdminManageProducts />
        </AdminLayout>
      </WithAdminAuth>
    ),
  },
  {
    path: ROUTE_PATHS.ADMIN_EDIT_PRODUCT,
    component: (
      <WithAdminAuth>
        <AdminLayout>
          <RoutesI.AdminCreateProduct edit />
        </AdminLayout>
      </WithAdminAuth>
    ),
  },
  {
    path: ROUTE_PATHS.ADMIN_CREATE_PRODUCT,
    component: (
      <WithAdminAuth>
        <AdminLayout>
          <RoutesI.AdminCreateProduct />
        </AdminLayout>
      </WithAdminAuth>
    ),
  },
];

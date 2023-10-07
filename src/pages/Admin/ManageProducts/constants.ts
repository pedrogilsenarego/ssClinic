import { Column, ColumnType } from "../../../components/TableList/types";
import { i18n } from "../../../translations/i18n";

export const tableColumns: Column[] = [
  {
    id: "model",
    label: i18n.t("pages.admin.manageProducts.list.model", "Model"),
    type: ColumnType.Text,
    sortable: false,
  },
];

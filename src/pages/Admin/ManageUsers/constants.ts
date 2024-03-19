import { Column, ColumnType } from "../../../components/TableList/types";
import { i18n } from "../../../translations/i18n";

export const tableColumns: Column[] = [
  {
    id: "name",
    label: "Nome",
    type: ColumnType.Text,
    sortable: false,
  },
  {
    id: "department",
    label: "Departamento",
    type: ColumnType.Text,
    sortable: false,
  },
  {
    id: "function",
    label: "Função",
    type: ColumnType.Text,
    sortable: false,
  },
  {
    id: "access",
    label: "Acesso",
    type: ColumnType.Text,
    sortable: false,
  },
  {
    id: "actions",
    label: "",
    type: ColumnType.ActionComponent,

    sortable: false,
  },
];

export type ProgramList = {
  id: number;
  title: string;
  date: string;
};

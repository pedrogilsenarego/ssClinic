import TableList from "../../../components/TableList";
import GeneralPage from "../Presentational/GeneralPage";
import { tableColumns } from "./constants";
import { mapAlarmHistoryList } from "./mapper";

const ManageUsers = () => {
  return (
    <GeneralPage title="STAFF INTERNO" subTitle="Utilizadores">
      <div style={{ marginRight: "100px" }}>
        <TableList
          columns={tableColumns}
          rows={mapAlarmHistoryList([1, 2, 2])}
          onAction={() => {}}
        />
      </div>
    </GeneralPage>
  );
};

export default ManageUsers;

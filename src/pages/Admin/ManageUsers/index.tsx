import { useForm } from "react-hook-form";
import ControlledFormInput from "../../../components/Inputs/ControlledInputAdmin";
import TableList from "../../../components/TableList";
import GeneralPage from "../Presentational/GeneralPage";
import { tableColumns } from "./constants";
import { mapAlarmHistoryList } from "./mapper";
import UserAdd from "../../../assets/user-add--01.svg";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../routes/constants";

const ManageUsers = () => {
  const { reset, control, handleSubmit } = useForm<any>({});
  const navigate = useNavigate();

  return (
    <GeneralPage title="STAFF INTERNO" subTitle="Utilizadores">
      <div
        style={{
          display: "flex",
          width: "100%",
          columnGap: "40px",
        }}
      >
        <form style={{ width: "100%" }}>
          <div style={{ width: "100%" }}>
            <ControlledFormInput
              fullWidth
              type="search"
              control={control}
              name="search"
              inputPlaceholder="Encontrar páginas"
              style={{
                width: "100%",
                padding: "20px 3px",
                borderRadius: "15px",
                background: "red",
                display: "flex",
              }}
            />
          </div>
        </form>
        <div
          onClick={() => navigate(ROUTE_PATHS.ADMIN_MANAGE_USERS_CREATE)}
          style={{
            backgroundColor: "#93C0D9",
            borderRadius: "15px",
            padding: "10px 20px",
            display: "flex",
            gap: "10px",
            cursor: "pointer",
          }}
        >
          <img src={UserAdd} alt="" style={{ width: "20px" }} />
          <p style={{ fontSize: "15px" }}>Novo</p>
        </div>
      </div>
      <div style={{ marginTop: "30px" }}>
        <TableList
          columns={tableColumns}
          rows={mapAlarmHistoryList([1, 2, 2])}
          onAction={() => {}}
          pagination={{ page: 2, numberPages: 10 }}
        />
      </div>
    </GeneralPage>
  );
};

export default ManageUsers;

import GeneralPage from "../../Presentational/GeneralPage";
import User from "../../../../assets/Pic.svg";
import { Grid } from "@mui/material";

const CreateUser = () => {
  return (
    <GeneralPage title="Novo Utilizador" subTitle="Staff Interno">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", columnGap: "20px" }}
        >
          <img alt="" src={User} style={{ width: "58px" }} />
          <div
            style={{
              cursor: "pointer",
              backgroundColor: "#515151",
              borderRadius: "20px",
              padding: "6px 20px",
            }}
          >
            <p style={{ fontWeight: 500, color: "white" }}>Editar Fotografia</p>
          </div>
          <div
            style={{ width: "2px", height: "30px", backgroundColor: "black" }}
          ></div>
          <p style={{ fontWeight: 600, fontSize: "24px" }}>Nome...</p>
        </div>
        <div>
          <p>Utilizador desde 5/03/2024</p>
        </div>
      </div>
      <Grid></Grid>
    </GeneralPage>
  );
};

export default CreateUser;

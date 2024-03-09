import { Box } from "@mui/material";
import AdminSideBar from "../../pages/Admin/Presentational/AdminSideBar";
import Logo from "../../assets/EHTIQ BRANDS-11.svg";
import Logo2 from "../../assets/EHTIQ BRANDS-08.svg";

const AdminLayout = (props: any) => {
  return (
    <Box
      style={{
        display: "flex",
        backgroundColor: "#D9D9D9",
        position: "relative",
      }}
    >
      <AdminSideBar />

      <Box style={{ padding: "20px", width: "100%", position: "relative" }}>
        <Box
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src={Logo}
            alt=""
            style={{
              width: "503px",
              position: "absolute",
              left: "50%",
              top: "25%",
              transform: "translateX(-50%)",
            }}
          />
          <img
            src={Logo2}
            alt=""
            style={{
              width: "457px",
              position: "absolute",
              left: "50%",
              top: "45.5%",
              transform: "translateX(-200px)",
            }}
          />
        </Box>
        <Box style={{ position: "absolute", top: "20px", height: "100%" }}>
          {props.children}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;

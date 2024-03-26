import { Container, Typography } from "@mui/material";
import { Colors } from "../../../theme/theme";
import { Icons } from "../../../components/Icons";

const TopFooter = () => {
  return (
    <div
      style={{
        backgroundColor: Colors.gold[400],
      }}
    >
      <Container
        maxWidth="xl"
        style={{
          padding: "10px",
          display: "flex",
          justifyContent: "end",
          columnGap: "20px",
        }}
      >
        <div
          style={{ display: "flex", columnGap: "6px", alignItems: "center" }}
        >
          <Icons.Time style={{ color: "white" }} />
          <Typography
            style={{ color: "white", fontSize: "14px", lineHeight: "0px" }}
          >
            Segunda à sexta{" "}
            <span style={{ color: Colors.white[40050] }}>10AM - 7PM</span>
          </Typography>
        </div>
        <div
          style={{ display: "flex", columnGap: "6px", alignItems: "center" }}
        >
          <Icons.Book style={{ color: "white" }} />
          <Typography
            style={{ color: "white", fontSize: "14px", lineHeight: "0px" }}
          >
            Morada{" "}
            <span style={{ color: Colors.white[40050] }}>
              Rua Castilho 57, 2º Dto, 1250-070 Lisboa
            </span>
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default TopFooter;

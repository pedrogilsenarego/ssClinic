import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Button from "../../../../components/Ui/Button";

const InitialSection2 = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const renderLaptop = () => {
    return (
      <div style={{ display: "flex", flexDirection: "column", rowGap: "50px" }}>
        <div style={{ display: "flex", columnGap: "30px" }}>
          <img
            alt=""
            style={{ width: "50%", height: "340px", objectFit: "cover" }}
            src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              padding: "30px 0px",
            }}
          >
            <Typography>Codigo</Typography>
            <Typography style={{ fontSize: "30px", fontWeight: "bold" }}>
              Nome
            </Typography>
            <Button>
              <Typography>Codigo</Typography>
            </Button>
          </div>
        </div>
        <div style={{ display: "flex", columnGap: "30px" }}>
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              padding: "30px 0px",
            }}
          >
            <Typography>Codigo</Typography>
            <Typography style={{ fontSize: "30px", fontWeight: "bold" }}>
              Nome
            </Typography>
            <div>
              <Button>
                <Typography>Codigo</Typography>
              </Button>
            </div>
          </div>
          <img
            alt=""
            style={{ width: "50%", height: "340px", objectFit: "cover" }}
            src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
          />
        </div>
        <div style={{ display: "flex", columnGap: "30px" }}>
          <img
            alt=""
            style={{ width: "50%", height: "340px", objectFit: "cover" }}
            src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              padding: "30px 0px",
            }}
          >
            <Typography>Codigo</Typography>
            <Typography style={{ fontSize: "30px", fontWeight: "bold" }}>
              Nome
            </Typography>
            <Button>
              <Typography>Codigo</Typography>
            </Button>
          </div>
        </div>
      </div>
    );
  };
  const renderMobile = () => {
    return (
      <div style={{ display: "flex", flexDirection: "column", rowGap: "50px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            alt=""
            style={{ height: "340px", objectFit: "cover", width: "100%" }}
            src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
          />
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Typography>Codigo</Typography>
              <Typography style={{ fontSize: "30px", fontWeight: "bold" }}>
                Nome
              </Typography>
            </div>
            <div>
              <Button>
                <Typography>Codigo</Typography>
              </Button>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            alt=""
            style={{ height: "340px", objectFit: "cover", width: "100%" }}
            src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
          />
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Button>
                <Typography>Codigo</Typography>
              </Button>
            </div>
            <div>
              <Typography>Codigo</Typography>
              <Typography style={{ fontSize: "30px", fontWeight: "bold" }}>
                Nome
              </Typography>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            alt=""
            style={{ height: "340px", objectFit: "cover", width: "100%" }}
            src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
          />
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Typography>Codigo</Typography>
              <Typography style={{ fontSize: "30px", fontWeight: "bold" }}>
                Nome
              </Typography>
            </div>
            <div>
              <Button>
                <Typography>Codigo</Typography>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return mobile ? renderMobile() : renderLaptop();
};

export default InitialSection2;

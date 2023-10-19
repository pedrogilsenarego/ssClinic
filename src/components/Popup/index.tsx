import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

import { Colors } from "../../theme/theme";
import Button from "./ButtonPopup";
import { Actions } from "./types";

interface Props {
  children: JSX.Element;
  title?: string;
  openPopup: boolean;
  setOpenPopup?: (openPopup: boolean) => void;

  actions?: Actions[];
  onClose?: () => void;
}

const Popup = ({
  title,
  children,
  openPopup,
  setOpenPopup,
  actions,
  onClose,
}: Props) => {
  return (
    <div>
      <Dialog
        PaperProps={{ style: { position: "absolute", bottom: 0, right: 0 } }} // Add this style
        hideBackdrop
        open={openPopup}
        onClose={onClose}
      >
        {title && (
          <DialogTitle>
            <div style={{ textAlign: "center" }}>
              <Typography
                component="div"
                style={{
                  fontSize: "28px",
                  color: Colors.blackish[400],
                  fontWeight: 700,
                  letterSpacing: "3px",
                }}
              >
                {title}
              </Typography>
            </div>
          </DialogTitle>
        )}
        <DialogContent
          dividers
          style={{
            color: "white",
            overflow: "hidden",
            msOverflowStyle: "none",
            scrollbarWidth: "none",

            display: "flex",
            alignItems: "center",
          }}
        >
          {children}
          {actions && (
            <>
              <Divider
                style={{
                  width: "100%",
                  background: "#ffffff66",
                  marginTop: "10px",
                }}
              />
              <Grid
                container
                justifyContent="flex-end"
                style={{ marginTop: "10px" }}
              >
                {actions?.map((item, pos) => {
                  return (
                    <Button
                      disabled={item.disabled}
                      title={item.title}
                      key={pos}
                      onClick={item.onClick}
                    />
                  );
                })}
              </Grid>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default Popup;

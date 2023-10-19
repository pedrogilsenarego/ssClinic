import Popover from "@mui/material/Popover";
import * as React from "react";

interface BasicPopoverProps {
  isOpen: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
  children: any;
}

const BasicPopover: React.FC<BasicPopoverProps> = ({
  isOpen,
  anchorEl,
  onClose,
  children,
}) => {
  const id = isOpen ? "simple-popover" : undefined;

  return (
    <div>
      <Popover
        id={id}
        open={isOpen}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          marginTop: "26px",
          cursor: "pointer",
        }}
        PaperProps={{ sx: { borderRadius: "5px" } }}
      >
        {children}
      </Popover>
    </div>
  );
};

export default BasicPopover;

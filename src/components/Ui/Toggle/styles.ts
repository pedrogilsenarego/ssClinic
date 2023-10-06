import { css } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { Colors } from "../../../theme/theme";

export const ToggleInput = styled("input")({
  width: 0,
  height: 0,
  visibility: "hidden",
});

type ToggleLabelProps = {
  isActive?: boolean;
  disabled?: boolean;
  backgroundColor?: string;
  inputColor?: string;
  hasBorder?: boolean;
};

export const ToggleLabel = styled("label")<ToggleLabelProps>(
  ({
    isActive = false,
    disabled = false,
    backgroundColor,
    inputColor,
    hasBorder = false,
  }) => css`
    display: block;
    border: ${hasBorder ? "solid 2px black" : "none"};
    width: ${hasBorder ? "52px" : "48px"};
    height: 28px;
    background-color: ${isActive && !disabled
      ? backgroundColor || Colors.white[400]
      : backgroundColor || Colors.white[400]};
    border-radius: 100px;
    position: relative;
    cursor: pointer;
    transition: 0.3s;
    margin-top: -15px;

    &::after {
      content: "";
      width: 22px;
      height: 22px;
      border: ${hasBorder ? "solid 1px black" : "none"};
      background-color: ${!isActive
        ? Colors.black[400]
        : inputColor || Colors.black[400]};
      position: absolute;
      left: ${isActive
        ? `calc(100% - ${hasBorder ? "26px" : "25px"})`
        : `${hasBorder ? "4px" : "3px"}`};
      top: ${hasBorder ? "2px" : "3px"};
      border-radius: 70px;
      transition: 0.3s;
    }
  `
);

import styled from "@emotion/styled";
import React from "react";

interface StyledProps {
  width?: number | string;
  color?: string;
  height?: number | string;
  mdIcon?: boolean;
}

export type IconProps = React.SVGProps<SVGSVGElement> & StyledProps;
declare global {
  type CommonIconProps = IconProps;
}

export const StyledSvgIcon = styled.svg<StyledProps>(
  ({ width, height, color }) => ({
    width: width ?? 24,
    height: height ?? 24,
    color: color,
  })
);

export const StyledSvgOnBoardingIcon = styled.div<StyledProps>(
  ({ width, height, color }) => ({
    width: width ?? "100%",
    height: height ?? "100%",
    color: color ? color : "currentcolor",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
    },
  })
);

export default StyledSvgIcon;

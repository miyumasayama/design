import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";

export const TriangleRightIcon: FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon
      {...props}
      fill='none'
      viewBox='0 0 35 40'
      sx={{
        width: "35px",
        height: "40px",
      }}
    >
      <path
        d='M34.0373 19.5747L0.254972 39.0041L0.319743 0.0330387L34.0373 19.5747Z'
        fill='#77AE99'
        fill-opacity='0.2'
      />
    </SvgIcon>
  );
};

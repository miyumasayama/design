import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";

export const TriangleLeftIcon: FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon
      {...props}
      fill='none'
      viewBox='0 0 34 40'
      sx={{
        width: "34px",
        height: "40px",
      }}
    >
      <path
        d='M0.0828438 19.6657L33.7608 0.0558482L33.9044 39.0267L0.0828438 19.6657Z'
        fill='#77AE99'
        fill-opacity='0.2'
      />
    </SvgIcon>
  );
};

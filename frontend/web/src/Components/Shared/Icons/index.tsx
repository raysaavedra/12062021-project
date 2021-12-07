import { SvgIcon } from "@mui/material";

export const GreenArrow = (props: any) => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.4454 13.0346V1.14441e-05H0.816406L14.4454 13.0346Z"
      fill="#00EB3E"
    />
  </SvgIcon>
);

export const RedArrow = (props: any) => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.409 0V13.2687H0.535156L14.409 0Z"
      fill="#E91C1C"
    />
  </SvgIcon>
);

export const DefaultArrow = (props: any) => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.427884 0L9.81026 9.38238L0 19.1926L0.427884 0Z"
      fill="#767676"
    />
  </SvgIcon>
);

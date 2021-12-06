import { withStyles } from "@mui/styles";
import { Box } from "@mui/material";

export const CenterBox = withStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
})(Box);
